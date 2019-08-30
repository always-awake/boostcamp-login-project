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

export default {
    checkIdValidation,
    checkPwValidation,
    checkPwSameness

}