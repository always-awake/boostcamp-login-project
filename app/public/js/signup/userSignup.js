import {checkEmptyValidation} from './checkValidation.js';
import {makeUser} from './makeUser.js'
import {SIGNUP_ERROR_MODAL_TEXT} from './utils.js';
import {makeSignupModal} from './makeSignupModal.js';


const userSignup = () => {
    const user = makeUser();
    const emptyPropList = checkEmptyValidation(user);
    if (!emptyPropList) {
        // 각 필드 유효성 검증
    } else {
        makeSignupModal(SIGNUP_ERROR_MODAL_TEXT(emptyPropList));
    }
};

export {
    userSignup,
}