const express = require('express');
const router = express.Router();
const {getSession} = require('./utils.js');

/**
 * 메인 페이지를 렌더링하는
 */
router.get('/', function(req, res) {
    res.render('main');
});

/**
 * 이미 로그인된 유저라면 마이페이지를, 로그인되지 않았다면 로그인 페이지를 렌더할 수 있도록 하는 로직
 */
router.get('/main', function(req, res) {
    if (req.signedCookies.user_auth === undefined) {
        res.json({
                status: 200,
                msg: 'Not Logined',
                user: null,
            })
    } else {
        const sessionId = req.signedCookies.user_auth;
        const session = getSession(sessionId);
        res.json({
                stats: 200,
                msg: 'Alreay Logined',
                user: session['user'],
            })
    }
});


module.exports = router;
