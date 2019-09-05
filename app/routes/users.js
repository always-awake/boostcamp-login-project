const express = require('express');
const router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 회원가입
router.post('/', function(req, res, next) {
  console.log(req.body);
  res.send(req.body);
});

//아이디 중복체크 
router.get('/validation/id', function (req, res, next) {

  res.send('서버연결완료');
});



module.exports = router;
