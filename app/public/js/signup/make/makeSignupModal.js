/**
 * 가입하기 버튼을 클릭하면 생성되는 모달을 설정하는 함수
 * @param modalText
 */
const makeSignupModal = (modalText) => {
    const signupTextDiv = document.getElementById('signup_modal_text');
    signupTextDiv.innerHTML = modalText;
};

export {
    makeSignupModal,
}