import {makeSignUpHTML} from '../signup/makeSignupHtml.js';

const setLoginEvent = () => {
    const loginButton = document.getElementById('login_btn');
    const registerButton = document.getElementById('register_btn');
    loginButton.addEventListener('click', () => {

    });
    registerButton.addEventListener('click', () => {
        makeSignUpHTML();
    })

};

export {
    setLoginEvent,
};