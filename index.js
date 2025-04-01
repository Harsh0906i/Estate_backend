require('dotenv').config({ path: '.env' });
const express = require('express');
const app = express();
let jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const UserRouter = require('./routes/User');
const AuthRouter = require('./routes/auth');
const bodyParser = require('body-parser');
const ListingRoute = require('./routes/listing');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors=require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/api/user', UserRouter);
app.use('/api/auth', AuthRouter);
app.use('/api/listing', ListingRoute);

app.get('/',(req,res)=>{
  res.send("working!");
})

app.use((err, req, res, next) => {
    const statuscode = err.statusCode || 500;
    const message = err.message || 'Internal server error'
    return res.status(statuscode).json({
        success: false,
        statuscode,
        message
    });
});

main()
    .then(() => {
        console.log("success");
    }).catch((err) => {
        console.log(err);
    });
async function main() {
    await mongoose.connect('mongodb+srv://harshitsingharya24:rFkHIdbVHfG8BqIe@mern-realestate.v0tzpwt.mongodb.net/?retryWrites=true&w=majority&appName=mern-RealEstate');
};
   
app.listen(8080, () => {
    console.log('Running on port 8080');
});
