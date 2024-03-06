const express = require('express'); 
const app = express(); 
const path = require('path'); 
const mongoose = require('mongoose') ; 
const CampgroundSchema=require('./models/campground'); 

mongoose.connect('mongodb://localhost:27017/yelp-camp'); 


const database = mongoose.connection; 
database.on("error",console.error.bind(console,"Connection Error:"));  
database.once("open",()=>{
    console.log("Database Connected") ; 
})

app.set('views',path.join(__dirname,'views')); 
app.set('view-engine','ejs'); 
app.get('/',(req,res)=>{
    // res.send('Hi, this is Shreyas'); 
    res.render('home.ejs')
})

app.get('/',(req,res)=>{
    res.render('Shreyas - Home'); 
})

app.get('/makecampground',async(req,res)=>{
   let camp = new CampgroundSchema({
    title:'Shreyas Camps',
    price:'3000',
    description: 'Best Camping'
   })

   await camp.save() ;
   res.send(camp) ; 
})
app.listen(3000,()=>{
    console.log('Port 3000 started'); 
})