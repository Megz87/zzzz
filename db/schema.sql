### Flashcards Schema

CREATE DATABASE flashcards_db;

USE flashcards_db;

SELECT * FROM users;
SELECT * FROM sets;
SELECT * FROM flashcards;
SELECT * FROM categories;



DROP TABLE users;
DROP TABLE sets;
DROP TABLE flashcards;
DROP TABLE categories;


CREATE TABLE users
(
	user_id int NOT NULL AUTO_INCREMENT,
	displayname varchar(255) NOT NULL,
	username varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (user_id)
);




CREATE TABLE sets
(
	set_id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	url varchar(255) NOT NULL,
	PRIMARY KEY (set_id)
);



CREATE TABLE flashcards2
(	id INT KEY AUTO_INCREMENT NOT NULL ,
	flash_num int,
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	question varchar(255) NOT NULL,
	answer varchar(255) NOT NULL
    );


CREATE TABLE categories
(
	cat_id int NOT NULL AUTO_INCREMENT,
	cat_name varchar(255) NOT NULL,
	PRIMARY KEY (cat_id)
);









CREATE TABLE favorites
(
	fav_id int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (fav_id)
);


CREATE TABLE bubbles
(
	bub_id int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (bub_id)
);

