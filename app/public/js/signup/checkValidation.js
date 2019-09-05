import validator from './validators.js';

// validation
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

    if (validation === undefined) {
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

    if (validation === undefined) {
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
            if (userProp['validation'] === false) {
                emptyPropList.push(prop);
            }
        } else {
            if (userProp.value === '' || userProp.value === []) {
                emptyPropList.push(prop);
            }
        }
    }
    return emptyPropList
};

const checkAllInputValidation = (user) => {

};


export {
    checkIdValidation,
    checkPwValidation,
    checkRePwSameness,
    checkEmailValidation,
    checkPhoneValidation,
    checkEmptyValidation,
}