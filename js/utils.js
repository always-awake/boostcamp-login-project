const ERROR = {
    NEW_ID_STRUCTURE_ERROR: {
        status: 'Wrong New User ID Structure Error',
        msg: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
        msg_color: '#FF0000',
    },
    NEW_ID_REDUPLICATION_ERROR: {
        status: 'Id Reduplication Error',
        msg: '이미 사용중이거나 탈퇴한 아이디입니다.',
        msg_color: '#FF0000'
    },
    PASSWORD_STRUCTURE_ERROR: {
        status: 'Wrong Password Structure Error',
        msg: '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
        msg_color: '#FF0000'
    },
    RE_PASSWORD_DIFFERENT_ERROR: {
        status: 'Re-entered Password Different Error',
        msg: '비밀번호가 일치하지 않습니다.',
        msg_color: '#FF0000'
    },
    MISSING_REQUIRE_INFO_ERROR: {
        status: 'Missing Required Information Error',
        msg: '필수 정보입니다.',
        msg_color: '#FF0000'
    },
    BIRTH_YEAR_STRUCTURE_ERROR: {
      status: 'Wrong Birth Year Structure Error (four-digit number)',
      msg: '태어난 년도 4자리를 정확하게 입력하세요.',
        msg_color: '#FF0000'
    },
    BIRTH_YEAR_RESTRICT_ERROR: {
      status:'Should Older Than 15',
      msg: '만 14세 미만의 어린이는 보호자 동의가 필요합니다.',
        msg_color: '#FF0000'
    },
    BIRTH_MONTH_DAY_STRUCTURE_ERROR: {
        status: 'Wrong Birth Month Or Day Structure Error',
        msg: '생년월일을 다시 확인해주세요.',
        msg_color: '#FF0000'
    },
    EMAIL_STRUCTURE_ERROR: {
        status: 'Wrong Email Structure Error (ex: check "@")',
        msg: '이메일 주소를 다시 확인해주세요.',
        msg_color: '#FF0000'
    },
    PHONE_STRUCTURE_ERROR: {
        status: 'Wrong Phone Numner Structure Error (10 or 11 digit number, start with 010)',
        msg: '형식에 맞지 않는 번호입니다.',
        msg_color: '#FF0000'
    },
    INTEREST_COUNT_ERROR: {
        status: 'Wrong Interest Count Error (More 3 interest)',
        msg: '3개 이상의 관심사를 입력하세요.',
        msg_color: '#FF0000'
    }
};

const PASS = {
    ID_VALID: {
        status: 'Valid Id',
        msg: '멋진 아이디네요!',
        msg_color: '#09A600'
    },
    PASSWORD_VALID: {
        status: 'Safe Password',
        msg: '안전한 비밀번호입니다.',
        msg_color: '#09A600'
    },
    RE_PASSWORD_SAME: {
        status: 'Same Password',
        msg: '비밀번호가 일치합니다.',
        msg_color: '#09A600'
    },
};

const REG_EXR = {
    ID_CHECK: /^[0-9a-zA-z_-]{5,20}$/,
    PASSWORD_CHECK: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*+=_~-]).{8,16}$/,
    EMAIL_CHECK: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
    PHONE_CHECK: /^(^010)([0-9]{7,8})$/,
};

export {
    ERROR,
    PASS,
    REG_EXR
};