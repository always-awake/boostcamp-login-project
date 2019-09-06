import { ERROR, PASS, REG_EXR } from './utils.js';

const checkIdValidation = (id) => {
    const idCheckResult = REG_EXR['ID_CHECK'].test(id);

    if (id === '') {
        return {
            result: null,
            error_obj: ERROR['MISSING_REQUIRE_INFO_ERROR']
        }
    }

    if (!idCheckResult) {
        return {
            result: false,
            error_obj: ERROR['NEW_ID_STRUCTURE_ERROR']
        }
    } else if (idCheckResult) {
        return {
            result: true,
            pass_obj: PASS['ID_VALID']
        }
    }
};

const checkPwValidation = (pw) => {
    const pwCheckResult = REG_EXR['PASSWORD_CHECK'].test(pw);

    if (pw === '') {
        return {
            result: null,
            error_obj: ERROR['MISSING_REQUIRE_INFO_ERROR']
        }
    }

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

    if (newPw === '') {
        return {
            result: null,
            error_obj: ERROR['MISSING_REQUIRE_INFO_ERROR']
        }
    }

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

    if (email === '') {
        return {
            result: null,
            error_obj: ERROR['MISSING_REQUIRE_INFO_ERROR']
        }
    }

    if (!emailCheckResult) {
        return {
            result: false,
            error_obj: ERROR['EMAIL_STRUCTURE_ERROR']
        }
    } else {
        return {
            result: true,
        }
    }
};

const checkPhoneValidation = (phone) => {
    const phoneCheckResult = REG_EXR['PHONE_CHECK'].test(phone);

    if (phone === '') {
        return {
            result: null,
            error_obj: ERROR['MISSING_REQUIRE_INFO_ERROR']
        }
    }

    if (!phoneCheckResult) {
        return {
            result: false,
            error_obj: ERROR['PHONE_STRUCTURE_ERROR']
        }
    } else {
        return {
            result: true,
        }
    }
};

const checkInterestCount = (interests) => {
    if (interests < 4) {
        return {
            result: false,
            error_obj: ERROR['INTEREST_COUNT_ERROR']
        }
    } else {
        return {
            result: true,
        }
    }
};

const checkBirthYearValidation = (year) => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const possibleYoung = currentYear - 14;
    const possibleOld = currentYear - 98;

    if (possibleYoung < year) {
        return {
            result: 'restrict_error',
            error_obj: ERROR['BIRTH_YEAR_RESTRICT_ERROR']
        }
    } else if (year < possibleOld || year.length !== 4) {
        return {
            result: 'structure_error',
            error_obj: ERROR['BIRTH_YEAR_STRUCTURE_ERROR']
        }
    } else {
        return {
            result: true
        }
    }
};

const checkBirthDayValidation = (year, month, day) => {
    const possibleLastDay = new Date(year, month, 0).getDate();
    if (day < 1 || day > possibleLastDay || month === 'birth_month_default') {
        return {
            result: false,
            error_obj: ERROR['BIRTH_MONTH_DAY_STRUCTURE_ERROR']
        }
    } else {
        return {
            result: true
        }
    }
};


export default {
    checkIdValidation,
    checkPwValidation,
    checkPwSameness,
    checkEmailValidation,
    checkPhoneValidation,
    checkInterestCount,
    checkBirthYearValidation,
    checkBirthDayValidation
}