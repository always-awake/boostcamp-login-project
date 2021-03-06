import {ERROR, ID_DUPLICATION_CHECK_URL} from '../utils.js';


const checkDuplication = (idInputDiv) => {
    const idInputValue = idInputDiv.value;
    const idMsgDiv = document.getElementById('user_id_msg');
    fetch(`${ID_DUPLICATION_CHECK_URL}/${idInputValue}`)
        .then(res => res.json())
        .then((res) => {
            console.log('Success: ', res);
            if (res['duplication']) {
                idMsgDiv.textContent = `${ERROR['ID_DUPLICATION_ERROR']['msg']}`;
                idMsgDiv.style.color = ERROR['ID_DUPLICATION_ERROR']['msg_color'];
            }
        })
        .catch(err => console.error('Error: ', err));
};

const checkDuplicationSimple = async (id) => {
    const result = await fetch(`${ID_DUPLICATION_CHECK_URL}/${id}`)
    const data = await result.json();
    return !(data['duplication'])
};



export {
    checkDuplication,
    checkDuplicationSimple
}