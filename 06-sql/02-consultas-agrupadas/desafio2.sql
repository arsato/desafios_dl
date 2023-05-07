CREATE DATABASE desafio2_ariel_sandoval_14;

\c desafio2_Ariel_Sandoval_14

CREATE TABLE IF NOT EXISTS INSCRITOS(cantidad INT, fecha DATE, fuente VARCHAR);

INSERT INTO INSCRITOS(cantidad, fecha, fuente) VALUES ( 44, '01/01/2021', 'Blog' );
INSERT INTO INSCRITOS(cantidad, fecha, fuente) VALUES ( 56, '01/01/2021', 'Página' );
INSERT INTO INSCRITOS(cantidad, fecha, fuente) VALUES ( 39, '01/02/2021', 'Blog' );
INSERT INTO INSCRITOS(cantidad, fecha, fuente) VALUES ( 81, '01/02/2021', 'Página' );
INSERT INTO INSCRITOS(cantidad, fecha, fuente) VALUES ( 12, '01/03/2021', 'Blog' );
INSERT INTO INSCRITOS(cantidad, fecha, fuente) VALUES ( 91, '01/03/2021', 'Página' );
INSERT INTO INSCRITOS(cantidad, fecha, fuente) VALUES ( 48, '01/04/2021', 'Blog' );
INSERT INTO INSCRITOS(cantidad, fecha, fuente) VALUES ( 45, '01/04/2021', 'Página' );
INSERT INTO INSCRITOS(cantidad, fecha, fuente) VALUES ( 55, '01/05/2021', 'Blog' );
INSERT INTO INSCRITOS(cantidad, fecha, fuente) VALUES ( 33, '01/05/2021', 'Página' );
INSERT INTO INSCRITOS(cantidad, fecha, fuente) VALUES ( 18, '01/06/2021', 'Blog' );
INSERT INTO INSCRITOS(cantidad, fecha, fuente) VALUES ( 12, '01/06/2021', 'Página' );
INSERT INTO INSCRITOS(cantidad, fecha, fuente) VALUES ( 34, '01/07/2021', 'Blog' );
INSERT INTO INSCRITOS(cantidad, fecha, fuente) VALUES ( 24, '01/07/2021', 'Página' );
INSERT INTO INSCRITOS(cantidad, fecha, fuente) VALUES ( 83, '01/08/2021', 'Blog' );
INSERT INTO INSCRITOS(cantidad, fecha, fuente) VALUES ( 99, '01/08/2021', 'Página' );

--¿Cuantos registros hay?

select count(*) as total_registros from INSCRITOS;

--¿Cuantos inscritos hay en total?

select sum(cantidad) as total_inscritos from INSCRITOS;

--¿Cuál o cuáles son los registros de mayor antigüedad?

select * from INSCRITOS where fecha = (select min(fecha) from INSCRITOS);

--¿Cuántos inscritos hay por día?

select fecha, sum(cantidad) as inscritos_dia from INSCRITOS group by fecha;

--¿Cuántos inscritos hay por fuente?

select fuente, sum(cantidad) as fuente_inscritos from INSCRITOS group by fuente;

--¿Qué día se inscribieron la mayor cantidad de personas y cuántas personas se inscribieron en ese día?

select fecha, sum(cantidad) as inscritos_dia from INSCRITOS group by fecha order by inscritos_dia desc limit 1;

--¿Qué días se inscribieron la mayor cantidad de personas utilizando el blog y cuántas personas fueron?

select fuente, fecha, sum(cantidad) as inscritos_dia from INSCRITOS where fuente = 'Blog' group by fecha, fuente order by inscritos_dia desc limit 1;

--¿Cuántas personas en promedio se inscriben en un día? (Mi interpretacion es que el promedio debe ser del total de inscripcione, son en total 774 inscripciones en 8 dias)

select round(avg(inscritos_dia),0) as promedio_diario from (select fecha, sum(cantidad) as inscritos_dia from INSCRITOS group by fecha) as cantidad_x_dia;

--¿Qué días se inscribieron más de 50 personas?

select fecha, sum(cantidad) as inscritos from INSCRITOS group by fecha having sum(cantidad) > 50 order by inscritos;

--¿Cuántas personas se registraron en promedio cada día a partir del tercer día? (Mi interpretacion es que el promedio debe ser desde el tercer dia, son en total 554 inscripciones, en 6 dias)

select round(avg(inscritos_dia),0) as promedio_diario from (select fecha, sum(cantidad) as inscritos_dia from INSCRITOS where fecha >= '2021-03-01' group by fecha ) as cantidad_x_dia;
