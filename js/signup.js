import validator from './validators.js';

window.onload = function() {
    // id validation
    document.getElementById('user_id_input').addEventListener('focusout', () => {
        const requestUserId = document.getElementById('user_id_input').value;
        const userIdMsgDiv = document.getElementById('user_id_msg');
        const validation_obj = validator.checkIdValidation(requestUserId);

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
        const validation_obj = validator.checkPwValidation(requestUserPw);

        if (validation_obj['result']) {
            console.log(`${validation_obj['pass_obj']['status']}`);
            userPwMsgDiv .textContent = `${validation_obj['pass_obj']['msg']}`;
        } else {
            console.log(`${validation_obj['error_obj']['status']}`);
            userPwMsgDiv .textContent = `${validation_obj['error_obj']['msg']}`;
        }
    });

    // check old, new password sameness
    document.getElementById('user_re_pw_input').addEventListener('focusout', () => {
        const userRePwMsgDiv = document.getElementById('user_re_password_msg');
        const userOldPw = document.getElementById('user_pw_input').value;
        const userNewPw = document.getElementById('user_re_pw_input').value;
        const validation_obj = validator.checkPwSameness(userOldPw, userNewPw);

        if (validation_obj['result']) {
            console.log(`${validation_obj['pass_obj']['status']}`);
            userRePwMsgDiv.textContent = `${validation_obj['pass_obj']['msg']}`;
        } else {
            console.log(`${validation_obj['error_obj']['status']}`);
            userRePwMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
        }
    });

    // email validation
    document.getElementById('user_email_input').addEventListener('focusout', () => {

        const requestUserEmail = document.getElementById('user_email_input').value;
        const userEmailMsgDiv = document.getElementById('user_email_msg');
        const validation_obj = validator.checkEmailValidation(requestUserEmail);
        console.log(validation_obj)

        if (validation_obj === undefined) {
            userEmailMsgDiv.textContent = '';
        } else if (!validation_obj['result']) {
            console.log(`${validation_obj['error_obj']['status']}`);
            userEmailMsgDiv.textContent = `${validation_obj['error_obj']['msg']}`;
        }
    });

};
