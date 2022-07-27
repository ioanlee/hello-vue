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
	i_id INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	i_name VARCHAR(50) NOT NULL
);
-- create table items
-- CREATE TABLE items();