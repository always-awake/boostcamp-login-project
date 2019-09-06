import {ID_DUPLICATION_CHECK_URL} from './utils.js';
import {ERROR} from './utils.js';


const checkDuplication = (idInputDiv) => {
    const idInputValue = idInputDiv.value;
    const idMsgDiv = document.getElementById('user_id_msg');
    fetch(`${ID_DUPLICATION_CHECK_URL}/${idInputValue}`)
        .then(res => res.json())
        .then((res) => {
            console.log('Success: ', res);
            console.log(res['duplication']);
            if (res['duplication']) {
                idMsgDiv.textContent = `${ERROR['ID_DUPLICATION_ERROR']['msg']}`;
                idMsgDiv.style.color = ERROR['ID_DUPLICATION_ERROR']['msg_color'];
            }
        })
        .catch(err => console.error('Error: ', err));
};



export {
    checkDuplication
}