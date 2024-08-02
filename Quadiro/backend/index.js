const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const carRoutes = require('./route/carRoutes');
const authRoutes = require('./route/authRoutes')
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Database Connected")
})
.catch((err) => {
    console.error('Database connection error:', err);
});


const app = express();
app.use(bodyParser.json());
app.use(cors(
    {
        origin:['http://localhost:3000','https://quadiro-5e6u.onrender.com',
            'https://frontend-inky-three.vercel.app'],
        methods: ['GET','POST','PUT','UPDATE','DELETE']
    }
))
app.use('/api',carRoutes);
app.use('/api',authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT ,()=>{
    console.log(`Server listening to port ${PORT}`)
})