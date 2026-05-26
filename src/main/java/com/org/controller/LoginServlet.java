package com.org.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.org.dao.UserDAO;
import com.org.model.User;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        String email =
                request.getParameter("email");

        String password =
                request.getParameter("password");

        UserDAO dao =
                new UserDAO();

        User user =
                dao.loginUser(email,
                              password);

        if(user != null) {

            HttpSession session =
                    request.getSession();

            session.setAttribute(
            		"userId",
            		user.getId());

            session.setAttribute(
            		"role",
            		user.getRole());

            session.setAttribute(
            		"user",
            		user);

            // Role Check

            if(user.getRole()
            .equalsIgnoreCase("admin")) {

                response.sendRedirect(
                "pages/admin-dashboard.html");

            } else if(user.getRole()
            .equalsIgnoreCase("owner")) {

                response.sendRedirect(
                "pages/owner-dashboard.html");

            } else {

                response.sendRedirect(
                "pages/user-dashboard.html");
            }

        } else {
            response.sendRedirect("pages/login.html?error=invalid");
        }
    }
}