
 var popTables = function(queryInterface, Sequelize) {


	 queryInterface.sequelize.models.users.create( {
		name: 'John Doe',
	 	email: 'email@email.com',
	 	password: 'root'
	 })
	 	queryInterface.sequelize.models.budgets.create({
	 	userId: 1,
	 	clothes: 75,
	 	food: 100,
	 	rent: 300,
	 	entertainment: 50,
	 	other: 3000
	 }	)




	 


}



module.exports = popTables;