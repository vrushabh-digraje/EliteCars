package com.org.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;

import com.org.db.DBConnection;
import com.org.model.Car;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class CarDAO {

    Connection con;

    // Add Car

    public boolean addCar(Car car) {

        boolean status = false;

        try {

            con = DBConnection.getConnection();

            String sql =
            "INSERT INTO cars(car_name,brand,model,category,fuel_type,transmission,price_per_day,availability,image,owner_id) VALUES(?,?,?,?,?,?,?,?,?,?)";

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ps.setString(1,
                    car.getCarName());

            ps.setString(2,
                    car.getBrand());

            ps.setString(3,
                    car.getModel());

            ps.setString(4,
                    car.getCategory());

            ps.setString(5,
                    car.getFuelType());

            ps.setString(6,
                    car.getTransmission());

            ps.setDouble(7,
                    car.getPricePerDay());

            ps.setString(8,
                    car.getAvailability());

            ps.setString(9,
                    car.getImage());

            if (car.getOwnerId() != null) {
                ps.setInt(10, car.getOwnerId());
            } else {
                ps.setNull(10, java.sql.Types.INTEGER);
            }

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
    
 // View All Cars

    public List<Car> getAllCars() {
        refreshCarAvailability();
        List<Car> list =
                new ArrayList<>();

        try {

            con = DBConnection.getConnection();

            String sql =
            "SELECT * FROM cars";

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ResultSet rs =
                    ps.executeQuery();

            while(rs.next()) {

                Car car = new Car();

                car.setCarId(
                rs.getInt("car_id"));

                car.setCarName(
                rs.getString("car_name"));

                car.setBrand(
                rs.getString("brand"));

                car.setModel(
                rs.getString("model"));

                car.setCategory(
                rs.getString("category"));

                car.setFuelType(
                rs.getString("fuel_type"));

                car.setTransmission(
                rs.getString("transmission"));

                car.setPricePerDay(
                rs.getDouble("price_per_day"));

                car.setAvailability(
                rs.getString("availability"));

                car.setImage(
                rs.getString("image"));

                int ownerVal = rs.getInt("owner_id");
                if (!rs.wasNull()) {
                    car.setOwnerId(ownerVal);
                }

                list.add(car);
            }

        } catch(Exception e) {

            e.printStackTrace();
        }

        return list;
    }

    // Get Single Car by ID
    public Car getCarById(int carId) {
        refreshCarAvailability();
        Car car = null;
        try {
            con = DBConnection.getConnection();
            String sql = "SELECT * FROM cars WHERE car_id=?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, carId);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                car = new Car();
                car.setCarId(rs.getInt("car_id"));
                car.setCarName(rs.getString("car_name"));
                car.setBrand(rs.getString("brand"));
                car.setModel(rs.getString("model"));
                car.setCategory(rs.getString("category"));
                car.setFuelType(rs.getString("fuel_type"));
                car.setTransmission(rs.getString("transmission"));
                car.setPricePerDay(rs.getDouble("price_per_day"));
                car.setAvailability(rs.getString("availability"));
                car.setImage(rs.getString("image"));
                int ownerVal = rs.getInt("owner_id");
                if (!rs.wasNull()) {
                    car.setOwnerId(ownerVal);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return car;
    }

    // Get Cars by Owner ID
    public List<Car> getCarsByOwnerId(int ownerId) {
        refreshCarAvailability();
        List<Car> list = new ArrayList<>();
        try {
            con = DBConnection.getConnection();
            String sql = "SELECT * FROM cars WHERE owner_id=?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, ownerId);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Car car = new Car();
                car.setCarId(rs.getInt("car_id"));
                car.setCarName(rs.getString("car_name"));
                car.setBrand(rs.getString("brand"));
                car.setModel(rs.getString("model"));
                car.setCategory(rs.getString("category"));
                car.setFuelType(rs.getString("fuel_type"));
                car.setTransmission(rs.getString("transmission"));
                car.setPricePerDay(rs.getDouble("price_per_day"));
                car.setAvailability(rs.getString("availability"));
                car.setImage(rs.getString("image"));
                car.setOwnerId(ownerId);
                list.add(car);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    // Get Total Cars Count (for Admin)
    public int getCarCount() {
        int count = 0;
        try {
            con = DBConnection.getConnection();
            String sql = "SELECT COUNT(*) FROM cars";
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

    // Get Cars Count by Owner ID (for Owner)
    public int getCarCountByOwnerId(int ownerId) {
        int count = 0;
        try {
            con = DBConnection.getConnection();
            String sql = "SELECT COUNT(*) FROM cars WHERE owner_id=?";
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

    // Refresh car availability based on active bookings
    public void refreshCarAvailability() {
        try {
            Connection localCon = DBConnection.getConnection();
            String currentDate = java.time.LocalDate.now().toString();
            
            // 1. Auto-complete bookings whose return date is in the past
            String updateBookingsSql = "UPDATE bookings SET status = 'Completed' WHERE return_date < ? AND status IN ('Pending', 'Approved', 'Confirmed')";
            try (PreparedStatement ps1 = localCon.prepareStatement(updateBookingsSql)) {
                ps1.setString(1, currentDate);
                ps1.executeUpdate();
            }
            
            // 2. Mark cars with active bookings as 'Unavailable'
            String markUnavailableSql = "UPDATE cars SET availability = 'Unavailable' WHERE car_id IN (SELECT DISTINCT car_id FROM bookings WHERE status IN ('Pending', 'Approved', 'Confirmed') AND pickup_date <= ? AND return_date >= ?)";
            try (PreparedStatement ps2 = localCon.prepareStatement(markUnavailableSql)) {
                ps2.setString(1, currentDate);
                ps2.setString(2, currentDate);
                ps2.executeUpdate();
            }
            
            // 3. Mark cars without active bookings as 'Available'
            String markAvailableSql = "UPDATE cars SET availability = 'Available' WHERE car_id NOT IN (SELECT DISTINCT car_id FROM bookings WHERE status IN ('Pending', 'Approved', 'Confirmed') AND pickup_date <= ? AND return_date >= ?)";
            try (PreparedStatement ps3 = localCon.prepareStatement(markAvailableSql)) {
                ps3.setString(1, currentDate);
                ps3.setString(2, currentDate);
                ps3.executeUpdate();
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Get All Cars with availability determined for a specific date range
    public List<Car> getAllCarsWithAvailability(String pickupDate, String returnDate) {
        refreshCarAvailability();
        List<Car> list = new ArrayList<>();
        try {
            con = DBConnection.getConnection();
            String sql = "SELECT c.*, " +
                         "(SELECT COUNT(*) FROM bookings b " +
                         " WHERE b.car_id = c.car_id " +
                         "   AND b.status IN ('Pending', 'Approved', 'Confirmed') " +
                         "   AND b.pickup_date <= ? " +
                         "   AND b.return_date >= ?) AS booking_count " +
                         "FROM cars c";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, returnDate);
            ps.setString(2, pickupDate);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Car car = new Car();
                car.setCarId(rs.getInt("car_id"));
                car.setCarName(rs.getString("car_name"));
                car.setBrand(rs.getString("brand"));
                car.setModel(rs.getString("model"));
                car.setCategory(rs.getString("category"));
                car.setFuelType(rs.getString("fuel_type"));
                car.setTransmission(rs.getString("transmission"));
                car.setPricePerDay(rs.getDouble("price_per_day"));
                
                int bookingCount = rs.getInt("booking_count");
                if (bookingCount > 0) {
                    car.setAvailability("Unavailable");
                } else {
                    car.setAvailability(rs.getString("availability"));
                }
                
                car.setImage(rs.getString("image"));
                int ownerVal = rs.getInt("owner_id");
                if (!rs.wasNull()) {
                    car.setOwnerId(ownerVal);
                }
                list.add(car);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}