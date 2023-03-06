DROP DATABASE IF EXISTS colegio;
CREATE DATABASE colegio;

USE colegio;

CREATE TABLE preguntas(
    idPregunta INT,
    pregunta VARCHAR(200),
    respuesta CHAR(1)
);

INSERT INTO preguntas (idPregunta, pregunta, respuesta)
VALUES
  (1, 'pregunta1', 'N'),
  (2, 'pregunta2', 'N'),
  (3, 'pregunta3', 'N'),
  (4, 'pregunta4', 'N'),
  (5, 'pregunta5', 'N'),
  (6, 'pregunta6', 'N'),
  (7, 'pregunta7', 'N'),
  (8, 'pregunta8', 'N'),
  (9, 'pregunta9', 'N'),
  (10, 'pregunta10', 'N'),
  (11, 'pregunta11', 'N'),
  (12, 'pregunta12', 'N'),
  (13, 'pregunta13', 'N'),
  (14, 'pregunta14', 'N'),
  (15, 'pregunta15', 'N'),
  (16, 'pregunta16', 'N'),
  (17, 'pregunta17', 'N'),
  (18, 'pregunta18', 'N'),
  (19, 'pregunta19', 'N'),
  (20, 'pregunta20', 'N'),
  (21, 'pregunta21', 'N'),
  (22, 'pregunta22', 'N'),
  (23, 'pregunta23', 'N'),
  (24, 'pregunta24', 'N'),
  (25, 'pregunta25', 'N'),
  (26, 'pregunta26', 'N'),
  (27, 'pregunta27', 'N'),
  (28, 'pregunta28', 'N'),
  (29, 'pregunta29', 'N'),
  (30, 'pregunta30', 'N');