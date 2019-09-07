import {loginRequest, LOGIN_URL} from './utils.js';
import {makeMyPageHTML} from '../mypage/makeMyPageHtml.js';


const userLogin = (id, pw) => {
    fetch(LOGIN_URL, {
        method: 'POST',
        body: JSON.stringify(loginRequest(id, pw)),
        headers:{
            'Content-Type' : 'application/json;charset=utf-8'
        }
    }).then(res => res.json())
        .then(res => {
            const responseStatus = res['status'];
            const responseMsg = res['msg'];

            console.log('Success: ', res);

            if (responseStatus === 200 && responseMsg === 'login success') {
                console.log('정상적으로 로그인되었습니다.');
                makeMyPageHTML(res['user']);
            } else if (responseStatus === 404 && responseMsg === 'Please enter Id and PW again.') {
                console.log('아이디 또는 비밀번호를 다시 확인하세요.')
            } else if (responseStatus === 500) {
                console.log('일시적 서버 오류입니다. 다시 로딩해주세요.')
            }
        })
        .catch(err => console.error('Error: ', err))
};


export {
    userLogin
}