const express = require('express');
const router = express.Router();
const {sessions} = require('../db/settings/sessions.js');


router.get('/', function(req, res) {
    res.render('main');
});

router.get('/main', function(req, res) {
    if (req.signedCookies.user_auth === undefined) {
        res.json({
                status: 200,
                msg: 'Not Logined',
                user: null,
            })
    } else {
        const session = sessions.get('sessions')
            .find({ sessionId: req.signedCookies.user_auth })
            .value();
        const user = session['user'];
        res.json({
                stats: 200,
                msg: 'Alreay Logined',
                user: user,
            })
    }
});



module.exports = router;
