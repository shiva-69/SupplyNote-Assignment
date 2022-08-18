const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./Database");
const app = express();



app.use(cors());
app.use(express.json());

connectToDatabase().then(() => {
    app.listen(3000, () => {
        console.log("Connected to Server");
    })
})