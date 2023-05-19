CREATE DATABASE prueba_ariel_sandoval;

/* 1. Revisa el tipo de relación y crea el modelo correspondiente. Respeta las claves
primarias, foráneas y tipos de datos. */

CREATE TABLE
	IF NOT EXISTS peliculas (id INT PRIMARY key, nombre VARCHAR(255), anno INT);

CREATE TABLE
	IF NOT EXISTS tags (id INT PRIMARY key, tag VARCHAR(32));

CREATE TABLE
	IF NOT EXISTS pelicula_tag (
		pelicula_id INT,
		tag_id INT,
		CONSTRAINT fk_pelicula FOREIGN key (pelicula_id) REFERENCES peliculas (id),
		CONSTRAINT fk_tag FOREIGN key (tag_id) REFERENCES tags (id)
	);

/* 2. Inserta 5 películas y 5 tags; la primera película debe tener 3 tags asociados, la
segunda película debe tener 2 tags asociados. */

INSERT INTO
	peliculas (id, nombre, anno)
VALUES
	(1, 'Guardians of the Galaxy Vol. 3', 2023),
	(2, 'Black Panther', 2018),
	(3, 'Avengers: Endgame', 2019),
	(4, 'Ironman', 2008),
	(5, 'Spider-Man: No Way Home', 2021);

INSERT INTO
	tags (id, tag)
VALUES
	(1, 'Action'),
	(2, 'Adventure'),
	(3, 'Comedy'),
	(4, 'Sci-Fi'),
	(5, 'Drama');

INSERT INTO
	pelicula_tag (pelicula_id, tag_id)
VALUES
	(1, 1),
	(1, 2),
	(1, 3),
	(2, 1),
	(2, 4);

/*3. Cuenta la cantidad de tags que tiene cada película. Si una película no tiene tags debe
mostrar 0. */

SELECT
	p.nombre AS "Pelicula",
	COUNT(t.tag) AS "Cantidad de Tags"
FROM
	peliculas p
	LEFT JOIN pelicula_tag pt ON p.id = pt.pelicula_id
	LEFT JOIN tags t ON t.id = pt.tag_id
GROUP BY
	p.nombre
ORDER BY
	COUNT(t.tag) desc;

/* 4. Crea las tablas correspondientes respetando los nombres, tipos, claves primarias y
foráneas y tipos de datos. */

CREATE TABLE
	IF NOT EXISTS preguntas (
		id INT PRIMARY key,
		pregunta VARCHAR(255),
		respuesta_correcta VARCHAR
	);

CREATE TABLE
	IF NOT EXISTS usuarios (id INT PRIMARY key, nombre VARCHAR(32), edad INT);

CREATE TABLE
	IF NOT EXISTS respuestas (
		id INT PRIMARY key,
		respuesta VARCHAR(255),
		usuario_id INT,
		pregunta_id INT,
		CONSTRAINT fk_usuario FOREIGN key (usuario_id) REFERENCES usuarios (id),
		CONSTRAINT fk_pregunta FOREIGN key (pregunta_id) REFERENCES preguntas (id)
	);

/* 5. Agrega 5 usuarios y 5 preguntas.
a. La primera pregunta debe estar respondida correctamente dos veces, por dos
usuarios diferentes.
b. La segunda pregunta debe estar contestada correctamente solo por un
usuario.
c. Las otras dos preguntas deben tener respuestas incorrectas
Contestada correctamente significa que la respuesta indicada en la tabla respuestas
es exactamente igual al texto indicado en la tabla de preguntas.(1 punto) */

INSERT INTO
	preguntas (id, pregunta, respuesta_correcta)
VALUES
	(1, '¿Cual es la capital de Chile?', 'Santiago'),
	(2, '¿Cual es la ciudad más poblada del mundo?', 'Tokio'),
	(3, '¿Quién escribió La Odisea?', 'Homero'),
	(4, '¿Quién es el primer humano que pisó la luna?', 'Neil Armstrong'),
	(5, '¿Cuál es el lugar más frío de la tierra?', 'La Antártida');

INSERT INTO
	usuarios (id, nombre, edad)
VALUES
	(1, 'Ariel', 34),
	(2, 'Maria Ignacia', 33),
	(3, 'Facundo', 28),
	(4, 'Igor', 18),
	(5, 'Toruk', 25);

INSERT INTO
	respuestas (id, respuesta, usuario_id, pregunta_id)
VALUES
	(1, 'Santiago', 1, 1),
	(2, 'Santiago', 5, 1),
	(3, 'Tokio', 2, 2),
	(4, 'Juan', 3, 3),
	(5, 'Donald Trump', 4, 4);

/* 6. Cuenta la cantidad de respuestas correctas totales por usuario (independiente de la
pregunta).*/

SELECT
    u.nombre,
    COUNT(u.id) FILTER (
        WHERE
            r.respuesta = p.respuesta_correcta
    ) AS "Respuestas Correctas"
FROM
    usuarios u
    LEFT JOIN respuestas r ON u.id = r.usuario_id
    LEFT JOIN preguntas p ON p.id = r.pregunta_id
GROUP BY
    u.nombre
ORDER BY
    "Respuestas Correctas" DESC;

/* 7. Por cada pregunta, en la tabla preguntas, cuenta cuántos usuarios respondieron
correctamente. */

SELECT
    p.pregunta,
    COUNT(u.id) FILTER (
        WHERE
            r.respuesta = p.respuesta_correcta
    ) AS "Respuestas Correctas"
FROM
    preguntas p
    LEFT JOIN respuestas r ON p.id = r.pregunta_id
    LEFT JOIN usuarios u ON u.id = r.usuario_id
GROUP BY
    p.pregunta
ORDER BY
    "Respuestas Correctas" DESC;

/* 8. Implementa un borrado en cascada de las respuestas al borrar un usuario. Prueba la
implementación borrando el primer usuario. */

ALTER TABLE respuestas
DROP CONSTRAINT fk_usuario,
ADD CONSTRAINT fk_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios (id) ON DELETE CASCADE;

DELETE FROM usuarios
WHERE
    id = 1;

-- Consulta para validar: SELECT * FROM usuarios
/* 9. Crea una restricción que impida insertar usuarios menores de 18 años en la base de
datos. */

ALTER TABLE usuarios
ADD CONSTRAINT edad_minima CHECK (edad >= 18);

/* Consulta para validar:
INSERT INTO
usuarios (id, nombre, edad)
VALUES
(6, 'Juanito', 17);
 */
/* 10. Altera la tabla existente de usuarios agregando el campo email. Debe tener la
restricción de ser único. */

ALTER TABLE usuarios
ADD COLUMN email VARCHAR UNIQUE;

/* Consulta para validar:

UPDATE usuarios
SET email = 'hola@mail.com'
WHERE id = 2;

UPDATE usuarios
SET email = 'hola@mail.com'
WHERE id = 3;

 */