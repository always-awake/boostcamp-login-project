const express = require('express');
const router = express.Router();
const {users} = require('../db/settings/users.js');
const {sessions} = require('../db/settings/sessions.js');
const uuidv4 = require('uuid/v4');


// 아이디 중복체크
router.get('/:id', function(req, res) {
    const idToCheck = req.params.id;
    const user = users.get('users')
        .find({ id: idToCheck })
        .value();
    if (user !== undefined) {
        res.json(
            {
                status: 200,
                duplication: true,
            }
        )
    } else {
        res.json(
            {
                status: 200,
                duplication: false
            }
        )
    }
});

// 회원가입
router.post('/', function(req, res, next) {

    try {
      req.body['pk'] = users.get('count');
        const user = req.body;
    users.get('users')
        .push(req.body)
        .write();
    users.update('count', n => n + 1)
        .write();

      const sessionId = uuidv4();
      const session = {
          sessionId: sessionId,
          user: {
              pk: user.pk,
              id: user.id,
              name: user.name,
              email: user.email,
              interests: user.interests,
          }
      };
        sessions.get('sessions')
            .push(session)
            .write();

        if (!req.cookies.user_auth) {
            res.cookie('user_auth', sessionId, {
                maxAge: 1000000,
                httpOnly: true,
                signed: true,
                saveUninitialized: true,
            });
        }
    res.json(
        {
            status: '201 CREATED',
            msg: 'Sign Up Success',
            user: session['user'],
        }
    )
  } catch (e) {
    res.json(
        {
          status: 500,
          msg: e,
        }
    )
  }
});

// 최초 로그인
router.post('/login', function(req, res, next) {
    const validUser = getUser(req.body['id'], req.body['pw']);
    try {
        if (validUser !== undefined) {
            deleteOldSession(validUser.pk);
            const sessionId = uuidv4();
            const session = {
                sessionId: sessionId,
                user: {
                    pk: validUser.pk,
                    id: validUser.id,
                    name: validUser.name,
                    email: validUser.email,
                    interests: validUser.interests,
                }
            };
            sessions.get('sessions')
                .push(session)
                .write();

            if (!req.cookies.user_auth) {
                res.cookie('user_auth', sessionId, {
                    maxAge: 1000000,
                    httpOnly: true,
                    signed: true,
                    saveUninitialized: true,
                });
            }
            res.json(
                {
                    status: 200,
                    msg: 'login success',
                    user: session['user'],
                }
            )
        } else {
            // 로그인을 다시 해주세요라는 모달 띄우기 로직을 위한 json
            res.json(
                {
                    status: 404,
                    msg: 'Please enter Id and PW again.'
                }
            )
        }

    } catch (e) {

        res.json(
            {
                status: 500,
                msg: e,
            }
        )
    }

});

const getUser = (id, pw) => {
    return users.get('users')
        .find({id: id, password: pw})
        .value();
};

const deleteOldSession = (pk) => {
    sessions.get('sessions')
        .remove({user:{ pk:pk }})
        .write();
};

// 유저 로그아웃
router.post('/logout', function (req, res, next) {
    console.log('로그아웃 요청 받음');
    console.log(req.signedCookies.user_auth);
    sessions.get('sessions')
        .remove({ sessionId: req.signedCookies.user_auth })
        .write();
    res.clearCookie('user_auth');
    res.json(
        {
            status: 200,
            msg: 'Logout Success'
        }
    )
});


module.exports = router;
