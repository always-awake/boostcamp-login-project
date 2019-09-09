import validator from '../check/validators.js';

const setBirthEvent = () => {
    const birthYearInput = document.getElementById('user_birth_year_input');
    const birthMonthInput = document.getElementById('user_birth_month_input');
    const birthDayInput = document.getElementById('user_birth_day_input');
    const userBirthMsgDiv = document.getElementById('user_birth_msg');

    //year
    birthYearInput.addEventListener('focusin', () => {
        birthYearInput.parentElement.className = 'input__box__birth__checked';
    });
    birthYearInput.addEventListener('focusout', () => {
        birthYearInput.parentElement.className = 'input__box__birth';
        const requestUserBirthYear = birthYearInput.value;
        const validation_obj = validator.checkBirthYearValidation(requestUserBirthYear);
        if (validation_obj['result'] === true) {
            userBirthMsgDiv.textContent = '';
            birthMonthInput.disabled = false;
            birthDayInput.disabled = false;
        } else {
            userBirthMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            userBirthMsgDiv.style.color = `${validation_obj['error_obj']['msg_color']}`;
            birthMonthInput.disabled = true;
            birthDayInput.disabled = true;
        }
    });

    // month
    birthMonthInput.addEventListener('focusin', () => {
        birthMonthInput.parentElement.className = 'input__box__birth__checked';
        if (birthYearInput.value === '') {
            const validation_obj = validator.checkBirthYearValidation('');
            userBirthMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            userBirthMsgDiv.style.color = `${validation_obj['error_obj']['msg_color']}`;
        }
    });
    birthMonthInput.addEventListener('focusout', () => {
        birthMonthInput.parentElement.className = 'input__box__birth';
        if (birthYearInput.value !== '') userBirthMsgDiv.textContent = '';
    });

    // day
    birthDayInput.addEventListener('focusin', () => {
        birthDayInput.parentElement.className = 'input__box__birth__checked';
        if (birthYearInput.value === '') {
            const validation_obj = validator.checkBirthYearValidation('');
            userBirthMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            userBirthMsgDiv.style.color = `${validation_obj['error_obj']['msg_color']}`;
        }
    });
    birthDayInput.addEventListener('focusout', () => {
        birthDayInput.parentElement.className = 'input__box__birth';
        const validation_obj = validator.checkBirthDayValidation(
            birthYearInput.value,
            birthYearInput.value,
            birthDayInput.value,
        );
        if (validation_obj['result'] === true) {
            userBirthMsgDiv.textContent = '';
        } else {
            userBirthMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
            userBirthMsgDiv.style.color = `${validation_obj['error_obj']['msg_color']}`;
        }
    });
};

export {
    setBirthEvent
}