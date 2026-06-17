package com.org.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.org.dao.CarDAO;

@WebServlet("/updateCar")
public class UpdateCarServlet extends HttpServlet {
    
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        
        String action = request.getParameter("action");
        String carIdStr = request.getParameter("carId");
        
        if (carIdStr == null || carIdStr.isEmpty()) {
            response.getWriter().write("{\"status\":\"error\",\"message\":\"Missing Car ID\"}");
            return;
        }
        
        int carId = Integer.parseInt(carIdStr);
        CarDAO dao = new CarDAO();
        
        if ("delete".equalsIgnoreCase(action)) {
            boolean success = dao.deleteCar(carId);
            if (success) {
                response.getWriter().write("{\"status\":\"success\",\"message\":\"Car removed successfully\"}");
            } else {
                response.getWriter().write("{\"status\":\"error\",\"message\":\"Failed to remove car\"}");
            }
        } else if ("update".equalsIgnoreCase(action)) {
            String carName = request.getParameter("carName");
            String brand = request.getParameter("brand");
            String model = request.getParameter("model");
            String category = request.getParameter("category");
            String fuelType = request.getParameter("fuelType");
            String transmission = request.getParameter("transmission");
            double pricePerDay = Double.parseDouble(request.getParameter("pricePerDay"));
            String availability = request.getParameter("availability");
            
            boolean success = dao.updateCar(carId, carName, brand, model, category, fuelType, transmission, pricePerDay, availability);
            if (success) {
                response.getWriter().write("{\"status\":\"success\",\"message\":\"Car details updated successfully\"}");
            } else {
                response.getWriter().write("{\"status\":\"error\",\"message\":\"Failed to update car details\"}");
            }
        } else {
            response.getWriter().write("{\"status\":\"error\",\"message\":\"Invalid action\"}");
        }
    }
}
