package com.org.controller;

import com.org.db.DBConnection;

public class TestConnection {

    public static void main(String[] args) {

        DBConnection.getConnection();
    }
}