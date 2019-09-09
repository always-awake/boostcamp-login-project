import {signupHeader} from '../../components/signup/header.js';
import {signupForm} from '../../components/signup/form.js';
import {setEvent} from '../setEvent/setEvent.js';

const makeSignUpHTML = () => {
    const signUpHead = document.getElementById('head');
    const signUpBody = document.getElementById('body');
    signUpHead.innerHTML = `<meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                            <meta http-equiv="X-UA-Compatible" content="ie=edge">
                            <link rel="stylesheet" href="css/signup/signup.css">
                            <script type="module" src="js/signup.js"></script>
                            <title>네이버 : 회원가입</title>`;
    signUpBody.className = 'signup__body';
    signUpBody.innerHTML = signupHeader('회원가입');
    signUpBody.innerHTML += signupForm();
    setEvent();
};

export {
    makeSignUpHTML,
}