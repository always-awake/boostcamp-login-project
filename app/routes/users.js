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
    users.get('users')
        .push(req.body)
        .write();
    users.update('count', n => n + 1)
        .write();
    res.json(
        {
          status: '201 CREATED',
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

// 로그인
router.post('/login', function(req, res, next) {
    console.log('로그인 요청 받음');
    try {
        const validUser = getUser(req.body['id'], req.body['pw']);
        if (validUser !== undefined) {
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
            sessions.update('count', n => n + 1)
                .write();

            res.cookie('user_cookie', sessionId, {
                maxAge: 10000,
                httpOnly: true,
                signed: true,
            });
            res.json(
                {
                    status: 200,
                    msg: 'login success'
                }
            )
        } else {
            // 로그인을 다시 해주세요라는 모달 띄우기 로직을 위한 json
            res.json(
                {
                    status: 404
                }
            )
        }

    } catch (e) {
        console.log(e);
        res.json(
            {
                status: 500,
                msg: e,
            }
        )
    }

});

const getUser = (id, pw) => {
    console.log(id, pw);
    return users.get('users')
        .find({id: id, password: pw})
        .value();
};

module.exports = router;
