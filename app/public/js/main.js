import {makeLoginHTML} from './login/makeLoginHtml.js';
import {makeMyPageHTML} from './mypage/makeMyPageHtml.js';
import {DOMAIN} from './utils.js';

window.onload = () => {
    fetch(`${DOMAIN}/main`)
        .then(res => res.json())
        .then((res) => {
            console.log('Success: ', res);
            if (res['msg'] === 'Not Logined' && res['user'] === null) {
                makeLoginHTML();
            } else {
                makeMyPageHTML(res['user']);
            }
        })
        .catch(err => console.error('Error: ', err));
};