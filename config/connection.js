const Sequelize = require("sequelize");
require("dotenv").config();
// const sequelize = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
const sequelize = process.env.JAWSDB_URL
	? new Sequelize(process.env.JAWSDB_URL)
	: new Sequelize(
		process.env.DB_NAME,
		process.env.DB_USER,
		process.env.DB_PASSWORD,
		{
			host: "localhost",
			dialect: "mysql",
			port: 3306
		}
	);


module.exports = sequelize;
