import {makeSignUpHTML} from '../make/makeSignupHtml.js';
import {userSignup} from '../userSignup.js';


const setButtonEvent = () => {
    setReloadButton();
    setSignupButton();
};

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