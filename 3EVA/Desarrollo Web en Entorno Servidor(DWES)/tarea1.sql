DROP DATABASE juegos;
CREATE DATABASE juegos;
USE juegos;
CREATE TABLE categorias(
    idCategoria INT NOT NULL PRIMARY KEY,
    descripcion VARCHAR(25)
);
CREATE TABLE ejemplos(
    idEjemplo INT NOT NULL PRIMARY KEY,
    nombre VARCHAR(25),
    idCategoria INT NOT NULL,
    FOREIGN KEY (idCategoria) REFERENCES categorias(idCategoria)
);
INSERT INTO categorias(idCategoria, descripcion) VALUES (1, 'Accion');
INSERT INTO categorias(idCategoria, descripcion) VALUES (2, 'Aventura');
INSERT INTO categorias(idCategoria, descripcion) VALUES (3, 'Deportes');

INSERT INTO ejemplos(idEjemplo, nombre, idCategoria) VALUES(1, 'FIFA23', 3);
INSERT INTO ejemplos(idEjemplo, nombre, idCategoria) VALUES(2, 'GTAV', 1);
INSERT INTO ejemplos(idEjemplo, nombre, idCategoria) VALUES(3, 'Pokemón Go', 2);

    