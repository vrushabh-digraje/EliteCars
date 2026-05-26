package com.org.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;

import com.org.db.DBConnection;
import com.org.model.Booking;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class BookingDAO {

    Connection con;

    // Add Booking

    public int addBooking(Booking booking) {

        int bookingId = -1;

        try {

            con = DBConnection.getConnection();

            String sql =
            "INSERT INTO bookings(user_id,car_id,pickup_date,return_date,total_amount,status) VALUES(?,?,?,?,?,?)";

            PreparedStatement ps =
                    con.prepareStatement(sql, java.sql.Statement.RETURN_GENERATED_KEYS);

            ps.setInt(1,
                    booking.getUserId());

            ps.setInt(2,
                    booking.getCarId());

            ps.setString(3,
                    booking.getPickupDate());

            ps.setString(4,
                    booking.getReturnDate());

            ps.setDouble(5,
                    booking.getTotalAmount());

            ps.setString(6,
                    booking.getStatus());

            int row =
                    ps.executeUpdate();

            // Update Car Availability

            if(row > 0) {

                java.sql.ResultSet rsKeys = ps.getGeneratedKeys();
                if (rsKeys.next()) {
                    bookingId = rsKeys.getInt(1);
                }

                String updateSql =
                "UPDATE cars SET availability='Unavailable' WHERE car_id=?";

                PreparedStatement updatePs =
                        con.prepareStatement(updateSql);

                updatePs.setInt(1,
                        booking.getCarId());

                updatePs.executeUpdate();
            }

        } catch(Exception e) {

            e.printStackTrace();
        }

        return bookingId;
    }
    
 // Get User Bookings

    public List<Booking> getUserBookings(
            int userId){

        List<Booking> list =
                new ArrayList<>();

        try {

            con = DBConnection
                    .getConnection();

            String sql =
            "SELECT * FROM bookings WHERE user_id=?";

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ps.setInt(1, userId);

            ResultSet rs =
                    ps.executeQuery();

            while(rs.next()) {

                Booking booking =
                        new Booking();

                booking.setBookingId(
                rs.getInt("booking_id"));

                booking.setUserId(
                rs.getInt("user_id"));

                booking.setCarId(
                rs.getInt("car_id"));

                booking.setPickupDate(
                rs.getString("pickup_date"));

                booking.setReturnDate(
                rs.getString("return_date"));

                booking.setTotalAmount(
                rs.getDouble("total_amount"));

                booking.setStatus(
                rs.getString("status"));

                list.add(booking);
            }

        } catch(Exception e){

            e.printStackTrace();
        }

        return list;
    }

    // Get Single Booking by ID
    public Booking getBookingById(int bookingId) {
        Booking booking = null;
        try {
            con = DBConnection.getConnection();
            String sql = "SELECT * FROM bookings WHERE booking_id=?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, bookingId);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                booking = new Booking();
                booking.setBookingId(rs.getInt("booking_id"));
                booking.setUserId(rs.getInt("user_id"));
                booking.setCarId(rs.getInt("car_id"));
                booking.setPickupDate(rs.getString("pickup_date"));
                booking.setReturnDate(rs.getString("return_date"));
                booking.setTotalAmount(rs.getDouble("total_amount"));
                booking.setStatus(rs.getString("status"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return booking;
    }

    // Update Booking Status
    public boolean updateBookingStatus(int bookingId, String status) {
        boolean success = false;
        try {
            con = DBConnection.getConnection();
            String sql = "UPDATE bookings SET status=? WHERE booking_id=?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, status);
            ps.setInt(2, bookingId);
            int row = ps.executeUpdate();
            if (row > 0) {
                success = true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return success;
    }

    // Get Active Booking Count (for Admin)
    public int getActiveBookingCount() {
        int count = 0;
        try {
            con = DBConnection.getConnection();
            String sql = "SELECT COUNT(*) FROM bookings WHERE status IN ('Pending', 'Approved', 'Confirmed')";
            PreparedStatement ps = con.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                count = rs.getInt(1);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return count;
    }

    // Get Active Booking Count for Owner's Cars
    public int getActiveBookingCountByOwnerId(int ownerId) {
        int count = 0;
        try {
            con = DBConnection.getConnection();
            String sql = "SELECT COUNT(*) FROM bookings b JOIN cars c ON b.car_id = c.car_id WHERE c.owner_id=? AND b.status IN ('Pending', 'Approved', 'Confirmed')";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, ownerId);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                count = rs.getInt(1);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return count;
    }

    // Check if a car is available for a given date range (no overlapping bookings)
    public boolean isCarAvailable(int carId, String pickupDate, String returnDate) {
        boolean available = true;
        try {
            con = DBConnection.getConnection();
            String sql = "SELECT COUNT(*) FROM bookings " +
                         "WHERE car_id = ? " +
                         "  AND status IN ('Pending', 'Approved', 'Confirmed') " +
                         "  AND pickup_date <= ? " +
                         "  AND return_date >= ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, carId);
            ps.setString(2, returnDate);
            ps.setString(3, pickupDate);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                int count = rs.getInt(1);
                if (count > 0) {
                    available = false;
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return available;
    }

    // Get All Bookings (for Admin)
    public List<Booking> getAllBookings() {
        List<Booking> list = new ArrayList<>();
        try {
            con = DBConnection.getConnection();
            String sql = "SELECT * FROM bookings";
            PreparedStatement ps = con.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Booking booking = new Booking();
                booking.setBookingId(rs.getInt("booking_id"));
                booking.setUserId(rs.getInt("user_id"));
                booking.setCarId(rs.getInt("car_id"));
                booking.setPickupDate(rs.getString("pickup_date"));
                booking.setReturnDate(rs.getString("return_date"));
                booking.setTotalAmount(rs.getDouble("total_amount"));
                booking.setStatus(rs.getString("status"));
                list.add(booking);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    // Get Bookings for Owner's Cars
    public List<Booking> getBookingsByOwnerId(int ownerId) {
        List<Booking> list = new ArrayList<>();
        try {
            con = DBConnection.getConnection();
            String sql = "SELECT b.* FROM bookings b JOIN cars c ON b.car_id = c.car_id WHERE c.owner_id = ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, ownerId);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Booking booking = new Booking();
                booking.setBookingId(rs.getInt("booking_id"));
                booking.setUserId(rs.getInt("user_id"));
                booking.setCarId(rs.getInt("car_id"));
                booking.setPickupDate(rs.getString("pickup_date"));
                booking.setReturnDate(rs.getString("return_date"));
                booking.setTotalAmount(rs.getDouble("total_amount"));
                booking.setStatus(rs.getString("status"));
                list.add(booking);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}