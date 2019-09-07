import {setMyPageEvent} from './setEvent.js';
import {myPageHeader} from '../components/mypage/header.js';
import {myPage} from '../components/mypage/mypage.js';

const makeMyPageHTML = (user) => {
    const maPageHead = document.getElementById('head');
    const maPageBody = document.getElementById('body');

    maPageHead.innerHTML = `<link rel="stylesheet" href="./css/mypage/mypage.css">
                             <title>네이버 : 마이페이지</title>`;
    maPageBody.className = 'mypage__body';
    maPageBody.innerHTML = myPageHeader('마이페이지');
    maPageBody.innerHTML += myPage(user);

    const mypageInterests = document.getElementById('user_interests');
    for (let interest of user.interests) {
        mypageInterests.innerHTML += `<div class="user__interest">${interest}</div>`
    }
    setMyPageEvent();
};

export {
    makeMyPageHTML,
}