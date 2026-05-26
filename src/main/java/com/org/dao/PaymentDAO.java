package com.org.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;

import com.org.db.DBConnection;
import com.org.model.Payment;

public class PaymentDAO {

    Connection con;

    // Save Payment

    public boolean makePayment(
            Payment payment) {

        boolean status = false;

        try {

            con = DBConnection
                    .getConnection();

            String sql =
            "INSERT INTO payments(booking_id,transaction_id,amount,payment_status) VALUES(?,?,?,?)";

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ps.setInt(1,
                    payment.getBookingId());

            ps.setString(2,
                    payment.getTransactionId());

            ps.setDouble(3,
                    payment.getAmount());

            ps.setString(4,
                    payment.getPaymentStatus());

            int row =
                    ps.executeUpdate();

            if(row > 0) {

                status = true;
            }

        } catch(Exception e) {

            e.printStackTrace();
        }

        return status;
    }

    // Get Total Completed Payments (for Admin)
    public double getTotalEarnings() {
        double total = 0.0;
        try {
            con = DBConnection.getConnection();
            String sql = "SELECT SUM(amount) FROM payments WHERE payment_status = 'Completed'";
            java.sql.PreparedStatement ps = con.prepareStatement(sql);
            java.sql.ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                total = rs.getDouble(1);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return total;
    }

    // Get Total Completed Payments for Owner's Cars
    public double getTotalEarningsByOwnerId(int ownerId) {
        double total = 0.0;
        try {
            con = DBConnection.getConnection();
            String sql = "SELECT SUM(p.amount) FROM payments p JOIN bookings b ON p.booking_id = b.booking_id JOIN cars c ON b.car_id = c.car_id WHERE c.owner_id=? AND p.payment_status = 'Completed'";
            java.sql.PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, ownerId);
            java.sql.ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                total = rs.getDouble(1);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return total;
    }

    // Get All Payments (for Admin)
    public List<Payment> getAllPayments() {
        List<Payment> list = new ArrayList<>();
        try {
            con = DBConnection.getConnection();
            String sql = "SELECT * FROM payments";
            java.sql.PreparedStatement ps = con.prepareStatement(sql);
            java.sql.ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Payment p = new Payment();
                p.setPaymentId(rs.getInt("payment_id"));
                p.setBookingId(rs.getInt("booking_id"));
                p.setTransactionId(rs.getString("transaction_id"));
                p.setAmount(rs.getDouble("amount"));
                p.setPaymentStatus(rs.getString("payment_status"));
                list.add(p);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    // Get Payments for Owner's Cars
    public List<Payment> getPaymentsByOwnerId(int ownerId) {
        List<Payment> list = new ArrayList<>();
        try {
            con = DBConnection.getConnection();
            String sql = "SELECT p.* FROM payments p JOIN bookings b ON p.booking_id = b.booking_id JOIN cars c ON b.car_id = c.car_id WHERE c.owner_id=?";
            java.sql.PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, ownerId);
            java.sql.ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Payment p = new Payment();
                p.setPaymentId(rs.getInt("payment_id"));
                p.setBookingId(rs.getInt("booking_id"));
                p.setTransactionId(rs.getString("transaction_id"));
                p.setAmount(rs.getDouble("amount"));
                p.setPaymentStatus(rs.getString("payment_status"));
                list.add(p);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}