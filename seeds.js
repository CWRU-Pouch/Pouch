


 var popTables = function(queryInterface, Sequelize) {

	 queryInterface.bulkInsert('users', [{
		name: 'John Doe',
	 	email: 'email@email.com',
	 	password: 'root'
	 }]).then(function () {
	 	queryInterface.bulkInsert('budgets', [{
	 	//userId: 1,
	 	clothes: 75,
	 	food: 100,
	 	rent: 300,
	 	entertainment: 50,
	 	other: 3000
	 }]);

	 queryInterface.bulkInsert('categories', [{
	 	category: 'Clothes'
	 }]);

	 queryInterface.bulkInsert('transactions', [{
	 	amount: 35,
	 	location: 'target',
	 	notes: 'a cute dress'
	 }]);
	 });

}



module.exports = popTables;