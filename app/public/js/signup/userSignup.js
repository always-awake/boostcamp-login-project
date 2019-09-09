import {checkEmptyValidation, checkAllInputValidation} from './check/checkValidation.js';
import {makeUser} from './make/makeUser.js'
import {SIGNUP_ERROR_MODAL_TEXT, SIGN_UP_URL} from './utils.js';
import {makeSignupModal} from './make/makeSignupModal.js';
import {makeMyPageHTML} from '../mypage/makeMyPageHtml.js';


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