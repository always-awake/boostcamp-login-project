import { signupHeader } from '../../components/signup/header.js';
import { signupForm } from '../../components/signup/form.js';
import { setSignUpEvent } from './setEvent.js'

import { loginForm } from '../../components/login/form.js';
import { setLoginEvent } from '../login/login.js';


const makeLoginHTML = () => {
    const signUpHead = document.getElementById('head');
    const signUpBody = document.getElementById('body');
    signUpHead.innerHTML += `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
                             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
                             <link rel="stylesheet" href="./css/login/login.css">
                             <title>네이버 : 로그인</title>`;
    signUpBody.innerHTML += loginForm();
};

const makeSignUpHTML = () => {
    const signUpHead = document.getElementById('head');
    const signUpBody = document.getElementById('body');
    signUpHead.innerHTML += `<link rel="stylesheet" href="./css/style.css">
                             <title>네이버 : 회원가입</title>`;
    signUpBody.className = 'signup__body';
    signUpBody.innerHTML = signupHeader ('회원가입');
    signUpBody.innerHTML += signupForm();
};

const setEvent = () => {
    setSignUpEvent();
};

window.onload = () => {
    // makeSignUpHTML();
    // setEvent();
    makeLoginHTML();
};