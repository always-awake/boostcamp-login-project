import {loginForm} from '../../components/login/form.js';
import {setLoginEvent} from './setEvent.js';

const makeLoginHTML = () => {
    const signUpHead = document.getElementById('head');
    const signUpBody = document.getElementById('body');
    signUpHead.innerHTML += `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
                             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
                             <link rel="stylesheet" href="./css/login/login.css">
                             <title>네이버 : 로그인</title>`;
    signUpBody.innerHTML += loginForm();
    setLoginEvent();
};
 export {
     makeLoginHTML,
 }