const express = require('express');
const router =  express.Router();

const userController = require('../controllers/userController')
const {cloudinaryUpload} = require('../config/multer-cloudinary')





router.post('/register', userController.register)
router.post('/login', userController.login)
router.patch('/profile', cloudinaryUpload.single('image'),userController.profile)
router.get('/logout', userController.logout)

module.exports = router;

//const {advancedUpload} = require('../config/multer')
// router.patch('/profile', advancedUpload.single('image'),userController.profile)