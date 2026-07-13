# 🏎️ EliteCars — Premium Car Rental Platform

[![Java Version](https://img.shields.io/badge/Java-17%2B-orange?logo=openjdk&logoColor=white)](https://openjdk.org/)
[![Tomcat Version](https://img.shields.io/badge/Tomcat-9.0-blue?logo=apachetomcat&logoColor=white)](https://tomcat.apache.org/)
[![Database](https://img.shields.io/badge/MySQL-8.0-blue?logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Dockerized](https://img.shields.io/badge/Docker-Ready-cyan?logo=docker&logoColor=white)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

EliteCars is a high-performance, multi-tenant Car Rental Web Application built on **Java EE** (Servlets, DAOs, JDBC), HTML5, JavaScript, and MySQL. It features role-based workflows, seamless Google OAuth login, database automation, and a containerized structure ready for immediate deployment.

---

## 🌟 Features by User Role

| Feature | Renter (Customer) | Car Owner | Admin |
| :--- | :---: | :---: | :---: |
| **Browse & Filter Fleet** | ✔️ | — | — |
| **Book & Rent Cars** | ✔️ | — | — |
| **Simulate Payment Gateway** | ✔️ | — | — |
| **Add & Manage Owned Fleet** | — | ✔️ | — |
| **View Analytics & Revenue Stats**| — | ✔️ | ✔️ |
| **Global System Control** | — | — | ✔️ |

---

## 🛠️ Tech Stack & Dependencies

- **Backend Logic**: Java EE Servlets (mapped via annotations)
- **Database Engine**: MySQL 8.0+
- **JSON Processing**: Google Gson (for high-speed AJAX/asynchronous requests)
- **Security & Auth**: Google OAuth API Client (Google Login Integration)
- **Build Automation**: Apache Maven
- **Deployment Container**: Apache Tomcat 9 (Eclipse Temurin JDK 17)

---

## 📁 Repository Structure

```text
EliteCars/
├── Dockerfile                  # Multi-stage Maven/Tomcat build setup
├── pom.xml                     # Maven build script & dependencies
├── schema.sql                  # MySQL database initialization script
├── google_login_debug.log      # Google Login developer debug output
└── src/
    └── main/
        ├── java/com/org/
        │   ├── controller/    # Servlet endpoints (AddCar, Payment, GoogleLogin, etc.)
        │   ├── dao/           # Data Access Objects (UserDAO, BookingDAO, CarDAO)
        │   ├── db/            # Connection factory & automated schema updater
        │   └── model/         # Object models (Booking, User, Car, Payment)
        └── webapp/
            ├── index.html      # Renter landing portal
            ├── WEB-INF/        # Deployment descriptors (web.xml)
            ├── images/         # Fleet images & display banners
            ├── js/             # Catalog fetching & logic scripting
            └── pages/          # Front-end dashboard pages (admin, owner, user)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
