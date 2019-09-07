const loginRequest = (id, pw) => {
    return {
        id: id,
        pw: pw,
    }
};

const LOGIN_URL = 'http://localhost:3000/users/login';

export {
    loginRequest,
    LOGIN_URL
}