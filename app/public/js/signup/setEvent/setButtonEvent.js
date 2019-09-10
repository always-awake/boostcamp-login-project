import {makeSignUpHTML} from '../make/makeSignupHtml.js';
import {userSignup} from '../userSignup.js';

/**
 * 회원가입 폼에 있는 초기화, 가입하기 버튼의 이벤트를 추가하는 함수
 */
const setButtonEvent = () => {
    setReloadButton();
    setSignupButton();
};

/**
 * 초기화 버튼의 이벤트를 추가하는 함수
 */
const setReloadButton = () => {
    const reloadButton =  document.getElementById('signup_reload_button');
    const reloadModalOkButton = document.getElementById('reload_modal_ok_btn');
    const reloadModalCancelButton = document.getElementById('reload_modal_cancel_btn');
    const reloadModal = document.getElementById('reload_modal');
    reloadButton.addEventListener('click', () => {
        reloadModal.style.display = 'block';
    });
    reloadModalOkButton.addEventListener('click', () => {
        makeSignUpHTML();
        window.scrollTo(0, 0);
    });
    reloadModalCancelButton.addEventListener('click', () => {
        reloadModal.style.display = 'none';
    });
};

/**
 * 가입하기 버튼의 이벤트를 추가하는 함수
 */
const setSignupButton = () => {
    const signupButton = document.getElementById('signup_submit_button');
    const signupModal = document.getElementById('signup_modal');
    const signupModalButton = document.getElementById('signup_modal_ok_btn');
    signupButton.addEventListener('click', () => {
        userSignup();
    });
    signupModalButton.addEventListener('click', () => {
        signupModal.style.display = 'none';
    });
};


export {
    setButtonEvent,
};