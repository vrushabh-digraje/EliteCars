package com.org.controller;

import java.io.IOException;
import java.io.PrintWriter;
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

@WebServlet("/bookingHistory")
public class BookingHistoryServlet
extends HttpServlet {

    protected void doGet(
            HttpServletRequest request,

            HttpServletResponse response)

            throws ServletException,
            IOException {

        HttpSession session =
                request.getSession();

        int userId =
        (Integer) session.getAttribute(
        "userId");

        BookingDAO dao =
                new BookingDAO();

        List<Booking> list =
                dao.getUserBookings(
                userId);

        Gson gson =
                new Gson();

        String json =
                gson.toJson(list);

        response.setContentType(
                "application/json");

        PrintWriter out =
                response.getWriter();

        out.print(json);

        out.flush();
    }
}