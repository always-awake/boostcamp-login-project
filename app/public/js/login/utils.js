const ERROR = {
    WRONG_ID_OR_PW_ERROR: {
        status: 'Entered Wrong ID or Password',
        msg: '아이디 또는 비밀번호를 다시 확인하세요. <br>등록되지 않은 아이디이거나, 아이디 또는 비밀번호를 잘못 입력하셨습니다.',
        msg_color: '#FF0000',
    },
    EMPTY_ID_INPUT_ERROR: {
        status: 'Please Enter ID.',
        msg: '아이디를 입력해주세요.',
        msg_color: '#FF0000',
    },
    EMPTY_PW_INPUT_ERROR: {
        status: 'Please Enter PW.',
        msg: '비밀번호를 입력해주세요.',
        msg_color: '#FF0000',
    }
};

const loginRequest = (id, pw) => {
    return {
        id: id,
        pw: pw,
    }
};

const LOGIN_URL = 'http://localhost:3000/users/login';

export {
    ERROR,
    loginRequest,
    LOGIN_URL
}