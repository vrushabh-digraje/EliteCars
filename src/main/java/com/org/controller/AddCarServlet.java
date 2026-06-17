package com.org.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import com.org.dao.CarDAO;
import com.org.model.Car;

@WebServlet("/addCar")
@MultipartConfig(
    fileSizeThreshold = 1024 * 1024 * 2,
    maxFileSize = 1024 * 1024 * 10,
    maxRequestSize = 1024 * 1024 * 50
)
public class AddCarServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        String carName =
                request.getParameter("carName");

        String brand =
                request.getParameter("brand");

        String model =
                request.getParameter("model");

        String category =
                request.getParameter("category");

        String fuelType =
                request.getParameter("fuelType");

        String transmission =
                request.getParameter("transmission");

        double pricePerDay =
                Double.parseDouble(
                request.getParameter("pricePerDay"));

        Part filePart = null;
        String contentType = request.getContentType();
        if (contentType != null && contentType.toLowerCase().contains("multipart/form-data")) {
            try {
                filePart = request.getPart("imageFile");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        String fileName = "";
        if (filePart != null && filePart.getSize() > 0) {
            fileName = java.nio.file.Paths.get(filePart.getSubmittedFileName()).getFileName().toString();
            fileName = System.currentTimeMillis() + "_" + fileName;
            String deployPath = request.getServletContext().getRealPath("") + java.io.File.separator + "images";
            java.io.File uploadDir = new java.io.File(deployPath);
            if (!uploadDir.exists()) {
                uploadDir.mkdir();
            }
            String filePath = deployPath + java.io.File.separator + fileName;
            filePart.write(filePath);
            try {
                String srcPath = "C:\\Users\\ASUS\\Desktop\\Projects\\CarRental\\src\\main\\webapp\\images";
                java.io.File srcDir = new java.io.File(srcPath);
                if (srcDir.exists()) {
                    String srcFilePath = srcPath + java.io.File.separator + fileName;
                    java.nio.file.Files.copy(
                        java.nio.file.Paths.get(filePath),
                        java.nio.file.Paths.get(srcFilePath),
                        java.nio.file.StandardCopyOption.REPLACE_EXISTING
                    );
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        if (fileName.isEmpty()) {
            fileName = request.getParameter("image");
            if (fileName == null) {
                fileName = "default_car.jpg";
            }
        }

        javax.servlet.http.HttpSession session = request.getSession();
        Integer userId = (Integer) session.getAttribute("userId");
        String role = (String) session.getAttribute("role");

        Car car = new Car();

        car.setCarName(carName);

        car.setBrand(brand);

        car.setModel(model);

        car.setCategory(category);

        car.setFuelType(fuelType);

        car.setTransmission(transmission);

        car.setPricePerDay(pricePerDay);

        car.setAvailability("Available");

        car.setImage(fileName);

        if ("owner".equalsIgnoreCase(role) && userId != null) {
            car.setOwnerId(userId);
        }

        CarDAO dao =
                new CarDAO();

        boolean status =
                dao.addCar(car);

        response.setContentType("text/html");

        if(status) {
            String redirectUrl = "pages/add-car.html";
            String returnText = "Add More Cars";
            String dashboardUrl = "pages/admin-dashboard.html";
            String dashboardText = "Admin Dashboard";

            if ("owner".equalsIgnoreCase(role)) {
                dashboardUrl = "pages/owner-dashboard.html";
                dashboardText = "Owner Dashboard";
            }

            response.getWriter().println(
            "<!DOCTYPE html><html><head>"
            + "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet'>"
            + "<style>body{height:100vh;display:flex;justify-content:center;align-items:center;background:linear-gradient(135deg,#06070a,#0d0e15);color:#fff;font-family:sans-serif;}"
            + ".box{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);padding:40px;border-radius:20px;text-align:center;backdrop-filter:blur(15px);}</style>"
            + "</head><body>"
            + "<div class='box'>"
            + "<h2 class='mb-4' style='color:#06b6d4;'>Car Added Successfully</h2>"
            + "<a href='" + redirectUrl + "' class='btn btn-info px-4 py-2 me-3'>" + returnText + "</a>"
            + "<a href='" + dashboardUrl + "' class='btn btn-outline-light px-4 py-2'>" + dashboardText + "</a>"
            + "</div></body></html>"
            );
        } else {
            response.getWriter().println(
            "<!DOCTYPE html><html><head>"
            + "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet'>"
            + "<style>body{height:100vh;display:flex;justify-content:center;align-items:center;background:linear-gradient(135deg,#06070a,#0d0e15);color:#fff;font-family:sans-serif;}"
            + ".box{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);padding:40px;border-radius:20px;text-align:center;backdrop-filter:blur(15px);}</style>"
            + "</head><body>"
            + "<div class='box'>"
            + "<h2 class='mb-4' style='color:#ef4444;'>Failed To Add Car</h2>"
            + "<a href='pages/add-car.html' class='btn btn-outline-light px-4 py-2'>Try Again</a>"
            + "</div></body></html>"
            );
        }
    }
}