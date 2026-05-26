package com.org.db;

import java.sql.Connection;
import java.sql.Statement;

public class SchemaUpdate {
    public static void main(String[] args) {
        try {
            Connection con = DBConnection.getConnection();
            Statement stmt = con.createStatement();
            
            // Check if column already exists to prevent crash
            try {
                stmt.executeQuery("SELECT owner_id FROM cars LIMIT 1");
                System.out.println("Column owner_id already exists in cars table.");
            } catch (Exception colEx) {
                // Column does not exist, run alter statement
                String sql = "ALTER TABLE cars ADD COLUMN owner_id INT NULL, "
                        + "ADD CONSTRAINT fk_car_owner FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE SET NULL;";
                stmt.executeUpdate(sql);
                System.out.println("Schema updated successfully: added owner_id to cars table.");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
