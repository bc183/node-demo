const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    contactNo: {
        type: String
    },
    createdAt: {
        type: Date
    }
});

const EmployeeModel = mongoose.model("Employee", employeeSchema);

module.exports = EmployeeModel;