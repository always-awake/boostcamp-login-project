import {
    checkIdValidation,
    checkPwValidation,
    checkRePwSameness,
    checkEmailValidation,
    checkPhoneValidation,
} from './checkValidation.js';

import validator from './validators.js';
import {makeSignUpHTML} from './makeSignupHtml.js';


const setSignUpEvent = () => {
    setIdEvent();
    setPwEvent();
    setRePwEvent();
    setNameEvent();
    setGenderEvent();
    setEmailEvent();
    setPhoneEvent();
    setContractEvent();
    setREloadButton();


    // birth
    const birthYearInput = document.getElementById('user_birth_year_input');
    const birthMonthInput = document.getElementById('user_birth_month_input');
    const birthDayInput = document.getElementById('user_birth_day_input');
    const userBirthMsgDiv = document.getElementById('user_birth_msg');

    birthYearInput.addEventListener('focusin', () => {
        birthYearInput.parentElement.className = 'input__box__birth__checked';
    });
    birthYearInput.addEventListener('focusout', () => {
        const requestUserBirthYear = birthYearInput.value;
        const validation_obj = validator.checkBirthYearValidation(requestUserBirthYear);
        if (validation_obj === undefined) {
            userBirthMsgDiv.textContent = '';
            birthMonthInput.disabled = false;
            birthDayInput.disabled = false;
        } else if (validation_obj['result'] === 'structure_error'){
            console.log(`${validation_obj['error_obj']['status']}`);
            userBirthMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            birthMonthInput.disabled = true;
            birthDayInput.disabled = true;
            userBirthMsgDiv.style.color = '#FF0000';
        } else if (validation_obj['result'] === 'restrict_error') {
            console.log(`${validation_obj['error_obj']['status']}`);
            userBirthMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            userBirthMsgDiv.style.color = '#FF0000';
            birthMonthInput.disabled = true;
            birthDayInput.disabled = true;
        }
        birthYearInput.parentElement.className = 'input__box__birth';
    });

    // month
    birthMonthInput.addEventListener('focusin', () => {
        birthMonthInput.parentElement.className = 'input__box__birth__checked';
        if (birthYearInput.value === '') {
            const validation_obj = validator.checkBirthYearValidation('');
            console.log(`${validation_obj['error_obj']['status']}`);
            userBirthMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            userBirthMsgDiv.style.color = '#FF0000';
        }
    });
    birthMonthInput.addEventListener('focusout', () => {
        birthMonthInput.parentElement.className = 'input__box__birth';
    });

    // day
    birthDayInput.addEventListener('focusin', () => {
        if (birthYearInput.value === '') {
            const validation_obj = validator.checkBirthYearValidation('');
            console.log(`${validation_obj['error_obj']['status']}`);
            userBirthMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            userBirthMsgDiv.style.color = '#FF0000';
        }
        birthDayInput.parentElement.className = 'input__box__birth__checked';
    });
    birthDayInput.addEventListener('focusout', () => {
        const requestUserBirthYear = birthYearInput.value;
        const requestUserBirthMonth = birthMonthInput.value;
        const requestUserBirthDay = birthDayInput.value;
        const validation_obj = validator.checkBirthDayValidation(
            requestUserBirthYear,
            requestUserBirthMonth,
            requestUserBirthDay,
        );
        if (validation_obj === undefined) {
            userBirthMsgDiv.textContent = '';
        } else if (!validation_obj['result']) {
            console.log(`${validation_obj['error_obj']['status']}`);
            userBirthMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            userBirthMsgDiv.style.color = '#FF0000';
        }
        birthDayInput.parentElement.className = 'input__box__birth';
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
                interestTag.textContent = `${interest.trim()}`;

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
    document.getElementById('user_interest_input').addEventListener('focusin', () => {
        document.getElementById('user_interest_input').parentElement.parentElement.className = 'input__box__interest__checked';
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
    });

    document.getElementById('user_interest_input').addEventListener('focusout', () => {
        document.getElementById('user_interest_input').parentElement.parentElement.className = 'input__box__interest';
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
    });


};





// setting
const setIdEvent = () => {
    const idInputDiv = document.getElementById('user_id_input');

    idInputDiv.addEventListener('focusin', () => {
        idInputDiv.parentElement.className = 'input__box__checked';
    });
    idInputDiv.addEventListener('focusout', () => {
        checkIdValidation(idInputDiv);
        idInputDiv.parentElement.className = 'input__box';
    });
};

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

const setNameEvent = () => {
    const nameInputDiv = document.getElementById('user_name_input');
    nameInputDiv.addEventListener('focusin', () => {
        nameInputDiv.parentElement.className = 'input__box__checked';
    });
    nameInputDiv.addEventListener('focusout', () => {
        nameInputDiv.parentElement.className = 'input__box';
    });
};

const setGenderEvent = () => {
    const genderInputDiv = document.getElementById('user_gender_select');
    genderInputDiv.addEventListener('focusin', () => {
        genderInputDiv.parentElement.className = 'input__box__checked';
    });
    genderInputDiv.addEventListener('focusout', () => {
        genderInputDiv.parentElement.className = 'input__box';
    });
};

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

const setContractEvent = () => {
    const contractCheckbox = document.getElementById('user_contract_checkbox');
    const contractModal = document.getElementById('contract_modal');
    const contractCloseBtn = document.getElementById('contract_modal_close_btn');
    const contractText = document.getElementById('contract_text');
    const contractAgreeBtn = document.getElementById('contract_modal_agree_btn');

    contractCheckbox .addEventListener('click', () => {
        contractCheckbox.checked = false;
        contractModal.style.display = 'block';
    });
    contractCloseBtn .addEventListener('click', () => {
        contractModal.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target === contractModal) contractModal.style.display = 'none';
    });
    contractText.addEventListener('scroll', (event) => {
        const contractText = event.target;
        if (contractText.scrollHeight - contractText.scrollTop === contractText.clientHeight) {
            contractAgreeBtn.disabled = false;
            contractAgreeBtn.className = 'contract__agree__button__activate';
        }
    });
    contractAgreeBtn.disabled = true;
    contractAgreeBtn.addEventListener('click', () => {
        contractModal.style.display = 'none';
        contractCheckbox.checked = true;
        contractCheckbox.disabled = true;
    })
};

const setREloadButton = () => {
    // 초기화
    const reloadButton =  document.getElementById('signup_reload_button');
    const reloadModalOkButton = document.getElementById('reload_modal_ok_btn');
    const reloadModalCancelButton = document.getElementById('reload_modal_cancel_btn');
    const reloadModal = document.getElementById('reload_modal');
    reloadButton.addEventListener('click', () => {
        reloadModal.style.display = 'block';
    });
    reloadModalOkButton.addEventListener('click', () => {
        // window.location.reload();
        // history.go(0);
        makeSignUpHTML();
        window.scrollTo(0, 0);
    });
    reloadModalCancelButton.addEventListener('click', () => {
        reloadModal.style.display = 'none';
    });
};



export {
    setSignUpEvent,
};