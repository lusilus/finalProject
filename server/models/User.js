const mongoose = require('mongoose')

const {Schema} = mongoose



    const userSchema =  new Schema({
        email: {
            type: String,
            required: true,
            unique: true
        },
    
        username: {
            type: String,
            required: true,
            unique: true
        },
    
        password:
        {
            type: String,
            required: true,
            
        },
        image:{
            type: String,
           
        },
        goals:{
            type: String,
            
        },
        customersTarget:{
            type: String,
            
        },
        address:{
            type: String,
            
        },
        artistSince:{
            type: String,
            
        },
        education:{
            type: String,
            
        },
        artField:{
            type: String,
            
        },


    })
    
    //in the db the collection should be 'users
    module.exports = mongoose.model('User' , userSchema)
    
