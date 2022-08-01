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
	d_image VARCHAR(50),
	d_category INT REFERENCES categories (c_id),
	d_ingredients INT [],
);
-- insert into dishes
INSERT INTO dishes(d_name, d_category, d_image, d_ingredients)
VALUES('Apple Pie', 1, 'logo.png', ARRAY [ 10, 1 ]);
INSERT INTO dishes(d_name, d_category, d_image, d_ingredients)
VALUES('Cola', 2, 'logo.png', ARRAY [ 9 ]);
-- select * dishes
SELECT *
FROM dishes
	JOIN categories ON dishes.d_id = categories.c_id;
-- select dishes
Select d_id as id, 
       d_name as name, 
       d_image as image, 
       c_name as category,
       array_agg(i_name) as ingredients
FROM dishes 
LEFT JOIN categories
    ON d_category = c_id
LEFT JOIN (
    select dish_id, i_name 
    FROM dish_to_ingredient 
    LEFT JOIN ingredients 
    ON ingredient_id=i_id
) as ing
ON d_id = dish_id
GROUP BY d_id, d_name, d_image, c_name;