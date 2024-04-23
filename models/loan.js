const { Sequelize, DataTypes } = require("sequelize");

const loanSchema = Sequelize.define("Loan", {
    loan_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    loan_amount: DataTypes.FLOAT,
    tenure: DataTypes.INTEGER,
    interest_rate: DataTypes.FLOAT,
    monthly_payment: DataTypes.FLOAT,
    EMIs_paid_on_Time: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
});

module.exports = {loanSchema};