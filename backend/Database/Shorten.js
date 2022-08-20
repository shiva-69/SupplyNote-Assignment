const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//     name : String,
//     email : String,
//     password : String,
//     id : [mongoose.Types.ObjectId]
// })

// const Users = mongoose.model("User", userSchema);
// module.exports = {
//     Users
// } 


const shortenSchema = new mongoose.Schema({
    l_url: String,

})

const ShortUrls = mongoose.model("ShortUrl", shortenSchema);

module.exports = {
    ShortUrls
}