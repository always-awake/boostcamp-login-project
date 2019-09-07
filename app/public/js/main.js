import {makeLoginHTML} from './login/makeLoginHtml.js';
import {makeMyPageHTML} from './mypage/makeMyPageHtml.js';

window.onload = () => {
    fetch(`http://localhost:3000/main`)
        .then(res => res.json())
        .then((res) => {
            console.log('Success: ', res);
            if (res['msg'] === 'Not Logined' && res['user'] === null) {
                makeLoginHTML();
            } else {
                makeMyPageHTML();
            }
        })
        .catch(err => console.error('Error: ', err));

};