import {checkEmptyValidation, checkAllInputValidation} from './checkValidation.js';
import {makeUser} from './makeUser.js'
import {SIGNUP_ERROR_MODAL_TEXT, SIGN_UP_URL} from './utils.js';
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
        fetch(SIGN_UP_URL,{
            method: 'POST',
            body: JSON.stringify(user),
            headers:{
                'Content-Type' : 'application/json;charset=utf-8'
            }
        }).then(res => res.json())
            .then(res => console.log('Success: ', res))
            .then(() => {
                    console.log('회원가입 완료');
            })
            .catch(err => console.error('Error: ', err))

    } else{
        console.log("입력값 오류") // 따로 처리 필요
    }

};

export {
    userSignup,
}