const connection = require("../config/database");
let getAllUsers = async (req, res) => {
    let [results, fields] = await connection.query('SELECT *FROM Users');
    return res.status(200).json({
        message: 'ok',
        data: results
    })
}

let createNewUser = async (req, res) => {
    let {email, name, city} = req.body;
    console.log(req.body);
    if(!email || !name || !city){
        return res.status(200).json({
            message: 'Missing requires params'
    })
    }
    let[results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
         [email, name, city],
    );
    return res.status(200).json({
        message: 'ok'
    })
}

let updateUser = async (req, res) => {
    let {email, name, city, id} = req.body;
    if(!email || !name || !city || !id){
        return res.status(200).json({
            message: 'Missing requires params'
        })
    }
    let[results, fields] = await connection.query(
        `Update Users 
        Set email = ?, name = ?, city = ? Where id = ?`,
        [email, name, city, id]
    );
    return res.status(200).json({
        message: 'ok'
    })
}

let deleteUser = async (req, res) => {
    let userId = req.params.id;
    if(!userId){
        return res.status(200).json({
            message: 'Missing requires params'
        })
    }
    let[results, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?`,
         [userId]
    );
    return res.status(200).json({
        message: 'ok'
    })
}
module.exports = {getAllUsers, createNewUser, updateUser, deleteUser}