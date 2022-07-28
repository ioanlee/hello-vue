-- create database cafe
CREATE DATABASE cafe_draft;
-- create table categories
CREATE TABLE categories(
	c_id SERIAL PRIMARY KEY,
	c_name VARCHAR(50) NOT NULL
);
-- insert into categories
INSERT INTO categories(c_name)
VALUES('Desert');
-- create table ingredients
CREATE TABLE ingredients(
	i_id SERIAL PRIMARY KEY,
	i_name VARCHAR(50) NOT NULL
);
-- create table dishes
CREATE TABLE dishes(
	d_id SERIAL PRIMARY KEY,
	d_name VARCHAR(50) NOT NULL,
	d_category INT REFERENCES categories (c_id),
	-- d_image BLOB NOT NULL
	-- d_ingredients INT [] REFERENCES ingredients (i_id),
);
-- insert into dishes
INSERT INTO dishes(d_name, d_category)
VALUES('Apple Pie', 1);
INSERT INTO dishes(d_name, d_category)
VALUES('Cola', 2);
-- select * dishes
SELECT *
FROM dishes
	JOIN categories ON dishes.d_id = categories.c_id;