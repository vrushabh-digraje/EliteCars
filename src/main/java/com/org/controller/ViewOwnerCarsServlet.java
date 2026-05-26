package com.org.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.org.dao.CarDAO;
import com.org.model.Car;

@WebServlet("/viewOwnerCars")
public class ViewOwnerCarsServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession();
        Integer ownerId = (Integer) session.getAttribute("userId");

        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        if (ownerId == null) {
            out.print("[]");
            out.flush();
            return;
        }

        CarDAO dao = new CarDAO();
        List<Car> list = dao.getCarsByOwnerId(ownerId);

        Gson gson = new Gson();
        String json = gson.toJson(list);

        out.print(json);
        out.flush();
    }
}
