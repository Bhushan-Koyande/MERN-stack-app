const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const mongoose=require('mongoose');
const User=require('./models/User');

app.use(cookieParser());
app.use(express.json());

mongoose.connect('mongodb://localhost/mernauth',{ useNewUrlParser:true,useUnifiedTopology:true },()=>{
    console.log('Successfully connected to database');
});

const userRouter=require('./routes/User');
app.use('/user',userRouter);

const port=5000;
app.listen(port,()=>{
    console.log('Server up and running');
})