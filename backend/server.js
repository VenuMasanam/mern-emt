const express =require("express");
const projects=require("./routes/projectRoutes");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/db");
const dotenv=require("dotenv").config();
const users=require("./routes/userRoutes");
const cors = require('cors');

const app=express();

app.use(cors());
// or to allow specific origin
app.use(cors({ origin: 'http://localhost:8081' }));

connectDb();


const port=process.env.PORT||5000;


app.use(express.json());

app.use('/api/projects',projects);

app.use('/api/users',users);

app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});