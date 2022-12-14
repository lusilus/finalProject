const ArtCard = require('../models/ArtCard')


module.exports.add = async (req,res) => {
   
   try{
            console.log('req.file is', req.file)
             req.body.image = req.file.filename
             console.log('artwork file is', req.file.filename)
         const{owner, title, year, cost, basePrice, currentPrice, collectionArt} = req.body
         console.log('request body is', req.body )
         if (!owner ) {
             res.send({success: false, error: 1})
             return
         }

         const newArtCard = await ArtCard.create(req.body)
         .then(item => item.populate({ path: 'owner', select: 'username image title year currentPrice'}))

		 console.log(" newArtCard ", newArtCard )

         if (!newArtCard) {
             res.send({success: false, error: 2})
             return
         }

         res.send({success: true, artCard: newArtCard})

   }catch (error) {
	console.log("artCard error", error.message)

    res.send({success:false, error: error.message})

    }

}

module.exports.list = async (req,res) => {
    try{
 
          const artCards = await ArtCard.find({owner: req.query.id})
          .limit(6)
          
          .skip(Number(req.query.skip)) //for pagination
          .populate({
            path: 'owner',
            select: 'username '
          })
          console.log(" artCards", artCards)
         
     const count= await ArtCard.countDocuments({owner: req.query.id})
     console.log("TCL: module.exports.list -> count", count)
 
         res.send({success: true, artCards, count})
 
    }catch (error) {
     console.log("artCard list error", error.message)
 
     res.send({success:false, error: error.message})
 
     }
 
 }

module.exports.delete = async (req,res) => {
    try{
 
         console.log('delete:' , req.query) 
        
         const artCard = await ArtCard.findByIdAndDelete(req.query.artCard)
         console.log(" module.exports.delete -> artCard", artCard)
 
         if (!artCard) {
            res.send({success:false, error:1})
            return
        }

         res.send({success:true})
 
    }catch (error) {
     console.log("artCard delete error", error.message)
 
     res.send({success:false, error: error.message})
 
     }
 
 }

 
module.exports.edit = async (req,res) => {
   
    try{
        console.log('edit request body here', req.body)
        console.log('edit req.file is', req.file)

        if (req.file?.filename) req.body.image = req.file.filename

        console.log('edit artwork file is', req.file?.filename)
           const {owner, title, year, catalogNumber, collectionArt, image, cost, recommendedPrice } = req.body
        
          if (!owner ) {
              res.send({success: false, error: 1})
              return
          }
 
          const editArtCard = await ArtCard.findByIdAndUpdate(req.body._id ,{owner, title, year,image, catalogNumber, collectionArt, cost, recommendedPrice}, {new: true})
          .then(item => item.populate({ path: 'owner', select: '-__v'}))
        //   .then(item => item.populate({ path: 'owner', select: ' image title year catalogNumber collectionArt date'}))
 
          console.log(" editArtCard ", editArtCard )
 
          if (!editArtCard) {
              res.send({success: false, error: 2})
              return
          }
 
           res.send({success: true, artCard: editArtCard})
 
    }catch (error) {
     console.log("edit artCard error", error.message)
 
     res.send({success:false, error: error.message})
 
     }
 
 }