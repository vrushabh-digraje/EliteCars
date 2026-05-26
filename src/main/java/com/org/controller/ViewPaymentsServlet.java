package com.org.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.org.dao.PaymentDAO;
import com.org.model.Payment;

@WebServlet("/viewPayments")
public class ViewPaymentsServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession();
        Integer userId = (Integer) session.getAttribute("userId");
        String role = (String) session.getAttribute("role");

        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        Gson gson = new Gson();
        List<Payment> list = new ArrayList<>();

        if (userId == null || role == null) {
            out.print(gson.toJson(list));
            out.flush();
            return;
        }

        PaymentDAO dao = new PaymentDAO();

        if ("admin".equalsIgnoreCase(role)) {
            list = dao.getAllPayments();
        } else if ("owner".equalsIgnoreCase(role)) {
            list = dao.getPaymentsByOwnerId(userId);
        }

        out.print(gson.toJson(list));
        out.flush();
    }
}
