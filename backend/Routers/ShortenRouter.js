const express = require("express");


const {createShortUrl}  = require("../Handlers/ShortenHandler");

const ShortenRouter = express.Router();

ShortenRouter.post("/create", createShortUrl);

module.exports = {
    ShortenRouter
}