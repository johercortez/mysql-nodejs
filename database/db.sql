--creando la DB
CREATE DATABASE crud;
USE crud
create table customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMERY KEY,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono VARCHAR(15)
);

show tables;
describe custommer;