import {makeLoginHTML} from '../login/makeLoginHtml.js';

const setLogoutModalButtonEvent = () => {
    const logoutModalButton = document.getElementById('logout_modal_ok_btn');
    logoutModalButton.addEventListener('click', () => {
        makeLoginHTML();
    })
};

export {
    setLogoutModalButtonEvent,
}