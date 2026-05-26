package com.org.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.org.dao.CarDAO;
import com.org.model.Car;

@WebServlet("/viewCars")
public class ViewCarsServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {

        CarDAO dao =
                new CarDAO();

        String pickupDate = request.getParameter("pickupDate");
        String returnDate = request.getParameter("returnDate");

        List<Car> list;
        if (pickupDate != null && !pickupDate.isEmpty() && returnDate != null && !returnDate.isEmpty()) {
            list = dao.getAllCarsWithAvailability(pickupDate, returnDate);
        } else {
            list = dao.getAllCars();
        }

        Gson gson =
                new Gson();

        String json =
                gson.toJson(list);

        response.setContentType(
                "application/json");

        PrintWriter out =
                response.getWriter();

        out.print(json);

        out.flush();
    }
}