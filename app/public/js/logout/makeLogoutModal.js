import {logoutModal} from '../components/logout/modal.js';
import {setLogoutModalButtonEvent} from './setEvent.js';

const makeLogoutModal = () => {
    const mypageBody = document.getElementById('body');
    mypageBody.innerHTML += logoutModal();
    setLogoutModalButtonEvent();
};


export {
    makeLogoutModal
}