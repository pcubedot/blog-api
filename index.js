import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/routesBlog.js";

const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_SERVER_URL;

mongoose.connect(MONGOURL).then(() => {
    console.log("database connected successfully");
    app.listen(PORT, ()=> {
        console.log(`server is runing on port ${PORT}`)
    });
}).catch((error) => {
    console.log(error);
});

app.get('/api/test', (req, res) => {
    res.json({ message: 'GET request successful' });
});

app.use("/api/user", route);