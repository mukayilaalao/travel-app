DROP DATABASE IF EXISTS travel_db;
CREATE DATABASE travel_db;
\c travel_db
CREATE TABLE places (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    city VARCHAR(50) ,
    state VARCHAR(50),
    country VARCHAR(255),
    average_temp NUMERIC,
    has_nearby_beaches BOOLEAN,
    public_transportation_quality VARCHAR(100)
);
