const express = require('express');
const router = express.Router();
const { getHomepage, postCreateUser, getCreatePage, getUpdatePage,postUpdateUser
,postDeleteUser } = require('../controllers/homeControllers')
router.get('/', getHomepage);

router.get('/admin', (req, res) => {
    res.render('sample.ejs')
})

router.post('/create-user', postCreateUser)

router.post('/update-user', postUpdateUser)
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);
router.get('/delete-user:id', postDeleteUser);
module.exports = router;