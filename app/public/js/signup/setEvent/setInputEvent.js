import {
    checkIdValidation,
    checkPwValidation,
    checkRePwSameness,
    checkEmailValidation,
    checkPhoneValidation,
} from '../check/checkValidation.js';
import {checkDuplication} from '../check/checkDuplication.js';
import {setInterestsEvent} from './setInterestsEvent.js';
import {setContractEvent} from './setContractEvent.js';
import {setBirthEvent} from './setBirthEvent.js';

/**
 * 회원가입 입력(Input) Div의 이벤트를 설정하는 함수
 */
const setInputEvent = () => {
    setIdEvent();
    setPwEvent();
    setRePwEvent();
    setNameEvent();
    setGenderEvent();
    setEmailEvent();
    setPhoneEvent();
    setContractEvent();
    setBirthEvent();
    setInterestsEvent();
};

/**
 * 아이디 Input Div의 이벤트를 설정하는 함수
 */
const setIdEvent = () => {
    const idInputDiv = document.getElementById('user_id_input');

    idInputDiv.addEventListener('focusin', () => {
        idInputDiv.parentElement.className = 'input__box__checked';
    });
    idInputDiv.addEventListener('focusout', () => {
        checkIdValidation(idInputDiv);
        if (idInputDiv.value !== '') checkDuplication(idInputDiv);
        idInputDiv.parentElement.className = 'input__box';
    });
};

/**
 * 비밀번호 Input Div의 이벤트를 설정하는 함수
 */
const setPwEvent = () => {
    const pwInputDiv = document.getElementById('user_pw_input');

    pwInputDiv.addEventListener('focusin', () => {
        pwInputDiv.parentElement.className = 'input__box__checked';
    });
    pwInputDiv.addEventListener('focusout', () => {
        checkPwValidation(pwInputDiv);
        pwInputDiv.parentElement.className = 'input__box';
    });
};

/**
 * 비밀번호 재입력 Input Div의 이벤트를 설정하는 함수
 */
const setRePwEvent = () => {
    const rePwInputDiv = document.getElementById('user_re_pw_input');
    rePwInputDiv.addEventListener('focusin', () => {
        rePwInputDiv.parentElement.className = 'input__box__checked';
    });
    rePwInputDiv.addEventListener('focusout', () => {
        checkRePwSameness(rePwInputDiv);
        rePwInputDiv.parentElement.className = 'input__box';
    });
};

/**
 * 이름 Input Div의 이벤트를 설정하는 함수
 */
const setNameEvent = () => {
    const nameInputDiv = document.getElementById('user_name_input');
    nameInputDiv.addEventListener('focusin', () => {
        nameInputDiv.parentElement.className = 'input__box__checked';
    });
    nameInputDiv.addEventListener('focusout', () => {
        nameInputDiv.parentElement.className = 'input__box';
    });
};

/**
 * 성별 Input Div의 이벤트를 설정하는 함수
 */
const setGenderEvent = () => {
    const genderInputDiv = document.getElementById('user_gender_select');
    genderInputDiv.addEventListener('focusin', () => {
        genderInputDiv.parentElement.className = 'input__box__checked';
    });
    genderInputDiv.addEventListener('focusout', () => {
        genderInputDiv.parentElement.className = 'input__box';
    });
};

/**
 * 이메일 Input Div의 이벤트를 설정하는 함수
 */
const setEmailEvent = () => {
    const emailInputDiv = document.getElementById('user_email_input');

    emailInputDiv.addEventListener('focusin', () => {
        emailInputDiv.parentElement.className = 'input__box__checked';
    });
    emailInputDiv.addEventListener('focusout', () => {
        checkEmailValidation(emailInputDiv);
        emailInputDiv.parentElement.className = 'input__box';
    });
};

/**
 * 휴대전화 Input Div의 이벤트를 설정하는 함수
 */
const setPhoneEvent = () => {
    const phoneInputDiv = document.getElementById('user_phone_input');
    phoneInputDiv.addEventListener('focusin', () => {
        phoneInputDiv.parentElement.className = 'input__box__checked';
    });
    phoneInputDiv.addEventListener('focusout', () => {
        checkPhoneValidation(phoneInputDiv);
        phoneInputDiv.parentElement.className = 'input__box';
    });
};


export {
    setInputEvent,
};