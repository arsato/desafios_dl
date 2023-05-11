CREATE DATABASE desafio3_ariel_sandoval_142;

\c desafio3_ariel_sandoval_142

CREATE TABLE IF NOT EXISTS usuarios(id serial, email varchar, nombre varchar, apellido varchar, rol varchar);

INSERT INTO usuarios(email, nombre, apellido, rol)
VALUES ('asandoval@mail.com','Ariel','Sandoval','administrador'),
('mleon@mail.com','Maria Ignacia','Leon','usuario'),
('fgatito','Facundo','Gatito','usuario'),
('tmakto','Toruk','Makto','usuario'),
('bmartinez','Benito','Martinez','usuario');

CREATE TABLE IF NOT EXISTS posts(id serial, titulo varchar, contenido text, fecha_creacion timestamp, fecha_actualizacion timestamp, destacado boolean, usuario_id bigint);

INSERT INTO posts(titulo, contenido, fecha_creacion, fecha_actualizacion, destacado, usuario_id)
VALUES ('Primer post','Este es el primer post','2023-05-01','2023-05-01',true,1),
('Segundo post','Este es el segundo post','2023-05-03','2023-05-03',false,1),
('Tercer post','Este es el tercer post','2023-05-03','2023-05-03',false,2),
('Cuarto post','Este es el cuarto post','2023-05-07','2023-05-07',false,2),
('Quinto post','Este es el quinto post','2023-05-10','2023-05-10',false,);

CREATE TABLE IF NOT EXISTS comentarios(id serial, contenido text, fecha_creacion timestamp, usuario_id bigint, post_id bigint);

INSERT INTO comentarios(contenido, fecha_creacion, usuario_id, post_id)
VALUES ('Este es el primer comentario','2023-05-01',1,1),
('Este es el segundo comentario','2023-05-02',2,1),
('Este es el tercer comentario','2023-05-03',3,1),
('Este es el cuarto comentario','2023-05-03',1,2),
('Este es el quinto comentario','2023-05-05',2,2);