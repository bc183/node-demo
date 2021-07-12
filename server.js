const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/EmployeeRoutes");

const app = express();

app.use(express.json());
app.use("/api/employee", userRoutes);


app.get("/", (req, res) => {
    console.log(req.body);
    res.json({ message: "hello world!" });
});

app.listen(3000, () => {
    console.log("The server is running at http://localhost:3000");
});

mongoose.connect("mongodb+srv://bar007:msdhoni007@cluster0.sjbln.mongodb.net/demodb?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Database connected");
});

