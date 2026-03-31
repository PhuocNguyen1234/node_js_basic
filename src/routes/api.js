const express = require('express');
const router = express.Router();
const {getAllUsers, createNewUser, updateUser, deleteUser} = require("../controllers/APIController")

const initAPIRoute = (app) => {
    router.get("/user", getAllUsers); //Method GET -> READ data
    router.post("/create-user", createNewUser); //Method POST -> CREATE data
    router.put("/update-user/", updateUser); //Method put -> Update data
    router.delete("/delete-user/:id", deleteUser); //Method delete -> Delete data
    return app.use("/api/v1/", router);
}


module.exports = {initAPIRoute}