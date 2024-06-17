CREATE DATABASE car_rental_db;
GO

USE car_rental_db;
GO

CREATE TABLE cars (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255) NOT NULL,
    year INT NOT NULL,
    price DECIMAL(18,2) NOT NULL,
    mileage INT NOT NULL,
    rented BIT NOT NULL
);
GO
