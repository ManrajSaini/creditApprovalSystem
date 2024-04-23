const { Sequelize, DataTypes } = require("sequelize");

const customerSchema = Sequelize.afterDefine("Customer", {
    customer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    phone_number: DataTypes.STRING,
    monthly_salary: DataTypes.FLOAT,
    approved_limit: DataTypes.FLOAT,
    current_debt: DataTypes.FLOAT,
});

module.exports = { customerSchema };