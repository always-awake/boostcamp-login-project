import {checkEmptyValidation, checkAllInputValidation} from './check/checkValidation.js';
import {makeUser} from './make/makeUser.js'
import {SIGNUP_ERROR_MODAL_TEXT, SIGN_UP_URL} from './utils.js';
import {makeSignupModal} from './make/makeSignupModal.js';
import {makeMyPageHTML} from '../mypage/makeMyPageHtml.js';

/**
 * 회원가입을 진행하는 로직
 * 서버에 회원가입 요청을 보내기 전에 비어있는 입력값(input value) 없는지 먼저 체크한다.
 * 그 다음 다시한번 더 모든 입력값(input value)이 유효한지 한번 더 체크한다.
 * 모든 회원가입 전처리 과정이 끝나면, 서버에 회원가입을 요청한다.
 *
 * @return {Promise<void>}
 */
const userSignup = async () => {
    const user = makeUser();

    const emptyPropList = checkEmptyValidation(user);
    if (emptyPropList.length !== 0) {
        const signupModal = document.getElementById('signup_modal');
        signupModal.style.display = 'block';
        return makeSignupModal(SIGNUP_ERROR_MODAL_TEXT(emptyPropList));
    }

    const invalidInputIdList = await checkAllInputValidation(user);
    if (invalidInputIdList.length === 0) {
            fetch(SIGN_UP_URL,{
                method: 'POST',
                body: JSON.stringify(user),
                headers:{
                    'Content-Type' : 'application/json;charset=utf-8'
                }
            }).then(res => res.json())
                .then(res => {
                    makeMyPageHTML(res['user']);
                })
                .catch(err => console.error('Error: ', err))
    } else {
        const firstInvalidInput = document.getElementById(invalidInputIdList[0]);
        firstInvalidInput.scrollIntoView();
    }
};


export {
    userSignup,
}