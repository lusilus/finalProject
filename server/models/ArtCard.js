const mongoose = require('mongoose')

const { Schema } = mongoose

const artCardSchema =  new Schema({

    title: {

        type: String,
        //required: true,
       
    },

    //when you want to connect 2 collections, this is how to do it:
    owner: {

        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    year: {

        type: String,
        
       
    },
    cost: {

        type: String,
      
    
    },
    recommendedPrice: {

        type: String,
        
        
    },
    catalogNumber: {

        type: String,
        
        
    }, 
    image: {
        type: String,
    },
    collectionArt: {
        type: String,
        
    },
    date: {
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('ArtCard', artCardSchema)