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

const checkPwSameness = (oldPw, newPw) => {
    if (oldPw !== newPw) {
        return {
            result: false,
            error_obj: ERROR['RE_PASSWORD_DIFFERENT_ERROR']
        }
    } else {
        return {
            result: true,
            pass_obj: PASS['RE_PASSWORD_SAME'],
        }
    }
};

const checkEmailValidation = (email) => {
    const emailCheckResult = REG_EXR['EMAIL_CHECK'].test(email);
    if (!emailCheckResult) {
        return {
            result: false,
            error_obj: ERROR['EMAIL_STRUCTURE_ERROR']
        }
    }
};

const checkPhoneValidation = (phone) => {
    const phoneCheckResult = REG_EXR['PHONE_CHECK'].test(phone);
    if (!phoneCheckResult) {
        return {
            result: false,
            error_obj: ERROR['PHONE_STRUCTURE_ERROR']
        }
    }
};

export default {
    checkIdValidation,
    checkPwValidation,
    checkPwSameness,
    checkEmailValidation,
    checkPhoneValidation
}