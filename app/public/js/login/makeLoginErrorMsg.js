import {ERROR} from './utils.js';

const makeLoginErrorMsg = () => {
    const loginErrorMsgDiv = document.getElementById('formFooter');
    loginErrorMsgDiv.innerHTML = ERROR['WRONG_ID_OR_PW_ERROR']['msg'];
    loginErrorMsgDiv.style.color = ERROR['WRONG_ID_OR_PW_ERROR']['msg_color'];
};

export {
    makeLoginErrorMsg,
};