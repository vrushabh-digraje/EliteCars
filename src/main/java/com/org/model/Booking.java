package com.org.model;

public class Booking {

    private int bookingId;

    private int userId;

    private int carId;

    private String pickupDate;

    private String returnDate;

    private double totalAmount;

    private String status;

    // Getter Setter

    public int getBookingId() {

        return bookingId;
    }

    public void setBookingId(int bookingId) {

        this.bookingId = bookingId;
    }

    public int getUserId() {

        return userId;
    }

    public void setUserId(int userId) {

        this.userId = userId;
    }

    public int getCarId() {

        return carId;
    }

    public void setCarId(int carId) {

        this.carId = carId;
    }

    public String getPickupDate() {

        return pickupDate;
    }

    public void setPickupDate(String pickupDate) {

        this.pickupDate = pickupDate;
    }

    public String getReturnDate() {

        return returnDate;
    }

    public void setReturnDate(String returnDate) {

        this.returnDate = returnDate;
    }

    public double getTotalAmount() {

        return totalAmount;
    }

    public void setTotalAmount(double totalAmount) {

        this.totalAmount = totalAmount;
    }

    public String getStatus() {

        return status;
    }

    public void setStatus(String status) {

        this.status = status;
    }
}