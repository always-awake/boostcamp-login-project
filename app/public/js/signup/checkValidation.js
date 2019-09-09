import validator from './validators.js';
import {checkDuplicationSimple} from './checkDuplication.js';

const checkIdValidation = (idInputDiv) => {
    const idInputValue = idInputDiv.value;
    const idMsgDiv = document.getElementById('user_id_msg');
    const validation = validator.checkIdValidation(idInputValue);

    if (validation['result']) {
        const pass = validation['pass_obj'];
        idMsgDiv.textContent = `${pass['msg']}`;
        idMsgDiv.style.color = pass['msg_color']
    } else {
        const error = validation['error_obj'];
        idMsgDiv.textContent = `${error['msg']}`;
        idMsgDiv.style.color = error['msg_color']
    }
};

const checkPwValidation = (pwInputDiv) => {
    const pwInputValue = pwInputDiv.value;
    const pwMsgDiv = document.getElementById('user_password_msg');
    const validation = validator.checkPwValidation(pwInputValue);

    if (validation['result']) {
        const pass = validation['pass_obj'];
        pwMsgDiv.textContent = `${pass['msg']}`;
        pwMsgDiv.style.color = pass['msg_color']
    } else {
        const error = validation['error_obj'];
        pwMsgDiv.textContent = `${error['msg']}`;
        pwMsgDiv.style.color = error['msg_color']
    }
};

const checkRePwSameness = (rePwInputDiv) => {
    const rePwMsgDiv = document.getElementById('user_re_password_msg');
    const oldPw = document.getElementById('user_pw_input').value;
    const newPw = rePwInputDiv.value;
    const validation = validator.checkPwSameness(oldPw, newPw);

    if (validation['result']) {
        const pass = validation['pass_obj'];
        rePwMsgDiv.textContent = `${pass['msg']}`;
        rePwMsgDiv.style.color = pass['msg_color'];
    } else {
        const error = validation['error_obj'];
        rePwMsgDiv.textContent = `${error['msg']}`;
        rePwMsgDiv.style.color = error['msg_color'];
    }
};

const checkEmailValidation = (emailInputDiv) => {
    const emailInputValue = emailInputDiv.value;
    const emailMsgDiv = document.getElementById('user_email_msg');
    const validation = validator.checkEmailValidation(emailInputValue);

    if (validation['result']) {
        emailMsgDiv.textContent = '';
    } else {
        const error = validation['error_obj'];
        emailMsgDiv.textContent = `${error['msg']}`;
        emailMsgDiv.style.color = error['msg_color'];
    }
};

const checkPhoneValidation = (phoneInputDiv) => {
    const phoneInputValue = phoneInputDiv.value;
    const phoneMsgDiv = document.getElementById('user_phone_msg');
    const validation = validator.checkPhoneValidation(phoneInputValue);

    if (validation['result']) {
        phoneMsgDiv.textContent = '';
    } else {
        const error = validation['error_obj'];
        phoneMsgDiv.textContent = `${error['msg']}`;
        phoneMsgDiv.style.color = error['msg_color'];
    }
};

const checkEmptyValidation = (user) => {
    const userProps = Object.keys(user);
    const emptyPropList = [];
    for (let prop of userProps) {
        const userProp = user[prop];
        if (prop === 'birth') {
            if (userProp['year'] === '' || userProp['month'] === '' || userProp['day'] === '') {
                emptyPropList.push(prop);
            }
        } else if (prop === 'contract') {
            if (userProp === false) {
                emptyPropList.push(prop);
            }
        } else {
            if (userProp.length === 0) {
                emptyPropList.push(prop);
            }
        }
    }
    return emptyPropList
};

const checkAllInputValidation = async (user) => {
    const invalidInputIdList = [];
    if (!validator.checkIdValidation(user.id)['result']) invalidInputIdList.push('user_id_input_box');
    if (!validator.checkPwValidation(user.password)['result']) invalidInputIdList.push('user_pw_input_box');
    if (!validator.checkPwSameness(user.password, user.re_password)['result']) invalidInputIdList.push('user_re_pw_input_box');
    if (!validator.checkBirthYearValidation(user.birth.year)['result']) invalidInputIdList.push('user_birth_input_box');
    if (!validator.checkBirthDayValidation(user.birth.day)['result']) invalidInputIdList.push('user_birth_input_box');
    if (user.gender === 'default') invalidInputIdList.push('user_gender_input_box');
    if (!validator.checkEmailValidation(user.email)['result']) invalidInputIdList.push('user_email_input_box');
    if (!validator.checkPhoneValidation(user.phone)['result']) invalidInputIdList.push('user_phone_input_box');
    if (user.interests.length < 3) invalidInputIdList.push('user_interests_input_box');

    const result = await checkDuplicationSimple(user.id);
    if (!result) invalidInputIdList.unshift('user_id_input_box');
    return invalidInputIdList
};


export {
    checkIdValidation,
    checkPwValidation,
    checkRePwSameness,
    checkEmailValidation,
    checkPhoneValidation,
    checkEmptyValidation,
    checkAllInputValidation,
};