
 var popTables = function(queryInterface, Sequelize) {


	 queryInterface.sequelize.models.users.create( {
		name: 'John Doe',
	 	email: 'email@email.com',
	 	password: 'root'
	 }).then(function () {
	 	queryInterface.sequelize.models.budgets.create({
	 	userId: 1,
	 	clothes: 75,
	 	food: 100,
	 	rent: 300,
	 	entertainment: 50,
	 	other: 3000
	 });

	 queryInterface.bulkInsert("transactions", [{
	 	amount: 35,
	 	location: 'target',
	 	notes: 'a cute dress',
	 	category: 'clothes',
	 	userId: 1,
	 	clothes: true
	 },{
	 	amount: 345,
	 	location: 'target',
	 	notes: 'concert',
	 	category: 'clothes',
	 	userId: 1,
	 	clothes: true
	 },{
	 	amount: 3,
	 	location: 'target',
	 	notes: 'coffee',
	 	category: 'other',
	 	userId: 1,
	 	other: true
	 },{
	 	amount: 300,
	 	location: 'target',
	 	notes: 'rent',
	 	category: 'rent',
	 	userId: 1,
	 	rent: true
	 }]);
	 });

	 queryInterface.sequelize.models.users.create( {
		name: 'Jane Doe',
	 	email: 'email@email.com',
	 	password: 'root'
	 }).then(function () {
	 	queryInterface.sequelize.models.budgets.create({
	 	userId: 2,
	 	clothes: 75,
	 	food: 100,
	 	rent: 300,
	 	entertainment: 50,
	 	other: 3000
	 });

	 queryInterface.bulkInsert("transactions", [{
	 	amount: 35,
	 	location: 'target',
	 	notes: 'a cute dress',
	 	category: 'clothes',
	 	userId: 2,
	 	clothes: true
	 },{
	 	amount: 345,
	 	location: 'target',
	 	notes: 'concert',
	 	category: 'clothes',
	 	userId: 2,
	 	clothes: true
	 },{
	 	amount: 3,
	 	location: 'target',
	 	notes: 'coffee',
	 	category: 'other',
	 	userId: 2,
	 	other: true
	 },{
	 	amount: 300,
	 	location: 'target',
	 	notes: 'rent',
	 	category: 'rent',
	 	userId: 2,
	 	rent: true
	 }]);
	 });

}



module.exports = popTables;