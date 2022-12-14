
const multer  = require('multer')

//Multer set up advance:
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('file object', file)
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {

        let extension = ''
        if (file.mimetype.includes('image')){
           
           extension = file.mimetype.slice(6)
        }
      const uniqueSuffix = req.body._id + '-' + Date.now() + '.' + extension;
      console.log('multer',uniqueSuffix )
      cb(null, file.fieldname + '-' + uniqueSuffix) 
    }
  })
 
  const advancedUpload = multer({ storage: storage })


  module.exports = {advancedUpload};