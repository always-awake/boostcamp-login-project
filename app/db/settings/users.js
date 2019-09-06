const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./db/users.json');
const users = low(adapter);


users.defaults({ users: [], count: 0 })
    .write();


module.exports = {
    users
};