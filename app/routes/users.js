const express = require('express');
const router = express.Router();
const {users} = require('../db/settings/users.js');
const uuidv4 = require('uuid/v4');
const {makeSession, getUser, deleteOldSession, findUserById, saveUser, saveSession, deleteSession} = require('./utils.js');


/**
 * 아이디를 중복체크하는 로직
 */
router.get('/:id', function(req, res) {
    const idToCheck = req.params.id;
    const user = findUserById(idToCheck);

    if (user !== undefined) {
        res.json({
                status: 200,
                duplication: true,
            })
    } else {
        res.json({
                status: 200,
                duplication: false
            })
    }
});

/**
 * 회원가입 요청을 처리하는 로직
 */
router.post('/', function(req, res) {
    try {
        req.body['pk'] = users.get('count');
        const user = req.body;
        saveUser(user);

        const sessionId = uuidv4();
        const session = makeSession(sessionId, user);
        saveSession(session);

        if (!req.cookies.user_auth) {
            res.cookie('user_auth', sessionId, {
                maxAge: 1000000,
                httpOnly: true,
                signed: true,
                saveUninitialized: true,
            });
        }
    res.json({
            status: '201 CREATED',
            msg: 'Sign Up Success',
            user: session['user'],
        })
  } catch (e) {
    res.json({
          status: 500,
          msg: e,
        })
  }
});

/**
 * 유저의 최초 로그인을 처리하는 로직
 */
router.post('/login', function(req, res, next) {
    const validUser = getUser(req.body['id'], req.body['pw']);
    try {
        if (validUser !== undefined) {
            deleteOldSession(validUser.pk);

            const sessionId = uuidv4();
            const session = makeSession(sessionId, validUser);
            saveSession(session);

            if (!req.cookies.user_auth) {
                res.cookie('user_auth', sessionId, {
                    maxAge: 1000000,
                    httpOnly: true,
                    signed: true,
                    saveUninitialized: true,
                });
            }
            res.json({
                    status: 200,
                    msg: 'login success',
                    user: session['user'],
                })
        } else {
            res.json({
                    status: 404,
                    msg: 'Please enter Id and PW again.'
                })
        }
    } catch (e) {
        res.json({
                status: 500,
                msg: e,
            })
    }

});

/**
 * 로그아웃을 처리하는 로직
 */
router.post('/logout', function (req, res) {
    const sessionId = req.signedCookies.user_auth;

    deleteSession(sessionId);
    res.clearCookie('user_auth');
    res.json({
            status: 200,
            msg: 'Logout Success'
        })
});


module.exports = router;
