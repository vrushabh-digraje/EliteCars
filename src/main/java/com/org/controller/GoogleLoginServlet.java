package com.org.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.org.dao.UserDAO;
import com.org.model.User;

@WebServlet("/google-login")
public class GoogleLoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String idToken = request.getParameter("credential");
        if (idToken == null || idToken.trim().isEmpty()) {
            logDebug("Google Login credentials parameter is missing or empty.", null);
            response.sendRedirect("pages/login.html?error=google_missing");
            return;
        }

        try {
            // Verify token with Google API
            String urlStr = "https://oauth2.googleapis.com/tokeninfo?id_token=" + idToken;
            URL url = new URL(urlStr);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setConnectTimeout(5000);
            conn.setReadTimeout(5000);

            // Add standard User-Agent header to avoid bot blocking
            conn.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36");

            int responseCode = conn.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) {
                BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
                StringBuilder jsonResponse = new StringBuilder();
                String line;
                while ((line = reader.readLine()) != null) {
                    jsonResponse.append(line);
                }
                reader.close();

                String json = jsonResponse.toString();
                String email = extractJsonValue(json, "email");
                String name = extractJsonValue(json, "name");
                
                if (email == null) {
                    logDebug("Google token verification succeeded but returned no email address: " + json, null);
                    response.sendRedirect("pages/login.html?error=google_invalid_token");
                    return;
                }
                if (name == null) {
                    name = email.split("@")[0];
                }

                UserDAO dao = new UserDAO();
                User user = dao.getUserByEmail(email);

                if (user == null) {
                    // Auto-register the new user since it is a new signup via Google
                    user = new User();
                    user.setName(name);
                    user.setEmail(email);
                    user.setPassword("GOOGLE_AUTHENTICATED");
                    user.setPhone("N/A");
                    user.setRole("user"); // Default user role

                    boolean isRegistered = dao.registerUser(user);
                    if (isRegistered) {
                        user = dao.getUserByEmail(email);
                    } else {
                        logDebug("Auto-registration failed for email: " + email, null);
                        response.sendRedirect("pages/login.html?error=google_register_failed");
                        return;
                    }
                }

                if (user != null) {
                    HttpSession session = request.getSession();
                    session.setAttribute("userId", user.getId());
                    session.setAttribute("role", user.getRole());
                    session.setAttribute("user", user);

                    logDebug("User successfully logged in via Google: " + email, null);

                    // Redirect to the appropriate dashboard based on role
                    if (user.getRole().equalsIgnoreCase("admin")) {
                        response.sendRedirect("pages/admin-dashboard.html");
                    } else if (user.getRole().equalsIgnoreCase("owner")) {
                        response.sendRedirect("pages/owner-dashboard.html");
                    } else {
                        response.sendRedirect("pages/user-dashboard.html");
                    }
                } else {
                    logDebug("User object is null after query/registration for email: " + email, null);
                    response.sendRedirect("pages/login.html?error=google_failed");
                }
            } else {
                // Read and log the error message from Google API
                String errorDetails = "";
                if (conn.getErrorStream() != null) {
                    BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getErrorStream(), "UTF-8"));
                    StringBuilder errorResponse = new StringBuilder();
                    String line;
                    while ((line = reader.readLine()) != null) {
                        errorResponse.append(line);
                    }
                    reader.close();
                    errorDetails = errorResponse.toString();
                }
                logDebug("Google API returned response code: " + responseCode + ". Error Details: " + errorDetails, null);
                response.sendRedirect("pages/login.html?error=google_invalid_token");
            }
        } catch (Exception e) {
            logDebug("Exception occurred during Google token verification", e);
            response.sendRedirect("pages/login.html?error=google_error");
        }
    }

    // Robust helper to extract values from a JSON string without external libraries, handling any spaces
    private String extractJsonValue(String json, String key) {
        String pattern = "\"" + key + "\"";
        int index = json.indexOf(pattern);
        if (index != -1) {
            // Locate the colon following the key
            int colonIndex = json.indexOf(":", index + pattern.length());
            if (colonIndex != -1) {
                // Find the opening quote of the value
                int startQuote = json.indexOf("\"", colonIndex);
                if (startQuote != -1) {
                    // Find the closing quote of the value
                    int endQuote = json.indexOf("\"", startQuote + 1);
                    if (endQuote != -1) {
                        return json.substring(startQuote + 1, endQuote);
                    }
                }
            }
        }
        return null;
    }

    // Write logs to a local file for debugging
    private void logDebug(String message, Exception ex) {
        try {
            java.io.File file = new java.io.File("C:\\Users\\ASUS\\Desktop\\Projects\\CarRental\\google_login_debug.log");
            java.io.FileWriter fw = new java.io.FileWriter(file, true);
            java.io.PrintWriter pw = new java.io.PrintWriter(fw);
            pw.println("--- DEBUG LOG: " + new java.util.Date() + " ---");
            pw.println(message);
            if (ex != null) {
                ex.printStackTrace(pw);
            }
            pw.println("----------------------------------------\n");
            pw.close();
            fw.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
