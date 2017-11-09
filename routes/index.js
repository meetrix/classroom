var express = require('express');
var router = express.Router();
var path=require('path');

/* GET home page. */
router.get('/',function(req,res){
    console.log(req.url);
    res.sendFile('draw.html', { root: path.join(__dirname, '../src') });
});
module.exports = router;
