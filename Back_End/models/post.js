const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    summary:{
        type:String
    },
    images:{
        type:String
    },
    location:{
        type:String
    }
})
module.exports = mongoose.model('Post',postSchema)
