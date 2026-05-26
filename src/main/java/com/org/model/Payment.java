package com.org.model;

public class Payment {

    private int paymentId;

    private int bookingId;

    private String transactionId;

    private double amount;

    private String paymentStatus;

    // Getter Setter

    public int getPaymentId() {

        return paymentId;
    }

    public void setPaymentId(int paymentId) {

        this.paymentId = paymentId;
    }

    public int getBookingId() {

        return bookingId;
    }

    public void setBookingId(int bookingId) {

        this.bookingId = bookingId;
    }

    public String getTransactionId() {

        return transactionId;
    }

    public void setTransactionId(
            String transactionId) {

        this.transactionId =
                transactionId;
    }

    public double getAmount() {

        return amount;
    }

    public void setAmount(double amount) {

        this.amount = amount;
    }

    public String getPaymentStatus() {

        return paymentStatus;
    }

    public void setPaymentStatus(
            String paymentStatus) {

        this.paymentStatus =
                paymentStatus;
    }
}