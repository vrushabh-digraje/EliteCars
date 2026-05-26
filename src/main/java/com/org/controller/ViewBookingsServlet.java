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
import com.org.dao.BookingDAO;
import com.org.model.Booking;

@WebServlet("/viewBookings")
public class ViewBookingsServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession();
        Integer userId = (Integer) session.getAttribute("userId");
        String role = (String) session.getAttribute("role");

        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        Gson gson = new Gson();
        List<Booking> list = new ArrayList<>();

        if (userId == null || role == null) {
            out.print(gson.toJson(list));
            out.flush();
            return;
        }

        BookingDAO dao = new BookingDAO();

        if ("admin".equalsIgnoreCase(role)) {
            list = dao.getAllBookings();
        } else if ("owner".equalsIgnoreCase(role)) {
            list = dao.getBookingsByOwnerId(userId);
        }

        out.print(gson.toJson(list));
        out.flush();
    }
}
