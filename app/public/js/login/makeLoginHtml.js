import {loginForm} from '../components/login/form.js'
import {setLoginEvent} from './setEvent.js';

const makeLoginHTML = () => {

    const loginHead = document.getElementById('head');
    const loginBody = document.getElementById('body');
    loginHead.innerHTML = `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
                             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
                             <link rel="stylesheet" href="./css/login/login.css">
                             <title>네이버 : 로그인</title>`;
    loginBody.className = 'login__body';
    loginBody.innerHTML = loginForm();
    setLoginEvent();
};
 export {
     makeLoginHTML,
 }