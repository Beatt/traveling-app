CREATE SCHEMA IF NOT EXISTS traveling;

create table if not exists traveling.city
(
    id   serial,
    name varchar(60) not null,
    constraint city_pk
        primary key (id)
);

create table if not exists traveling.flight
(
    id             serial,
    flight_at      date    not null,
    time_departure time    not null,
    time_arrival   time,
    to_city        integer not null,
    from_city      integer not null,
    constraint flight_pk
        primary key (id),
    constraint flight_to_city_city_id_fk
        foreign key (to_city) references traveling.city,
    constraint flight_from_city_city_id_fk
        foreign key (from_city) references traveling.city
);

create table if not exists traveling.flight_price
(
    id        serial,
    price     integer    not null,
    type      varchar(6) not null,
    seats     integer    not null,
    flight_id integer    not null,
    constraint flight_price_pk
        primary key (id),
    constraint flight_price_flight_id_fk
        foreign key (flight_id) references traveling.flight
);

INSERT INTO traveling.city (id, name) VALUES (1, 'Ciudad de México');
INSERT INTO traveling.city (id, name) VALUES (2, 'Monterrey');
INSERT INTO traveling.city (id, name) VALUES (3, 'Guadalajara');
INSERT INTO traveling.city (id, name) VALUES (4, 'Cancún');

INSERT INTO traveling.flight (id, flight_at, time_departure, time_arrival, to_city, from_city) VALUES (1, '2021-11-25', '09:00:00', '10:30:00', 1, 2);
INSERT INTO traveling.flight (id, flight_at, time_departure, time_arrival, to_city, from_city) VALUES (2, '2021-11-25', '11:00:00', '12:30:00', 1, 2);
INSERT INTO traveling.flight (id, flight_at, time_departure, time_arrival, to_city, from_city) VALUES (3, '2021-11-25', '14:00:00', '15:30:00', 1, 2);
INSERT INTO traveling.flight (id, flight_at, time_departure, time_arrival, to_city, from_city) VALUES (4, '2021-11-27', '09:00:00', '10:30:00', 2, 1);
INSERT INTO traveling.flight (id, flight_at, time_departure, time_arrival, to_city, from_city) VALUES (5, '2021-11-27', '11:00:00', '12:30:00', 2, 1);
INSERT INTO traveling.flight (id, flight_at, time_departure, time_arrival, to_city, from_city) VALUES (6, '2021-11-27', '14:00:00', '15:30:00', 2, 1);
INSERT INTO traveling.flight (id, flight_at, time_departure, time_arrival, to_city, from_city) VALUES (7, '2021-11-26', '09:00:00', '10:12:00', 1, 3);
INSERT INTO traveling.flight (id, flight_at, time_departure, time_arrival, to_city, from_city) VALUES (8, '2021-11-26', '11:00:00', '12:12:00', 1, 3);
INSERT INTO traveling.flight (id, flight_at, time_departure, time_arrival, to_city, from_city) VALUES (9, '2021-11-26', '14:00:00', '15:12:00', 1, 3);
INSERT INTO traveling.flight (id, flight_at, time_departure, time_arrival, to_city, from_city) VALUES (10, '2021-11-30', '09:00:00', '10:12:00', 3, 1);
INSERT INTO traveling.flight (id, flight_at, time_departure, time_arrival, to_city, from_city) VALUES (11, '2021-11-30', '11:00:00', '12:12:00', 3, 1);
INSERT INTO traveling.flight (id, flight_at, time_departure, time_arrival, to_city, from_city) VALUES (12, '2021-11-30', '14:00:00', '15:12:00', 3, 1);
INSERT INTO traveling.flight (id, flight_at, time_departure, time_arrival, to_city, from_city) VALUES (13, '2021-12-01', '09:00:00', '10:30:00', 1, 4);
INSERT INTO traveling.flight (id, flight_at, time_departure, time_arrival, to_city, from_city) VALUES (14, '2021-12-01', '11:00:00', '12:30:00', 1, 4);
INSERT INTO traveling.flight (id, flight_at, time_departure, time_arrival, to_city, from_city) VALUES (15, '2021-12-01', '14:00:00', '15:30:00', 1, 4);
INSERT INTO traveling.flight (id, flight_at, time_departure, time_arrival, to_city, from_city) VALUES (16, '2021-12-01', '09:00:00', '10:30:00', 4, 1);
INSERT INTO traveling.flight (id, flight_at, time_departure, time_arrival, to_city, from_city) VALUES (17, '2021-12-01', '11:00:00', '12:30:00', 4, 1);
INSERT INTO traveling.flight (id, flight_at, time_departure, time_arrival, to_city, from_city) VALUES (18, '2021-12-02', '14:00:00', '15:30:00', 4, 1);


INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (1, 1000, 'BASICO', 10, 1);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (2, 1800, 'PLUS', 8, 1);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (3, 2000, 'BASICO', 10, 2);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (4, 2800, 'PLUS', 8, 2);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (5, 2800, 'BASICO', 10, 3);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (6, 3300, 'PLUS', 8, 3);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (7, 1100, 'BASICO', 10, 4);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (8, 1700, 'PLUS', 8, 4);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (9, 2100, 'BASICO', 10, 5);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (10, 2300, 'PLUS', 8, 5);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (11, 2700, 'BASICO', 10, 6);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (12, 3250, 'PLUS', 8, 6);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (13, 1300, 'BASICO', 10, 7);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (14, 1600, 'PLUS', 8, 7);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (15, 2200, 'BASICO', 10, 8);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (16, 3000, 'PLUS', 8, 8);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (17, 2900, 'BASICO', 10, 9);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (18, 3100, 'PLUS', 8, 9);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (19, 1400, 'BASICO', 10, 10);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (20, 1700, 'PLUS', 8, 10);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (21, 2200, 'BASICO', 10, 11);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (22, 2500, 'PLUS', 8, 11);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (23, 2700, 'BASICO', 10, 12);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (24, 3350, 'PLUS', 8, 12);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (25, 4000, 'BASICO', 10, 13);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (26, 4800, 'PLUS', 8, 13);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (27, 5000, 'BASICO', 10, 14);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (28, 5800, 'PLUS', 8, 14);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (29, 6800, 'BASICO', 10, 15);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (30, 6300, 'PLUS', 8, 15);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (31, 4100, 'BASICO', 10, 16);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (32, 4700, 'PLUS', 8, 16);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (33, 6100, 'BASICO', 10, 17);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (34, 6300, 'PLUS', 8, 17);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (35, 6700, 'BASICO', 10, 18);
INSERT INTO traveling.flight_price (id, price, type, seats, flight_id) VALUES (36, 7100, 'PLUS', 8, 18);
