# MySQL Command Reference

## 🔹 Start MySQL

```bash
mysql -u root -p



🔸 Types of Programming Languages (Based on Paradigm)
➤ Imperative Languages
Examples: JavaScript, Java, C++, Ruby

Define how to perform tasks step-by-step.

➤ Declarative Languages
Examples: SQL, PostgreSQL, Oracle

Define what needs to be done, the system figures out how.

This classification is based on how the language takes input and performs actions.


🔸 Types of Programming Languages (Based on Paradigm)
➤ Imperative Languages
Examples: JavaScript, Java, C++, Ruby

Define how to perform tasks step-by-step.

➤ Declarative Languages
Examples: SQL, PostgreSQL, Oracle

Define what needs to be done, the system figures out how.

This classification is based on how the language takes input and performs actions.

🔸 MySQL Commands

🟢 Show All Databases

SHOW DATABASES;

🟢 Create a Database

CREATE DATABASE movie_db;

🟢 Select a Database

USE movie_db;


🟢 Drop a Database

DROP DATABASE movie_db;



🔸 Table Operations
🟢 Create a Table

CREATE TABLE movie (
  name VARCHAR(100),
  rating INTEGER,
  year INTEGER
);


🟢 Show Tables

SHOW TABLES;


---

Let me know if you want to include **INSERT, SELECT, UPDATE, DELETE, JOINS**, or export this as a downloadable file!


👉 insert into data

insert into movie (name , rating ) values( " avengers infinity war " ,8)

👉 creating multiple data

insert into movie (name , rating ) values( " avengers infinity war " ,8),("captain america " , 9);



👉 select from data

select * from movie

👉 select particular search 

select * from movie where rating = 9;

👉 select particular search where start and end 

select * from movie where name like "%e"; - end with

select * from movie where  name like "a%"; - start with

👉 select the data form order

select * from movie order by rating;

👉 sorting in descending order and ascending order

select * from movie rating desc ;

👉 limit the data

select * from movie order by rating limit 3;

select * form movie order by rating limit 3 offset 0;

****