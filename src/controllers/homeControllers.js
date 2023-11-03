const connection = require('../config/database');
const { getAllUsers, getUserById,updateUserById } = require('../services/CRUDService');
const { name } = require("ejs")

const getHomepage = async (req, res) => {
    let results = await getAllUsers()
    // console.log('check rows',results)
    return res.render('home.ejs', { listUsers: results })
}

const postCreateUser = async (req, res) => {
    // let {email,name,city} = req.body
    let email = req.body.email;
    let myname = req.body.myname;
    let city = req.body.city;

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email,name,city) VALUES (?,?,?)`, [email, myname, city]
    );

    res.send("Created user success");

}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {

    const userId = req.params.id;
    let user = await getUserById(userId)
    res.render('edit.ejs', { userEdit: user });
}

const postUpdateUser = async (req, res) => {
    // let {email,name,city} = req.body
    let email = req.body.email;
    let myname = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;
    await updateUserById(email,city,myname,userId)
    res.redirect('/');

}
const postDeleteUser = async(req,res) => {
    const userId = req.params.id;
    let user = await getUserById(userId)
    res.render('delete.ejs', {userEdit:user})
}
module.exports = {
    getHomepage, postCreateUser, getCreatePage,
    getUpdatePage,postUpdateUser,postDeleteUser
}