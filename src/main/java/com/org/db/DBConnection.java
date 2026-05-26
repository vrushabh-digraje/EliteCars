package com.org.db;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnection {

    private static Connection con;

    public static Connection getConnection() {

        try {

            if(con == null) {

                Class.forName(
                "com.mysql.cj.jdbc.Driver");

                String dbUrl = System.getenv("DB_URL");
                String dbUser = System.getenv("DB_USER");
                String dbPassword = System.getenv("DB_PASSWORD");
                
                if (dbUrl == null) {
                    dbUrl = "jdbc:mysql://localhost:3306/car_rental";
                }
                if (dbUser == null) {
                    dbUser = "root";
                }
                if (dbPassword == null) {
                    dbPassword = "root";
                }

                con = DriverManager.getConnection(dbUrl, dbUser, dbPassword);

                System.out.println(
                "Database Connected");

            }

        } catch(Exception e) {

            e.printStackTrace();
        }

        return con;
    }
}