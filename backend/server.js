const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./Database");
const app = express();
const { UserRouter} = require("./Routers/UserRouter");
const {ShortenRouter} = require("./Routers/ShortenRouter");



app.use(cors());
app.use(express.json());
app.use(UserRouter);
app.use(ShortenRouter);

connectToDatabase()
.then(() => {
    try {
        app.listen(3001, () => {
            console.log("Connected to Server");
        })
    } catch (error) {
        console.log("error in connecting to server")
    }
})