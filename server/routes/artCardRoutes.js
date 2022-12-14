//create a server: an express mini router
const express = require('express');
const router = express.Router()
const {cloudinaryUpload} = require('../config/multer-cloudinary')
const artCardController = require('../controllers/artCardController')
const {auth} = require('../middlewares/auth')


//const {advancedUpload} = require('../config/multer')


router.post('/add', auth , cloudinaryUpload.single('image') ,artCardController.add)
router.get('/list', auth , artCardController.list)
router.delete('/delete', artCardController.delete)
router.patch('/edit', auth , cloudinaryUpload.single('image') ,artCardController.edit)

module.exports = router