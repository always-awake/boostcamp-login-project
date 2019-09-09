import {checkEmptyValidation, checkAllInputValidation} from './checkValidation.js';
import {makeUser} from './makeUser.js'
import {SIGNUP_ERROR_MODAL_TEXT, SIGN_UP_URL} from './utils.js';
import {makeSignupModal} from './makeSignupModal.js';
import {makeMyPageHTML} from '../mypage/makeMyPageHtml.js';


const userSignup = async () => {
    const user = makeUser();
    const emptyPropList = checkEmptyValidation(user);
    if (emptyPropList.length !== 0) {
        const signupModal = document.getElementById('signup_modal');
        signupModal.style.display = 'block';
        return makeSignupModal(SIGNUP_ERROR_MODAL_TEXT(emptyPropList));
    }
    // if (checkAllInputValidation(user)){
    //     fetch(SIGN_UP_URL,{
    //         method: 'POST',
    //         body: JSON.stringify(user),
    //         headers:{
    //             'Content-Type' : 'application/json;charset=utf-8'
    //         }
    //     }).then(res => res.json())
    //         .then(res => {
    //             console.log('Success: ', res);
    //             console.log('회원가입 완료');
    //             makeMyPageHTML(res['user']);
    //         })
    //         .catch(err => console.error('Error: ', err))
    //
    // } else {
    //     console.log("입력값 오류") // 따로 처리 필요
    // }
    // const invalidInputIdList = ;
    // console.log(invalidInputIdList);
    // const result = checkAllInputValidation(user)
    //     .then(() => {
    //         console.log('히어히어');
    //         console.log(result);
    //     });

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
                    console.log('Success: ', res);
                    console.log('회원가입 완료');
                    makeMyPageHTML(res['user']);
                })
                .catch(err => console.error('Error: ', err))
    } else {
        console.log(invalidInputIdList);
        const firstInvalidInput = document.getElementById(invalidInputIdList[0]);
        firstInvalidInput.scrollIntoView();
        // setTimeout(() => {
        //     const result = checkAllInputValidation(user);
        //     console.log('타임아웃 안');
        //     console.log(result);
        // }, 0);
        // console.log('됬다');


        // console.log(result);
        // var promise1 = new Promise(function(resolve, reject) {
        //     setTimeout(function() {
        //         resolve('foo');
        //     }, 300);
        // });
        //
        // promise1.then(function(value) {
        //     console.log(value);
        //     // expected output: "foo"
        // });

    }

};

export {
    userSignup,
}