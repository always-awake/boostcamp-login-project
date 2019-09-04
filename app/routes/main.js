const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("됬다!")
  res.render('main');
});
//
// router.get('/',function(req,res) {
//   console.log('됬다');
//   res.sendFile('main.html');
// });

module.exports = router;
