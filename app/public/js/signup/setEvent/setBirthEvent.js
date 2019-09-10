import validator from '../check/validators.js';

/**
 * 회원가입 폼의 생년월일(연도, 월, 일) Input 박스(div)의 이벤트를 추가하는 함수
 */
const setBirthEvent = () => {
    const birthYearInput = document.getElementById('user_birth_year_input');
    const birthMonthInput = document.getElementById('user_birth_month_input');
    const birthDayInput = document.getElementById('user_birth_day_input');
    const userBirthMsgDiv = document.getElementById('user_birth_msg');

    setBirthYearEvent(birthYearInput, birthMonthInput, birthDayInput, userBirthMsgDiv);
    setBirthMonthEvent(birthYearInput, birthMonthInput, birthDayInput, userBirthMsgDiv);
    setBirthDayEvent(birthYearInput, birthMonthInput, birthDayInput, userBirthMsgDiv);
};

/**
 * 회원가입 폼의 연도(생년월일) Input 박스(div)의 이벤를 추가하는 함수
 *
 * @param birthYearInput
 * @param birthMonthInput
 * @param birthDayInput
 * @param userBirthMsgDiv
 */
const setBirthYearEvent = (birthYearInput, birthMonthInput, birthDayInput, userBirthMsgDiv) => {
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
};

/**
 * 회원가입 폼의 달(생년월일) Input 박스(div)의 이벤를 추가하는 함수
 *
 * @param birthYearInput
 * @param birthMonthInput
 * @param birthDayInput
 * @param userBirthMsgDiv
 */
const setBirthMonthEvent = (birthYearInput, birthMonthInput, birthDayInput, userBirthMsgDiv) => {
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
};

/**
 * 회원가입 폼의 일(생년월일) Input 박스(div)의 이벤를 추가하는 함수
 *
 * @param birthYearInput
 * @param birthMonthInput
 * @param birthDayInput
 * @param userBirthMsgDiv
 */
const setBirthDayEvent = (birthYearInput, birthMonthInput, birthDayInput, userBirthMsgDiv) => {
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