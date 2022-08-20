const {ShortUrls}  = require("../Database/Shorten");

const TinyURL = require('shefin-tinyurl');

const createShortUrl = async (req, res) => {
    TinyURL.shorten( req.body.l_url , function(res, err) {
    if (err){
        console.log(err)
    }
	console.log(res);
});
    let obj = {
        [req.body.l_url] : short
    }
    await ShortUrls.create(obj);
    return res.status(404).send(obj)
}

module.exports = {
    createShortUrl,

}