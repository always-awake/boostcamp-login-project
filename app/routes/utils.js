const {users} = require('../db/settings/users.js');
const {sessions} = require('../db/settings/sessions.js');


const makeSession = (sessionId, user) => {
    return {
        sessionId: sessionId,
        user: {
            pk: user.pk,
            id: user.id,
            name: user.name,
            email: user.email,
            interests: user.interests,
        }
    };
};


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


module.exports = {
    makeSession,
    getUser,
    deleteOldSession,
};