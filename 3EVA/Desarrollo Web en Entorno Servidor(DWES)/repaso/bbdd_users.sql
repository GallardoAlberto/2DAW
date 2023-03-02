DROP DATABASE IF EXISTS usuario;
CREATE DATABASE usuario;
USE usuario;

CREATE TABLE informacion(
    usuario VARCHAR(20) PRIMARY KEY,
    contraseña VARCHAR(20)
);

INSERT INTO informacion VALUES
    ('alberto', '1'),
    ('moha', '2'),
    ('rulo', '3');