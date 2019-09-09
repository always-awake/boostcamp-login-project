import {ERROR} from './utils.js';

const makeLoginErrorMsg = () => {
    const loginErrorMsgDiv = document.getElementById('formFooter');
    loginErrorMsgDiv.innerHTML = ERROR['WRONG_ID_OR_PW_ERROR']['msg'];
    loginErrorMsgDiv.style.color = ERROR['WRONG_ID_OR_PW_ERROR']['msg_color'];
};

const requestIdInput = () => {
    const idInputErrorMsgDiv = document.getElementById('id_error_msg');
    idInputErrorMsgDiv.innerHTML = ERROR['EMPTY_ID_INPUT_ERROR']['msg'];
    idInputErrorMsgDiv.style.color = ERROR['EMPTY_ID_INPUT_ERROR']['msg_color'];

};

const requestPwInput = () => {
    const pwInputErrorMsgDiv = document.getElementById('formFooter');
    pwInputErrorMsgDiv.innerHTML = ERROR['EMPTY_PW_INPUT_ERROR']['msg'];
    pwInputErrorMsgDiv.style.color = ERROR['EMPTY_PW_INPUT_ERROR']['msg_color'];

};

export {
    makeLoginErrorMsg,
    requestIdInput,
    requestPwInput
};