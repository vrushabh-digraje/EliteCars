package com.org.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.org.model.User;

@WebServlet("/getUser")
public class GetUserServlet
extends HttpServlet {

    protected void doGet(
            HttpServletRequest request,

            HttpServletResponse response)

            throws ServletException,
            IOException {

        HttpSession session =
                request.getSession();

        User user =
        (User) session.getAttribute(
        "user");

        Gson gson =
                new Gson();

        String json =
                gson.toJson(user);

        response.setContentType(
                "application/json");

        PrintWriter out =
                response.getWriter();

        out.print(json);

        out.flush();
    }
}