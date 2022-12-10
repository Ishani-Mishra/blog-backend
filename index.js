const express= require("express");
const cors=require('cors');
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const authRoute=require("./routes/auth");
const userRoute=require("./routes/users");
const postRoute=require("./routes/posts");
const catRoute=require("./routes/categories");

const port=process.env.PORT || 5000;

dotenv.config();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URL, 
{useNewUrlParser: true,
useUnifiedTopology: true, 
useCreateIndex:true
}).
then(console.log("connected to MONGO DB"))
.catch((err)=>console.log(err));


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", catRoute);
app.listen(port, ()=>{
    console.log("Backend is running.");
});

// useUnifiedTopology: true}