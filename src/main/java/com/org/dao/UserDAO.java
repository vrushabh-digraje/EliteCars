package com.org.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.org.db.DBConnection;
import com.org.model.User;

public class UserDAO {

    Connection con;

    // Register User

    public boolean registerUser(User user) {

        boolean status = false;

        try {

            con = DBConnection.getConnection();

            String sql =
            "INSERT INTO users(name,email,password,phone,role) VALUES(?,?,?,?,?)";

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ps.setString(1,
                    user.getName());

            ps.setString(2,
                    user.getEmail());

            ps.setString(3,
                    user.getPassword());

            ps.setString(4,
                    user.getPhone());

            ps.setString(5,
                    user.getRole());

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

    // Login User/Admin

    public User loginUser(String email,
                          String password) {

        User user = null;

        try {

            con = DBConnection.getConnection();

            String sql =
            "SELECT * FROM users WHERE email=? AND password=?";

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ps.setString(1, email);

            ps.setString(2, password);

            ResultSet rs =
                    ps.executeQuery();

            if(rs.next()) {

                user = new User();

                user.setId(
                rs.getInt("id"));

                user.setName(
                rs.getString("name"));

                user.setEmail(
                rs.getString("email"));

                user.setPhone(
                rs.getString("phone"));

                user.setRole(
                rs.getString("role"));
            }

        } catch(Exception e) {

            e.printStackTrace();
        }

        return user;
    }

    // Get User by Email
    public User getUserByEmail(String email) {
        User user = null;
        try {
            con = DBConnection.getConnection();
            String sql = "SELECT * FROM users WHERE email=?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, email);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                user = new User();
                user.setId(rs.getInt("id"));
                user.setName(rs.getString("name"));
                user.setEmail(rs.getString("email"));
                user.setPhone(rs.getString("phone"));
                user.setRole(rs.getString("role"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return user;
    }
}