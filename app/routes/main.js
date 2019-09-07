const express = require('express');
const router = express.Router();
const {sessions} = require('../db/settings/sessions.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  // if (req.signedCookies.user_auth === undefined) {
  //     res.render('main')
  // } else {
  //   console.log('자동 로그인');
  //   console.log(req.signedCookies.user_auth);
  //   const session = sessions.get('sessions')
  //       .find({ sessionId:req.signedCookies.user_auth })
  //       .value();
  //   const user = session['user'];
  //   res.json(
  //       {
  //         stats: 200,
  //         msg: 'Alreay Logined',
  //         user: user,
  //       }
  //   )
  // }
    res.render('main');

});


router.get('/main', function(req, res, next) {
    if (req.signedCookies.user_auth === undefined) {
        res.json(
            {
                status: 200,
                msg: 'Not Logined',
                user: null,
            }
        )
    } else {
        console.log('자동 로그인');
        console.log(req.signedCookies.user_auth);
        const session = sessions.get('sessions')
            .find({ sessionId:req.signedCookies.user_auth })
            .value();
        const user = session['user'];
        res.json(
            {
                stats: 200,
                msg: 'Alreay Logined',
                user: user,
            }
        )
    }

});



module.exports = router;
