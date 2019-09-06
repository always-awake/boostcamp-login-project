const express = require('express');
const router = express.Router();
const {users} = require('../db/settings/users.js');


router.get('/:id', function(req, res) {
    const idToCheck = req.params.id;
    try{
        const result = users.get('users')
            .find({ id: idToCheck })
            .value();
        console.log(result['id']);
        res.json(
            {
                status: 200,
                duplication: true,
            }
        )
    } catch (e) {
        res.json(
            {
                status: 200,
                duplication: false,
                msg: e,
            }
        )
    }
});




// 회원가입
router.post('/', function(req, res, next) {
  try {
    users.get('users')
        .push(req.body)
        .write();
    users.update('count', n => n + 1)
        .write();
    res.json(
        {
          status: 200
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


router.get('/validation/id')

module.exports = router;
