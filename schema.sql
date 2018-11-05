
DROP DATABASE IF EXISTS friendFinderDB;
CREATE DATABASE friendFinderDB;
USE friendFinderDB;

-- Create the table plans.
CREATE TABLE findFriends(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
q1 INTEGER,
q2 INTEGER,
q3 INTEGER,
q4 INTEGER,
q5 INTEGER,
q6 INTEGER,
q7 INTEGER,
q8 INTEGER,
q9 INTEGER,
q10 INTEGER,

PRIMARY KEY (id )
);

-- Insert a set of records.
INSERT INTO findFriends  (name,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10) VALUES ("Joey",5,4,3,4,5,1,2,3,2,1);
INSERT INTO findFriends  (name,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10)  VALUES ("Sally",5,2,3,4,5,4,2,3,1,1);
INSERT INTO findFriends (name,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10)  VALUES ("Sam",1,4,3,4,5,2,2,4,2,1);
INSERT INTO findFriends (name,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10)  VALUES ("Andrea",5,4,3,4,2,1,2,3,4,1);



SELECT * FROM findFriends;