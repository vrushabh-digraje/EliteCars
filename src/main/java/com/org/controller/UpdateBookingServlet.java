package com.org.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.org.dao.BookingDAO;
import com.org.dao.CarDAO;
import com.org.model.Booking;
import com.org.model.Car;

@WebServlet("/updateBooking")
public class UpdateBookingServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        
        String action = request.getParameter("action");
        String bookingIdStr = request.getParameter("bookingId");
        
        if (bookingIdStr == null || action == null) {
            out.print("{\"status\":\"error\",\"message\":\"Missing required parameters.\"}");
            return;
        }

        try {
            int bookingId = Integer.parseInt(bookingIdStr);
            BookingDAO bookingDao = new BookingDAO();

            if (action.equalsIgnoreCase("cancel")) {
                boolean result = bookingDao.cancelBooking(bookingId);
                if (result) {
                    out.print("{\"status\":\"success\",\"message\":\"Booking successfully cancelled.\"}");
                } else {
                    out.print("{\"status\":\"error\",\"message\":\"Failed to cancel booking.\"}");
                }
            } else if (action.equalsIgnoreCase("updateDates")) {
                String pickupDate = request.getParameter("pickupDate");
                String returnDate = request.getParameter("returnDate");

                if (pickupDate == null || returnDate == null || pickupDate.isEmpty() || returnDate.isEmpty()) {
                    out.print("{\"status\":\"error\",\"message\":\"Pickup and return dates are required.\"}");
                    return;
                }

                // Load booking & car to calculate new amount
                Booking booking = bookingDao.getBookingById(bookingId);
                if (booking == null) {
                    out.print("{\"status\":\"error\",\"message\":\"Booking not found.\"}");
                    return;
                }

                CarDAO carDao = new CarDAO();
                Car car = carDao.getCarById(booking.getCarId());
                if (car == null) {
                    out.print("{\"status\":\"error\",\"message\":\"Associated vehicle not found.\"}");
                    return;
                }

                // Check date overlapping with other bookings for the same car (excluding this booking)
                // We check if the car is available for the new date range. Since isCarAvailable checks overlapping active bookings,
                // we should allow it if no other bookings overlap, or write a custom check. 
                // But for simplicity, if other bookings overlap, block it.
                // Let's implement an availability check that excludes this current booking:
                boolean available = true;
                try {
                    java.sql.Connection con = com.org.db.DBConnection.getConnection();
                    String sql = "SELECT COUNT(*) FROM bookings " +
                                 "WHERE car_id = ? AND booking_id != ? " +
                                 "  AND status IN ('Pending', 'Approved', 'Confirmed') " +
                                 "  AND pickup_date <= ? " +
                                 "  AND return_date >= ?";
                    java.sql.PreparedStatement ps = con.prepareStatement(sql);
                    ps.setInt(1, booking.getCarId());
                    ps.setInt(2, bookingId);
                    ps.setString(3, returnDate);
                    ps.setString(4, pickupDate);
                    java.sql.ResultSet rs = ps.executeQuery();
                    if (rs.next() && rs.getInt(1) > 0) {
                        available = false;
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }

                if (!available) {
                    out.print("{\"status\":\"error\",\"message\":\"The vehicle is already booked for these dates.\"}");
                    return;
                }

                // Calculate price difference
                LocalDate d1 = LocalDate.parse(pickupDate);
                LocalDate d2 = LocalDate.parse(returnDate);
                long days = ChronoUnit.DAYS.between(d1, d2);
                if (days < 0) {
                    out.print("{\"status\":\"error\",\"message\":\"Return date cannot be before pickup date.\"}");
                    return;
                }
                if (days == 0) {
                    days = 1; // Minimum 1-day rental
                }

                double newTotal = days * car.getPricePerDay();
                boolean result = bookingDao.updateBookingDates(bookingId, pickupDate, returnDate, newTotal);
                
                if (result) {
                    out.print("{\"status\":\"success\",\"message\":\"Booking dates updated successfully.\",\"newAmount\":" + newTotal + "}");
                } else {
                    out.print("{\"status\":\"error\",\"message\":\"Failed to update booking dates.\"}");
                }
            } else {
                out.print("{\"status\":\"error\",\"message\":\"Invalid action.\"}");
            }
        } catch (Exception e) {
            e.printStackTrace();
            out.print("{\"status\":\"error\",\"message\":\"An unexpected server error occurred.\"}");
        } finally {
            out.flush();
        }
    }
}
