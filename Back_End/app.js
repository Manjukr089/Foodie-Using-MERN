const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 4000
//! For hash password
const bcrypt = require('bcrypt');
const saltRounds = 10;
//! Require database models
const User = require('./models/users')
const Post = require('./models/post')

//! Require mongoose
const mongoose = require('mongoose')

//! To remove warnings
mongoose.set('strictQuery', false);

//! Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//! To share data from Front-End to Back-End we use cors()
app.use(cors()) //cross origin resource sharing 


//! Connecting to the database
const dbURL = "mongodb://localhost:27017/foodie"
mongoose.connect(dbURL).then(() => {
    console.log("Connected to database");
})

//!for login page validation
app.post('/login',(req,res)=>{
    User.findOne({email:req.body.email},(err,userData)=>{
        if (userData) 
        {
            if (req.body.password == userData.password) 
            {
                res.send({message:'Login Successfull'})    
            } 
            else  
            {
                res.send({message:'Invalid Credentials'})
            }    
        } else 
        {
            res.send({message:'No account not to be match with your email or password'})    
        }
    })
})

//! posting the data from signUp page
app.post('/signUp', async (req, res) => {
    //!For hash password
    // const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    //! User : model name
    User.findOne({ email: req.body.email }, (err, userData) => {
        if (userData) {
            res.send({ message: "User already exists" })
        }
        else {

            const data = new User({
                name: req.body.name,
                mobile_Number: req.body.mobile_Number,
                email: req.body.email,
                password: req.body.password
                // password: hashedPassword
            })
            data.save(() => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send({ message: "User registered successfully" })
                }
            })
        }
    })
})

//! to fetch post/foods data
app.get('/foods',async(req,res)=>{
    try {
        const posts = await Post.find() // convert the query to a plain object
        res.json(posts)
    } catch (err) {
        console.log(err);
    }
})
//! To count users
app.get('/users',async(req,res)=>{
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        console.log(err);
    }
})


  

//! for single data-fetch
app.get('/foods/:id',async(req,res)=>{
    const {id} = req.params
    try {
        const singlePost = await Post.findById(id)
        res.send(singlePost)
    } catch (err) {
        console.log(err);
    }
})

//! For addPost / addFood page
app.post('/addPost',async(req,res)=>{
    const postData = new Post({
        author:req.body.author,
        title:req.body.title,
        summary:req.body.summary,
        images:req.body.images,
        location:req.body.location
    })
    try{
        await postData.save()
        res.send({message:'Post added successfully'})
    }
    catch(err){
        req.send({message:'Failed to add post'})
    }
})


app.listen(PORT, () => {
    console.log("Connecting to the server");
})

