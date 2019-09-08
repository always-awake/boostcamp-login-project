import {userLogout} from '../logout/userLogout.js';

const setMyPageEvent = () => {
    const logoutButton = document.getElementById('mypage_logout_btn');
    logoutButton.addEventListener('click', () => {
        userLogout();
    });
};

export {
    setMyPageEvent
};