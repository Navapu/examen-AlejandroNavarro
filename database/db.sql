DROP DATABASE IF EXISTS examen;
CREATE DATABASE examen;
USE examen;
CREATE TABLE img( 
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    fecha VARCHAR(255),
    imagen VARCHAR(255) NOT NULL,
    megusta INT unsigned,
    nomegusta INT
);
INSERT INTO img SET titulo = 'Hola', descripcion = 'Hola', fecha = '22-02-2023', imagen = '/img/Vigo_H_Princesa-600x600.png', megusta = 0, nomegusta = 0;
INSERT INTO img SET titulo = 'Hola2', descripcion = 'Hola2', fecha = '22-02-2023', imagen = '/img/Gallet_clamshell_600x600_movement.jpg', megusta = 0, nomegusta = 0;
INSERT INTO img SET titulo = 'Hola3', descripcion = 'Hola3', fecha = '22-02-2023', imagen = '/img/790d7aeb5a117a433e335bff22622e04.jpg', megusta = 0, nomegusta = 0;
