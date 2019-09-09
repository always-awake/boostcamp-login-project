import {makeSignUpHTML} from '../signup/makeSignupHtml.js';
import {userLogin} from './userLogin.js';
import {requestIdInput, requestPwInput} from './makeLoginErrorMsg.js';

const setLoginEvent = () => {
    const loginButton = document.getElementById('login_btn');
    const registerButton = document.getElementById('register_btn');
    const inputIdDiv = document.getElementById('login_id');
    const inputPwDiv = document.getElementById('login_pw');

    inputIdDiv.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && inputIdDiv.value === '') {
            requestIdInput();
        } else if (e.key === 'Enter' && inputIdDiv.value !== '' && inputPwDiv.value !== '') {
            userLogin(inputIdDiv.value, inputPwDiv.value);
        } else if (e.key === 'Enter' && inputIdDiv.value !== '' && inputPwDiv.value === '') {
            inputPwDiv.focus();
        }

    });

    inputIdDiv.addEventListener('focusout', () => {
        if (inputIdDiv.value !== '') {
            const idInputErrorMsgDiv = document.getElementById('id_error_msg');
            idInputErrorMsgDiv.innerHTML = '';
        }
    });

    inputPwDiv.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && inputPwDiv.value === '') {
            requestPwInput();
        } else if (e.key === 'Enter' && inputPwDiv.value !== '') {
            userLogin(inputIdDiv.value, inputPwDiv.value);
        }
    });

    loginButton.addEventListener('click', () => {
        userLogin(inputIdDiv.value, inputPwDiv.value);
    });
    registerButton.addEventListener('click', () => {
        makeSignUpHTML();
    });
};

export {
    setLoginEvent,
};