CREATE DATABASE payroll_db;

USE payroll_db;

CREATE TABLE payroll (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_name VARCHAR(100),
    basic_salary INT,
    bonus INT,
    total_salary INT
);