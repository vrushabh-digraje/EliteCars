package com.org.model;

public class Car {

    private int carId;

    private String carName;

    private String brand;

    private String model;

    private String category;

    private String fuelType;

    private String transmission;

    private double pricePerDay;

    private String availability;

    private String image;

    private Integer ownerId;

    // Getter Setter

    public int getCarId() {

        return carId;
    }

    public void setCarId(int carId) {

        this.carId = carId;
    }

    public String getCarName() {

        return carName;
    }

    public void setCarName(String carName) {

        this.carName = carName;
    }

    public String getBrand() {

        return brand;
    }

    public void setBrand(String brand) {

        this.brand = brand;
    }

    public String getModel() {

        return model;
    }

    public void setModel(String model) {

        this.model = model;
    }

    public String getCategory() {

        return category;
    }

    public void setCategory(String category) {

        this.category = category;
    }

    public String getFuelType() {

        return fuelType;
    }

    public void setFuelType(String fuelType) {

        this.fuelType = fuelType;
    }

    public String getTransmission() {

        return transmission;
    }

    public void setTransmission(String transmission) {

        this.transmission = transmission;
    }

    public double getPricePerDay() {

        return pricePerDay;
    }

    public void setPricePerDay(double pricePerDay) {

        this.pricePerDay = pricePerDay;
    }

    public String getAvailability() {

        return availability;
    }

    public void setAvailability(String availability) {

        this.availability = availability;
    }

    public String getImage() {

        return image;
    }

    public void setImage(String image) {

        this.image = image;
    }

    public Integer getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Integer ownerId) {
        this.ownerId = ownerId;
    }
}