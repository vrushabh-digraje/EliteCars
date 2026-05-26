package com.org.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.org.dao.UserDAO;
import com.org.model.User;

@WebServlet("/register")
public class RegisterServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        String name =
                request.getParameter("name");

        String email =
                request.getParameter("email");

        String password =
                request.getParameter("password");

        String phone =
                request.getParameter("phone");

        String role =
                request.getParameter("role");

        User user = new User();

        user.setName(name);

        user.setEmail(email);

        user.setPassword(password);

        user.setPhone(phone);

        user.setRole(role);

        java.sql.Connection testCon = null;
        try {
            testCon = com.org.db.DBConnection.getConnection();
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (testCon == null) {
            response.sendRedirect("pages/register.html?error=db");
            return;
        }

        UserDAO dao = new UserDAO();
        boolean status = dao.registerUser(user);

        response.setContentType("text/html");

        if(status) {

        	response.getWriter().println(

        	"<!DOCTYPE html>"

        	+

        	"<html>"

        	+

        	"<head>"
        	+

        	"<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'>"

        	+

        	"<title>Success</title>"

        	+

        	"<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet'>"

        	+

        	"<style>"

        	+

        	"body{"

        	+

        	"height:100vh;"

        	+

        	"display:flex;"

        	+

        	"justify-content:center;"

        	+

        	"align-items:center;"

        	+

        	"background:linear-gradient(135deg,#000,#222);"

        	+

        	"}"

        	+

        	".success-box{"

        	+

        	"background:white;"

        	+

        	"padding:50px;"

        	+

        	"border-radius:20px;"

        	+

        	"text-align:center;"

        	+

        	"box-shadow:0 0 30px rgba(255,215,0,0.5);"

        	+

        	"animation:pop 0.7s ease;"

        	+

        	"}"

        	+

        	"@keyframes pop{"

        	+

        	"0%{transform:scale(0.5);opacity:0;}"

        	+

        	"100%{transform:scale(1);opacity:1;}"

        	+

        	"}"

        	+

        	".check{"

        	+

        	"font-size:80px;"

        	+

        	"color:green;"

        	+

        	"}"

        	+

        	"</style>"

        	+

        	"</head>"

        	+

        	"<body>"

        	+

        	"<div class='success-box'>"

        	+

        	"<i class='bi bi-check-circle-fill text-success' style='font-size:90px;'></i>"

        	+

        	"<h1>Registration Successful</h1>"

        	+

        	"<p>Welcome to EliteCars</p>"

        	+

        	"<a href='pages/login.html' class='btn btn-dark mt-3'>"

        	+

        	"Login Now"

        	+

        	"</a>"

        	+

        	"</div>"

        	+

        	"</body>"

        	+

        	"</html>"

        	);

        	}else {

            response.sendRedirect("pages/register.html?error=duplicate");

        }
    }
}