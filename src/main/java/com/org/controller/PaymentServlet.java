package com.org.controller;

import java.io.IOException;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.org.dao.PaymentDAO;
import com.org.model.Payment;

@WebServlet("/payment")
public class PaymentServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        int bookingId =
                Integer.parseInt(
                request.getParameter("bookingId"));

        double amount =
                Double.parseDouble(
                request.getParameter("amount"));

        // Generate Transaction ID

        String transactionId =
                "TXN" +
                UUID.randomUUID()
                .toString()
                .substring(0,8)
                .toUpperCase();

        Payment payment =
                new Payment();

        payment.setBookingId(
                bookingId);

        payment.setAmount(
                amount);

        payment.setTransactionId(
                transactionId);

        payment.setPaymentStatus(
                "Success");

        PaymentDAO dao =
                new PaymentDAO();

        boolean status =
                dao.makePayment(payment);

        response.setContentType("text/html");

        if(status) {
            // Update booking status in database to Confirmed
            com.org.dao.BookingDAO bookingDao = new com.org.dao.BookingDAO();
            bookingDao.updateBookingStatus(bookingId, "Confirmed");

            // Retrieve booking and car details to populate the invoice parameters
            com.org.model.Booking b = bookingDao.getBookingById(bookingId);
            String carName = "Premium Vehicle";
            String pickupDate = "";
            String returnDate = "";
            if (b != null) {
                pickupDate = b.getPickupDate();
                returnDate = b.getReturnDate();
                com.org.model.Car car = new com.org.dao.CarDAO().getCarById(b.getCarId());
                if (car != null) {
                    carName = car.getBrand() + " " + car.getCarName();
                }
            }

            // Redirect to booking-success.html with query parameters
            response.sendRedirect("pages/booking-success.html"
                + "?bookingId=" + bookingId
                + "&transactionId=" + transactionId
                + "&amount=" + amount
                + "&carName=" + java.net.URLEncoder.encode(carName, "UTF-8")
                + "&pickupDate=" + pickupDate
                + "&returnDate=" + returnDate
            );
        } else {
            response.getWriter().println(
                "<h2>Payment Failed</h2>"
            );
        }
    }
}