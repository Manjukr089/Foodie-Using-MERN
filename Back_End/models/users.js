const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile_Number:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('User',userSchema)



// const mongoose = require('mongoose')

// const userSchema = mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     mobile_Number:{
//         type:Number,
//         reqd:true
//     },
//     email:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })
// module.exports = mongoose.model('User',userSchema)