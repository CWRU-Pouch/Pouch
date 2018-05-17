INSERT INTO budgets (userID, clothes, food, rent, entertainment, other)
VALUES (1, 75, 100, 300, 50, 3000);

INSERT INTO categories (categoryID, category)
VALUES (1, "Clothes");

INSERT INTO transactions (transactionID, userID, amount, categoryID, location, notes)
VALUES (1, 1, 35, 1, "target", "a cute dress");

INSERT INTO users (userID, name, email, password)
VALUES (1, "John Doe", "email@email.com", "root");

