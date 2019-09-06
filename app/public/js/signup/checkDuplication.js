import {ID_DUPLICATION_CHECK_URL} from './utils.js';


const checkDuplication = (idInputDiv) => {
    const idInputValue = idInputDiv.value;
    const idMsgDiv = document.getElementById('user_id_msg');
    fetch(`${ID_DUPLICATION_CHECK_URL}/${idInputValue}`)
        .then(res => res.json())
        .then(res => console.log('Success: ', res))
        .then(() => {
            console.log('중복체크완료');
        })
        .catch(err => console.error('Error: ', err))
};






export {
    checkDuplication
}