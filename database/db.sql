DROP DATABASE IF EXISTS examen;
CREATE DATABASE examen;
USE examen;
CREATE TABLE img( 
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    fecha date,
    imagen VARCHAR(255) NOT NULL,
    megusta INT,
    nomegusta INT
);
