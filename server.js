const express = require("express");
const colors = require("colors");
const morgan = require("morgan")
const dotenv = require("dotenv")


// config

dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));


//routes 
app.get('/',(req,res) => {
    res.status(200).send({
        message:"server is running"
    })
})


//listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.bgBlue.black);
})

