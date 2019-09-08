import {LOGOUT_URL} from '../mypage/utils.js';
import {makeLogoutModal} from './makeLogoutModal.js';

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
                console.log('정상적으로 로그아웃됬습니다.');
                makeLogoutModal();
            }
        })
        .catch(err => console.error('Error: ', err))
};


export {
    userLogout
}