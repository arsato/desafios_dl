CREATE DATABASE desafio3_ariel_sandoval_142;

CREATE TABLE IF NOT EXISTS usuarios(id serial, email varchar, nombre varchar, apellido varchar, rol varchar);

INSERT INTO usuarios(email, nombre, apellido, rol)
VALUES ('asandoval@mail.com','Ariel','Sandoval','administrador'),
('mleon@mail.com','Maria Ignacia','Leon','usuario'),
('fgatito@mail.com','Facundo','Gatito','usuario'),
('tmakto@mail.com','Toruk','Makto','usuario'),
('bmartinez@mail.com','Benito','Martinez','usuario');

CREATE TABLE IF NOT EXISTS posts(id serial, titulo varchar, contenido text, fecha_creacion date, fecha_actualizacion date, destacado boolean, usuario_id bigint);

INSERT INTO posts(titulo, contenido, fecha_creacion, fecha_actualizacion, destacado, usuario_id)
VALUES ('Primer post','Este es el primer post','2023-05-01','2023-05-01',true,1),
('Segundo post','Este es el segundo post','2023-05-03','2023-05-03',false,1),
('Tercer post','Este es el tercer post','2023-05-03','2023-05-03',false,2),
('Cuarto post','Este es el cuarto post','2023-05-07','2023-05-07',false,5),
('Quinto post','Este es el quinto post','2023-05-10','2023-05-10',false,null);

CREATE TABLE IF NOT EXISTS comentarios(id serial, contenido text, fecha_creacion date, usuario_id bigint, post_id bigint);

INSERT INTO comentarios(contenido, fecha_creacion, usuario_id, post_id)
VALUES ('Este es el primer comentario','2023-05-01',1,1),
('Este es el segundo comentario','2023-05-02',2,1),
('Este es el tercer comentario','2023-05-08',3,1),
('Este es el cuarto comentario','2023-05-03',1,2),
('Este es el quinto comentario','2023-05-05',2,2);

/*2. Cruza los datos de la tabla usuarios y posts mostrando las siguientes columnas: nombre e email del usuario junto al título y contenido del post.*/

SELECT
	u.nombre,
	u.email,
	p.titulo,
	p.contenido
FROM
	usuarios u
	JOIN posts p ON u.id = p.usuario_id

/*3. Muestra el id, título y contenido de los posts de los administradores. El administrador puede ser cualquier id y debe ser seleccionado dinámicamente.*/

SELECT
	p.id,
	p.titulo,
	p.contenido
FROM
	usuarios u
	JOIN posts p ON u.id = p.usuario_id
WHERE
	u.rol = 'administrador';

/*4. Cuenta la cantidad de posts de cada usuario. La tabla resultante debe mostrar el id e
email del usuario junto con la cantidad de posts de cada usuario.*/

SELECT
	u.id,
	u.email,
	COUNT(usuario_id) as total_posts
FROM
	posts as p
	RIGHT JOIN usuarios as u ON u.id = p.usuario_id
GROUP BY
	u.id,
	u.email
ORDER BY
	total_posts desc

/*5. Muestra el email del usuario que ha creado más posts. Aquí la tabla resultante tiene
un único registro y muestra solo el email.*/

SELECT
	email
FROM
	(
		SELECT
			email,
			COUNT(email) as cantidad_posts
		FROM
			usuarios u
			JOIN posts p ON u.id = p.usuario_id
		GROUP BY
			email
	) as total_posts
WHERE
	cantidad_posts = (
		SELECT
			MAX(cantidad_posts)
		from
			(
				SELECT
					email,
					COUNT(email) as cantidad_posts
				FROM
					usuarios u
					JOIN posts p ON u.id = p.usuario_id
				GROUP BY
					email
			) as total_posts
	)

/*6. Muestra la fecha del último post de cada usuario*/

SELECT
	nombre,
	MAX(fecha_creacion) as ultimo_post
FROM
	(
		SELECT
			p.id,
			p.contenido,
			p.fecha_creacion,
			u.nombre
		FROM
			usuarios u
			JOIN posts p ON u.id = p.usuario_id
	) as fechas
GROUP BY
	nombre

/* 7. Muestra el título y contenido del post (artículo) con más comentarios */

SELECT
	titulo,
	contenido
FROM
	(
		SELECT
			COUNT(c.post_id) as cantidad_comentarios,
			p.titulo,
			p.contenido
		FROM
			posts p
			JOIN comentarios c ON p.id = c.post_id
		GROUP BY
			p.titulo,
			p.contenido
	) as conteo_comentarios
WHERE
	cantidad_comentarios = (
		SELECT
			MAX(cantidad_comentarios)
		FROM
			(
				SELECT
					COUNT(c.post_id) as cantidad_comentarios,
					p.titulo,
					p.contenido
				FROM
					posts p
					JOIN comentarios c ON p.id = c.post_id
				GROUP BY
					p.titulo,
					p.contenido
			) as conteo_comentarios
	)

/*8. Muestra en una tabla el título de cada post, el contenido de cada post
y el contenido de cada comentario asociado a los posts mostrados, junto con el email del usuario que lo escribió.*/

SELECT
	p.titulo as titulo_post,
	p.contenido as contenido_post,
	c.contenido as contenido_comentario,
	u.email
FROM
	posts p
	JOIN comentarios c ON p.id = c.post_id
	JOIN usuarios u ON c.usuario_id = u.id

/*9. Muestra el contenido del último comentario de cada usuario.*/

SELECT
	u.nombre,
	contenido
FROM
	comentarios c
	JOIN usuarios u ON c.usuario_id = u.id
WHERE
	fecha_creacion = (
		SELECT
			MAX(fecha_creacion)
		FROM
			comentarios
		WHERE
			usuario_id = u.id
	)

/*10. Muestra los emails de los usuarios que no han escrito ningún comentario.*/

SELECT
	u.email
FROM
	usuarios u
	LEFT JOIN comentarios c ON u.id = usuario_id
GROUP BY
	u.email
HAVING
	COUNT(c.id) = 0