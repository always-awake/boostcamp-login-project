import { ERROR, PASS, REG_EXR } from './utils.js';


const checkIdValidation = (id) => {
    const idCheckResult = REG_EXR['ID_CHECK'].test(id);
    if (!idCheckResult) {
        return {
            result: false,
            error_obj: ERROR['NEW_ID_STRUCTURE_ERROR']
        }
    } else {
        return {
            result: true,
            pass_obj: PASS['ID_VALID']
        }
    }
};

const checkPwValidation = (pw) => {
    const pwCheckResult = REG_EXR['PASSWORD_CHECK'].test(pw);
    if (!pwCheckResult) {
        return {
            result: false,
            error_obj: ERROR['PASSWORD_STRUCTURE_ERROR']
        }
    } else {
        return {
            result:true,
            pass_obj: PASS['PASSWORD_VALID']
        }
    }
};

window.onload = () => {
    // id validation
    document.getElementById('user_id_input').addEventListener('focusout', () => {
        const requestUserId = document.getElementById('user_id_input').value;
        const userIdMsgDiv = document.getElementById('user_id_msg');
        const validation_obj = checkIdValidation(requestUserId);

        if (validation_obj['result']) {
            console.log(`${validation_obj['pass_obj']['status']}`);
            userIdMsgDiv.textContent = `${validation_obj['pass_obj']['msg']}`;
        } else {
            console.log(`${validation_obj['error_obj']['status']}`);
            userIdMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
        }
    });

    // password validation
    document.getElementById('user_pw_input').addEventListener('focusout', () => {
        const requestUserPw = document.getElementById('user_pw_input').value;
        const userPwMsgDiv = document.getElementById('user_password_msg');
        const validation_obj = checkPwValidation(requestUserPw);

        if (validation_obj['result']) {
            console.log(`${validation_obj['pass_obj']['status']}`);
            userPwMsgDiv .textContent = `${validation_obj['pass_obj']['msg']}`;
        } else {
            console.log(`${validation_obj['error_obj']['status']}`);
            userPwMsgDiv .textContent = `${validation_obj['error_obj']['msg']}`;
        }
    });

    document.getElementById('signup__button').addEventListener('click', () => {
    });
};


function addRow() {



}

function removeRow(input) {
    document.getElementById('content').removeChild(input.parentNode);
}