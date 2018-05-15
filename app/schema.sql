CREATE DATABASE pouch;

CREATE TABLE users(
	userID INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50),
    PRIMARY KEY (userID)
);

CREATE TABLE categories(
    categoryID INTEGER NOT NULL AUTO_INCREMENT,
    category VARCHAR(25)
);

CREATE TABLE transactions(
	userID INTEGER NOT NULL,
	amount DECIMAL(10,2),
    categoryID INTEGER,
    datetime DATE,
	location VARCHAR(50),
    notes VARCHAR(150)
);

CREATE TABLE budgets(
	userID INTEGER NOT NULL,
	clothes DECIMAL(10,2),
    food DECIMAL(10,2),
    rent DECIMAL(10,2),
    entertainment DECIMAL(10,2),
    other DECIMAL(10,2)
);

SELECT * FROM users INNER JOIN transactions ON users.userID=transactions.userID;

SELECT * FROM users INNER JOIN budgets on users.userID=budgets.userID;

SELECT * FROM transactions INNER JOIN categories on transactions.categoryID=categories.categoryID;
