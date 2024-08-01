const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Database Connected")
})
.catch((err) => {
    console.error('Database connection error:', err);
});


const  app = express();
app.use(cors(
    {
        origin:'http://localhost:3000',
        methods: ['GET','POST','UPDATE','DELETE']
    }
))
app.post('/api');

const PORT = process.env.PORT || 4000;
app.listen(PORT ,()=>{
    console.log(`Server listening to port ${PORT}`)
})