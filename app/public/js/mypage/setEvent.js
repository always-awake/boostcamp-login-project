import {userLogout} from './userLogout.js';


const setMyPageEvent = () => {
    // const loginButton = document.getElementById('login_btn');
    // const registerButton = document.getElementById('register_btn');
    // const inputIdValue = document.getElementById('login_id');
    // const inputPwValue = document.getElementById('login_pw');
    // loginButton.addEventListener('click', () => {
    //     userLogin(inputIdValue.value, inputPwValue.value);
    // });
    // registerButton.addEventListener('click', () => {
    //     makeSignUpHTML();
    // })
    const logoutButton = document.getElementById('mypage_logout_btn');
    logoutButton.addEventListener('click', () => {
        userLogout();
        //정상적으로 로그아웃됬습니다 모달창
        //모달창의 확인을 누르면 로그인 페이지 응답
    });

};

export {
    setMyPageEvent
};