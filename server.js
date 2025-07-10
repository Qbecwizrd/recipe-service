//script.js

const dotenv = require('dotenv');
dotenv.config()


// Importing the required modules

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

// App Setup

const app = express();
app.use(express.json());
app.use(cors());




// connect to the MongoDB
mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=> console.log('MongoDB is connected ✅ '))
.catch((err)=> console.error('Cannot connect to DB',err));

// sample route 
app.get('/',(req,res)=>{
    res.send('Recipe service is running')
});

//Routes
app.use('/recipes',require('./routes/recipeRoutes'))

// Start the server 
const PORT = process.env.PORT || 5001;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
});
