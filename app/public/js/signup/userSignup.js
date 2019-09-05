import {checkEmptyValidation, checkAllInputValidation} from './checkValidation.js';
import {makeUser} from './makeUser.js'
import {SIGNUP_ERROR_MODAL_TEXT} from './utils.js';
import {makeSignupModal} from './makeSignupModal.js';


const userSignup = () => {
    const user = makeUser();
    const emptyPropList = checkEmptyValidation(user);
    if (emptyPropList.length !== 0) {
        const signupModal = document.getElementById('signup_modal');
        signupModal.style.display = 'block';
        return makeSignupModal(SIGNUP_ERROR_MODAL_TEXT(emptyPropList));
    }

    if (checkAllInputValidation(user)){
        console.log("회원가입 요청하기")
    } else{
        console.log("입력값 오류") // 따로 처리 필요
    }

};

export {
    userSignup,
}