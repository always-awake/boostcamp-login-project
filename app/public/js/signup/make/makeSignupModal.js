const makeSignupModal = (modalText) => {
    const signupTextDiv = document.getElementById('signup_modal_text');
    signupTextDiv.innerHTML = modalText;
};

export {
    makeSignupModal,
}