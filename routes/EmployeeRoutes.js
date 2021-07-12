const User = require("../models/EmployeeModel");
const express = require("express");


const router = express.Router();

router.get("/", (req, res) => {
    User.find().then((data) => {
        //console.log(data);
        return res.status(200).json({ users: data });
    }).catch(err => {
        console.log(err);
        return res.status(500).json({ error: "Something went wrong" });
    });
});

router.post("/", (req, res) => {
    const { firstName, lastName, contactNo, email } = req.body;
    const userObj = new User({
        firstName,
        lastName,
        contactNo,
        email,
        createdAt: new Date().toISOString()
    });

    userObj.save().then((data) => {
        //console.log(data);
        return res.status(201).json({ employee: data });
    }).catch(err => {
        return res.status(500).json({ error: "Something went wrong" });
    });

});

router.put("/", async (req, res) => {
    const { id, firstName, lastName, email, contactNo } = req.body;

    try {
        const isUpdated = await User.updateOne({ _id: id }, { firstName, lastName, email, contactNo });
        const updatedUser = await User.findOne({ _id: id });
        //console.log(updatedUser);
        return res.status(200).json({ user: updatedUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }

});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const deleted = await User.deleteOne({ _id: id });
        //console.log(deleted);
        return res.status(200).json({ message: "deleted" });
    } catch (error) {
        //console.log(error);
        return res.status(500).json({ error: "Something went wrong." });
    }
});

module.exports = router;