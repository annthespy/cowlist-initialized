
DROP DATABASE IF EXISTS chat;

CREATE DATABASE cows;

USE cows;

CREATE TABLE cows (
  id int not null auto_increment,
  name varchar (200) not null,
  description varchar(600) not null,
  PRIMARY KEY (ID)
);