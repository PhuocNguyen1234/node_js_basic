const connection = require("../config/database");
const {getAllUsers, getUserById, updateUserById, deleteUserById} = require("../services/CRUDServices")


const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', {listUsers: results});
}

const getABC = (req, res) => {
    res.send('Hello World! Check ABC');
}

const getHuuPhuoc = ('/huuphuoc', (req, res) => {
  //res.send('<h1>Phuoc Dep Trai</h1>');
  res.render('sample.ejs');
})

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    
    // connection.query(
    //     `INSERT INTO Users (email, name, city) 
    //      VALUES (?, ?, ?)`,
    //      [email, name, city],
    //      function(err, results) {
    //         console.log(err);
    //         res.send('Create user succeed !');
    //      }
    // );
    let[results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) 
         VALUES (?, ?, ?)`,
         [email, name, city],
    );

    console.log(">>>Check results: ", results);
    res.send('Create user succeed !');
    // connection.query(
    //     'Select *from Users u',
    //     function (err, results, fields) {
    //         console.log('>>Results: ',results); // results contains rows returned by server
    //     }
    // ); 
    // const [results, fields] = await connection.query('Select *from Users u');
}

const getCreatePage = ((req, res) => {
    res.render('create.ejs');
})

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    //console.log(">>>req.params:: ", req.params, userId);
    let user = await getUserById(userId);
    res.render('update.ejs', {userUpdate : user}); //x <- y
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let id = req.body.id;
    updateUserById(email, name, city, id);

    res.redirect("/");
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render("delete.ejs", {userUpdate : user})
}

const postHandleRemoveUser = async (req, res) => {
    const id = req.body.id;
    await deleteUserById(id);
    res.redirect('/');
}
module.exports = {
    getHomePage, getABC, getHuuPhuoc, postCreateUser, getCreatePage, getUpdatePage,
    postUpdateUser, postDeleteUser, postHandleRemoveUser
}