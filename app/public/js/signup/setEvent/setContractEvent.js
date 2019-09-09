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