CREATE TABLE personajes 
(
    id serial PRIMARY KEY,
    name varchar(30) NOT NULL,
    satus varchar(10),
    location integer REFERENCES locations(id)
);

CREATE TABLE locations
(
    id serial PRIMARY KEY,
    name varchar(30) NOT NULL UNIQUE
);

INSERT INTO locations(name)
VALUES ('Rick');

SELECT * FROM locations;

INSERT INTO personajes(name, status, location);
VALUES ('Rick', 'Alive', 10);

DELETE * FROM locations WHERE id=1;

INSERT INTO personajes(name, status, location);
VALUES ('Miguel Fernandez', 'Dead', 3);