import {LOGOUT_URL} from './utils.js';

const userLogout = () => {
    fetch(LOGOUT_URL, {
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json;charset=utf-8'
        }
    }).then(res => res.json())
        .then(res => {
            const responseStatus = res['status'];
            const responseMsg = res['msg'];

            console.log('Success: ', res);
            if (responseStatus === 200 && responseMsg === 'Logout Success') {
                console.log('정상적으로 로그아웃됬습니다.')
                // 로그아웃 모달
            }
            //
            // if (responseStatus === 200 && responseMsg === 'login success') {
            //     console.log('정상적으로 로그인되었습니다.');
            //     makeMyPageHTML(res['user']);
            // } else if (responseStatus === 404 && responseMsg === 'Please enter Id and PW again.') {
            //     console.log('아이디 또는 비밀번호를 다시 확인하세요.')
            // } else if (responseStatus === 500) {
            //     console.log('일시적 서버 오류입니다. 다시 로딩해주세요.')
            // }
        })
        .catch(err => console.error('Error: ', err))
};


export {
    userLogout
}