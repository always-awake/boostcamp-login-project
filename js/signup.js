const ERROR = {
    NEW_ID_STRUCTURE_ERROR: {
        status: 'Wrong New User ID Structure Error',
        msg:'5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.'
    },
    NEW_ID_REDUPLICATION_ERROR: {
        status: 'Id Reduplication Error',
        msg: '이미 사용중이거나 탈퇴한 아이디입니다.'
    },
    PASSWORD_STRUCTURE_ERROR: {
        status: 'Wrong Password Structure Error',
        msg: '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.'
    },
    RE_PASSWORD_DISCORDANCE_ERROR: {
        status: 'Re-entered Password Discordance Error',
        msg: '비밀번호가 일치하지 않습니다.'
    },
    MISSING_REQUIRE_INFO_ERROR: {
        status: 'Missing Required Information Error',
        msg: '필수 정보입니다.'
    },
};

const checkUserIdValidation = (userId) => {
};

window.onload=function(){
    document.getElementById('user_id').addEventListener('focusout', () => {
        const requestUserId = document.getElementById('user_id').value;
        checkUserIdValidation(requestUserId)
    });
    document.getElementById('signup__button').addEventListener('click', () => {
    });
};
