const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");

dotenv.config();

// Connecting to mySQL Database
const connectDB = async () => {
  try {
    const sequelize = new Sequelize(
        process.env.DB,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD,
        {
            host: process.env.HOST,
            dialect: "mysql"
        }
    );
    await sequelize.sync({force: true});
    console.log("Hurray! Connected to database");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;