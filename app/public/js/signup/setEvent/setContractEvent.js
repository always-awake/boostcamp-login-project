/**
 * 회원가입 폼의 약관 동의와 관련된 이벤트를 설정하는 함수
 * 약관 동의 체크박스 이벤트와 체크박스를 클릭했을 때 생성되는 모달 창에 대한 이벤트를 모두 설정하는 함수이다.
 */
const setContractEvent = () => {
    const contractCheckbox = document.getElementById('user_contract_checkbox');
    const contractModal = document.getElementById('contract_modal');
    const contractCloseBtn = document.getElementById('contract_modal_close_btn');
    const contractText = document.getElementById('contract_text');
    const contractAgreeBtn = document.getElementById('contract_modal_agree_btn');

    contractCheckbox .addEventListener('click', () => {
        contractCheckbox.checked = false;
        contractModal.style.display = 'block';
    });
    contractCloseBtn .addEventListener('click', () => {
        contractModal.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target === contractModal) contractModal.style.display = 'none';
    });
    contractText.addEventListener('scroll', (event) => {
        const contractText = event.target;
        if (contractText.scrollHeight - contractText.scrollTop === contractText.clientHeight) {
            contractAgreeBtn.disabled = false;
            contractAgreeBtn.className = 'contract__modal__agree__button__activate ';
        }
    });
    contractAgreeBtn.disabled = true;
    contractAgreeBtn.addEventListener('click', () => {
        contractModal.style.display = 'none';
        contractCheckbox.checked = true;
        contractCheckbox.disabled = true;
    })
};

export {
    setContractEvent
}