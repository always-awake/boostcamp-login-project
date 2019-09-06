const express = require('express');
const router = express.Router();
const {users} = require('../db/settings/users.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 회원가입
router.post('/', function(req, res, next) {
  console.log(req.body);
  try {
    users.get('users')
        .push(req.body)
        .write();
    users.update('count', n => n + 1)
        .write();

    res.json(
        {
          status:200
        }
    )
  } catch (e) {
    console.log("에러 발생");
    console.log(e);
    res.json(
        {
          status: 500,
        }
    )
  }


}, () => {

});

//아이디 중복체크 
router.get('/validation/id', function (req, res, next) {

  res.send('서버연결완료');
});



module.exports = router;
