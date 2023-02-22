DROP DATABASE IF EXISTS examen;
CREATE DATABASE examen;
USE examen;
CREATE TABLE img( 
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(255) NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    fecha date,
    megusta INT auto_increment,
    nomegusta INT auto_increment
);
