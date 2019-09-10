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

const findUserById = (id) => {
    return users.get('users')
        .find({ id: id })
        .value();
};

const saveUser = (user) => {
    users.get('users')
        .push(user)
        .write();
    users.update('count', n => n + 1)
        .write();
};

const saveSession = (session) => {
    sessions.get('sessions')
        .push(session)
        .write();
};

const deleteSession = (sessionId) => {
    sessions.get('sessions')
        .remove({ sessionId: sessionId })
        .write();
};

const getSession = (sessionId) => {
    return sessions.get('sessions')
        .find({ sessionId: sessionId })
        .value();
};

module.exports = {
    makeSession,
    getUser,
    deleteOldSession,
    findUserById,
    saveUser,
    saveSession,
    deleteSession,
    getSession
};