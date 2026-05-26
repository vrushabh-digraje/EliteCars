package com.org.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.org.dao.BookingDAO;
import com.org.model.Booking;

@WebServlet("/bookCar")
public class BookCarServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

    	HttpSession session =
    			request.getSession();

    			int userId =
    			(Integer) session.getAttribute(
    			"userId");

        int carId =
                Integer.parseInt(
                request.getParameter("carId"));

        String pickupDate =
                request.getParameter("pickupDate");

        String returnDate =
                request.getParameter("returnDate");

        double totalAmount =
                Double.parseDouble(
                request.getParameter("totalAmount"));

        Booking booking =
                new Booking();

        booking.setUserId(userId);

        booking.setCarId(carId);

        booking.setPickupDate(pickupDate);

        booking.setReturnDate(returnDate);

        booking.setTotalAmount(totalAmount);

        booking.setStatus("Pending");

        BookingDAO dao =
                new BookingDAO();

        // Validate availability
        if (!dao.isCarAvailable(carId, pickupDate, returnDate)) {
            com.org.model.Car car = new com.org.dao.CarDAO().getCarById(carId);
            String carName = (car != null) ? (car.getBrand() + " " + car.getCarName()) : "Vehicle";
            response.sendRedirect("pages/book-car.html?error=unavailable&carId=" + carId + 
                "&price=" + (car != null ? car.getPricePerDay() : 0.0) + 
                "&carName=" + java.net.URLEncoder.encode(carName, "UTF-8"));
            return;
        }

        int bookingId =
                dao.addBooking(booking);

        response.setContentType("text/html");

        if(bookingId > 0) {
            response.sendRedirect("pages/payment.html?bookingId=" + bookingId + "&amount=" + totalAmount);
        } else {
            response.getWriter().println(
                "<h2>Booking Failed</h2>"
            );
        }
    }
}