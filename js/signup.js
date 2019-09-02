import validator from './validators.js';

window.onload = function() {
    const idInputDiv = document.getElementById('user_id_input');
    // idInputDiv.focus();

    idInputDiv.addEventListener('focusin', () => {
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
    const birthYearInput = document.getElementById('user_birth_year_input');
    birthYearInput.addEventListener('focusin', () => {
        birthYearInput.parentElement.className = 'input__box__birth__checked';
    });
    birthYearInput.addEventListener('focusout', () => {
        birthYearInput.parentElement.className = 'input__box__birth';
    });

    const birthMonthInput = document.getElementById('user_birth_month_input');
    birthMonthInput.addEventListener('focusin', () => {
        birthMonthInput.parentElement.className = 'input__box__birth__checked';
    });
    birthMonthInput.addEventListener('focusout', () => {
        birthMonthInput.parentElement.className = 'input__box__birth';
    });

    const birthDayInput = document.getElementById('user_birth_day_input');
    birthDayInput.addEventListener('focusin', () => {
        birthDayInput.parentElement.className = 'input__box__birth__checked';
    });
    birthDayInput.addEventListener('focusout', () => {
        birthDayInput.parentElement.className = 'input__box__birth';
    });

    // gender
    document.getElementById('user_gender_select').addEventListener('focusin', () => {
        document.getElementById('user_gender_select').parentElement.className = 'input__box__checked';
    });
    document.getElementById('user_gender_select').addEventListener('focusout', () => {
        document.getElementById('user_gender_select').parentElement.className = 'input__box';
    });

    // user interest
    const userInterests = [];
    const interestInput = document.getElementById('user_interest_input');
    const interestTagDiv = document.getElementById('interest_tags');
    interestInput.addEventListener('keyup', () => {
        const target = interestInput.value;
        if (target[target.length-1] === ',') {
            const interestContainComma = interestInput.value;
            const interest = interestContainComma.substring(0, interestContainComma.length-1);
            userInterests.push(interest);
            // 쉽표만 입력됬을 경우 예외 처리
            if (interest === '' || interest[interest.length-1] === ',') {
                setTimeout(function(){
                    interestInput.value = '';
                }, 500);
            } else {
                interestInput.value = '';
                const interestTag = document.createElement('div');
                interestTag.classList.add('interest__tag');
                interestTag.textContent = `${interest}`;

                interestTag.style.height = '30px';
                interestTag.style.width = (interest.length * 15 + 30) + 'px';

                const tagCloseBtn = document.createElement('div');
                tagCloseBtn.classList.add('interest__tag__close__button');
                tagCloseBtn.textContent = 'x';
                interestTag.appendChild(tagCloseBtn);
                tagCloseBtn.addEventListener('click', (event) => {
                    const interestTag = event.target.parentNode;
                    interestTag.remove();
                    interestInput.focus();
                });
                interestTagDiv.appendChild(interestInput);
                interestTagDiv.insertBefore(interestTag, interestInput);
                interestInput.focus();
            }
        }
    });

    // interest tag delete, update function
    const interestTagsDiv = document.getElementById('interest_tags');
    interestInput.addEventListener('keydown', (event) => {
        if (event.key === "Backspace" && userInterests.length !== 0 && interestInput.value === '') {
            const interestTagsCount = interestTagsDiv.childElementCount;
            const interestTags = interestTagsDiv.childNodes;
            const interestTagToUpdate = interestTags[interestTagsCount];
            interestInput.value = interestTagToUpdate.textContent;
            interestTagToUpdate.remove();
        }
    });

    // // interest validation
    document.getElementById('user_interest_input').addEventListener('focusout', () => {
        const userInterestMsgDiv = document.getElementById('user_interest_msg');
        const interestTagsCount = interestTagsDiv.childElementCount;
        const validation_obj = validator.checkInterestCount(interestTagsCount);

        if (validation_obj === undefined) {
            userInterestMsgDiv.textContent = '';
        } else if (!validation_obj['result']) {
            console.log(`${validation_obj['error_obj']['status']}`);
            userInterestMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            userInterestMsgDiv.style.color = '#FF0000';
        }
        document.getElementById('user_phone_input').parentElement.className = 'input__box';
    });

    document.getElementById('user_interest_input').addEventListener('focusin', () => {
        const userInterestMsgDiv = document.getElementById('user_interest_msg');
        const interestTagsCount = interestTagsDiv.childElementCount;
        const validation_obj = validator.checkInterestCount(interestTagsCount);

        if (validation_obj === undefined) {
            userInterestMsgDiv.textContent = '';
        } else if (!validation_obj['result']) {
            console.log(`${validation_obj['error_obj']['status']}`);
            userInterestMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            userInterestMsgDiv.style.color = '#FF0000';
        }
        document.getElementById('user_phone_input').parentElement.className = 'input__box';
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
