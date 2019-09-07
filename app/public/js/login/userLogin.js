import {loginRequest, LOGIN_URL} from './utils.js';

const userLogin = (id, pw) => {
    fetch(LOGIN_URL, {
        method: 'POST',
        body: JSON.stringify(loginRequest(id, pw)),
        headers:{
            'Content-Type' : 'application/json;charset=utf-8'
        }
    }).then(res => res.json())
        .then(res => {
            console.log('Success: ', res);
            if (res['status'] === 200 && res['msg'] === 'login success') {
                console.log("됬다!");

            }
        })
        .catch(err => console.error('Error: ', err))
};


export {
    userLogin
}