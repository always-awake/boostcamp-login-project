const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./db/sessions.json');
const sessions = low(adapter);


sessions.defaults({ sessions: [] })
    .write();


module.exports = {
    sessions
};