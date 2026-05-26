package com.org.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.org.dao.CarDAO;
import com.org.dao.BookingDAO;
import com.org.dao.PaymentDAO;

@WebServlet("/getStats")
public class GetStatsServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession();
        Integer userId = (Integer) session.getAttribute("userId");
        String role = (String) session.getAttribute("role");

        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        Gson gson = new Gson();
        Map<String, Object> stats = new HashMap<>();

        if (role == null || userId == null) {
            stats.put("totalCars", 0);
            stats.put("activeBookings", 0);
            stats.put("totalEarnings", 0.0);
            out.print(gson.toJson(stats));
            out.flush();
            return;
        }

        CarDAO carDAO = new CarDAO();
        BookingDAO bookingDAO = new BookingDAO();
        PaymentDAO paymentDAO = new PaymentDAO();

        if ("admin".equalsIgnoreCase(role)) {
            stats.put("totalCars", carDAO.getCarCount());
            stats.put("activeBookings", bookingDAO.getActiveBookingCount());
            stats.put("totalEarnings", paymentDAO.getTotalEarnings());
        } else if ("owner".equalsIgnoreCase(role)) {
            stats.put("totalCars", carDAO.getCarCountByOwnerId(userId));
            stats.put("activeBookings", bookingDAO.getActiveBookingCountByOwnerId(userId));
            stats.put("totalEarnings", paymentDAO.getTotalEarningsByOwnerId(userId));
        } else {
            stats.put("totalCars", 0);
            stats.put("activeBookings", 0);
            stats.put("totalEarnings", 0.0);
        }

        out.print(gson.toJson(stats));
        out.flush();
    }
}
