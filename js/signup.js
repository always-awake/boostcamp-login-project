import validator from './validators.js';

window.onload = function() {
    document.getElementById('user_id_input').addEventListener('focusin', () => {
        document.getElementById('user_id_input').parentElement.className = 'input__box__checked';
    });
    // id validation
    document.getElementById('user_id_input').addEventListener('focusout', () => {
        const requestUserId = document.getElementById('user_id_input').value;
        const userIdMsgDiv = document.getElementById('user_id_msg');
        const validation_obj = validator.checkIdValidation(requestUserId);

        if (validation_obj['result'] === null){
            console.log(`${validation_obj['error_obj']['status']}`);
            userIdMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            userIdMsgDiv.style.color = '#FF0000';
        } else if (validation_obj['result']) {
            console.log(`${validation_obj['pass_obj']['status']}`);
            userIdMsgDiv.textContent = `${validation_obj['pass_obj']['msg']}`;
            userIdMsgDiv.style.color = '#2CB400';
        } else {
            console.log(`${validation_obj['error_obj']['status']}`);
            userIdMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            userIdMsgDiv.style.color = '#FF0000';
        }
        document.getElementById('user_id_input').parentElement.className = 'input__box';
    });

    document.getElementById('user_pw_input').addEventListener('focusin', () => {
        document.getElementById('user_pw_input').parentElement.className = 'input__box__checked';
    });
    // password validation
    document.getElementById('user_pw_input').addEventListener('focusout', () => {
        const requestUserPw = document.getElementById('user_pw_input').value;
        const userPwMsgDiv = document.getElementById('user_password_msg');
        const validation_obj = validator.checkPwValidation(requestUserPw);
        if (validation_obj['result'] === null){
            console.log(`${validation_obj['error_obj']['status']}`);
            userPwMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            userPwMsgDiv.style.color = '#FF0000';
        } else if (validation_obj['result']) {
            console.log(`${validation_obj['pass_obj']['status']}`);
            userPwMsgDiv.textContent = `${validation_obj['pass_obj']['msg']}`;
            userPwMsgDiv.style.color = '#2CB400';
        } else {
            console.log(`${validation_obj['error_obj']['status']}`);
            userPwMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            userPwMsgDiv.style.color = '#FF0000';
        }
        document.getElementById('user_pw_input').parentElement.className = 'input__box';
    });

    document.getElementById('user_re_pw_input').addEventListener('focusin', () => {
        document.getElementById('user_re_pw_input').parentElement.className = 'input__box__checked';
    });
    // check old, new password sameness
    document.getElementById('user_re_pw_input').addEventListener('focusout', () => {
        const userRePwMsgDiv = document.getElementById('user_re_password_msg');
        const userOldPw = document.getElementById('user_pw_input').value;
        const userNewPw = document.getElementById('user_re_pw_input').value;
        const validation_obj = validator.checkPwSameness(userOldPw, userNewPw);

        if (validation_obj['result'] === null){
            console.log(`${validation_obj['error_obj']['status']}`);
            userRePwMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            userRePwMsgDiv.style.color = '#FF0000';
        } else if (validation_obj['result']) {
            console.log(`${validation_obj['pass_obj']['status']}`);
            userRePwMsgDiv.textContent = `${validation_obj['pass_obj']['msg']}`;
            userRePwMsgDiv.style.color = '#2CB400';
        } else {
            console.log(`${validation_obj['error_obj']['status']}`);
            userRePwMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            userRePwMsgDiv.style.color = '#FF0000';
        }
        document.getElementById('user_re_pw_input').parentElement.className = 'input__box';
    });

    document.getElementById('user_email_input').addEventListener('focusin', () => {
        document.getElementById('user_email_input').parentElement.className = 'input__box__checked';
    });
    // email validation
    document.getElementById('user_email_input').addEventListener('focusout', () => {
        const requestUserEmail = document.getElementById('user_email_input').value;
        const userEmailMsgDiv = document.getElementById('user_email_msg');
        const validation_obj = validator.checkEmailValidation(requestUserEmail);

        if (validation_obj === undefined) {
            userEmailMsgDiv.textContent = '';
        } else if (validation_obj['result'] === null){
                console.log(`${validation_obj['error_obj']['status']}`);
                userEmailMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
                userEmailMsgDiv.style.color = '#FF0000';
        } else if (!validation_obj['result']) {
            console.log(`${validation_obj['error_obj']['status']}`);
            userEmailMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            userEmailMsgDiv.style.color = '#FF0000';
        }
        document.getElementById('user_email_input').parentElement.className = 'input__box';
    });


    document.getElementById('user_phone_input').addEventListener('focusin', () => {
        document.getElementById('user_phone_input').parentElement.className = 'input__box__checked';
    });
    // phone validation
    document.getElementById('user_phone_input').addEventListener('focusout', () => {
        const requestUserPhone = document.getElementById('user_phone_input').value;
        const userPhoneMsgDiv = document.getElementById('user_phone_msg');
        const validation_obj = validator.checkPhoneValidation(requestUserPhone);

        if (validation_obj === undefined) {
            userPhoneMsgDiv.textContent = '';
        } else if (validation_obj['result'] === null){
            console.log(`${validation_obj['error_obj']['status']}`);
            userPhoneMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            userPhoneMsgDiv.style.color = '#FF0000';
        } else if (!validation_obj['result']) {
            console.log(`${validation_obj['error_obj']['status']}`);
            userPhoneMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            userPhoneMsgDiv.style.color = '#FF0000';
        }
        document.getElementById('user_phone_input').parentElement.className = 'input__box';
    });

    //name
    document.getElementById('user_name_input').addEventListener('focusin', () => {
        document.getElementById('user_name_input').parentElement.className = 'input__box__checked';
    });
    document.getElementById('user_name_input').addEventListener('focusout', () => {
        document.getElementById('user_name_input').parentElement.className = 'input__box';
    });

    // birth

    // gender
    document.getElementById('user_gender_select').addEventListener('focusin', () => {
        document.getElementById('user_gender_select').parentElement.className = 'input__box__checked';
    });
    document.getElementById('user_gender_select').addEventListener('focusout', () => {
        document.getElementById('user_gender_select').parentElement.className = 'input__box';
    });

    // interest
    document.getElementById('user_interest_input').addEventListener('focusin', () => {
        document.getElementById('user_interest_input').parentElement.className = 'input__box__checked';
    });
    document.getElementById('user_interest_input').addEventListener('focusout', () => {
        document.getElementById('user_interest_input').parentElement.className = 'input__box';
    });

    // contract
    const contractCheckbox = document.getElementById('user_contract_checkbox');
    const contractModal = document.getElementById('myModal');
    const closeBtn = document.getElementsByClassName('contract__close')[0];
    const contractAgreeBtn = document.getElementsByClassName('contract__agree__button')[0];
    const contractText = document.getElementsByClassName('contract__text')[0];

    contractCheckbox .addEventListener('click', () => {
        contractCheckbox.checked = false;
        contractModal.style.display = 'block';
    });
    closeBtn.addEventListener('click', () => {
            contractModal.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target === contractModal) contractModal.style.display = 'none';
    });
    contractAgreeBtn.disabled = true;
    contractText.addEventListener('scroll', (event) => {
        const contractText = event.target;
        if (contractText.scrollHeight - contractText.scrollTop === contractText.clientHeight) {
            contractAgreeBtn.disabled = false;
            contractAgreeBtn.className = 'contract__agree__button__activate';
        }
    });
    contractAgreeBtn.addEventListener('click', () => {
        contractModal.style.display = 'none';
        contractCheckbox.checked = true;
        contractCheckbox.disabled = true;
    })

};
