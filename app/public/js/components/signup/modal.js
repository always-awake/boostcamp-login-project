import { CONTRACT } from '../../signup/utils.js';


const contractModal = () => {
    return `<div class="contract__modal" id="contract_modal">
                <div class="contract__modal__body">
                    <div class="contract__modal__close" id="contract_modal_close_btn">x</div>
                    <div class="contract__modal__content">
                    <div class="contract__content__title">개인정보 수집 및 이용에 대한 안내</div>
                        <div class="contract__content__text" id="contract_text">
                        ${CONTRACT['text']}
                        </div>
                        <button class="contract__modal__agree__button" id="contract_modal_agree_btn" type="button">동의</button>
                    </div>
                </div>
            </div>`;
};

const resetModal = () => {
    return `<div class="reload__modal" id="reload_modal">
                <div class="reload__modal__content">
                    <div class="reload__modal__message" id="reload_modal_msg">
                        정말 모든 내용을 새로 작성하시겠습니까?
                    </div>
                    <div class="reload__modal__buttons">
                        <button class="reload__modal__ok__button" id="reload_modal_ok_btn">확인</button>
                        <button class="reload__modal__cancel__button" id="reload_modal_cancel_btn">취소</button>
                    </div>
                </div>
            </div>`
};

const signupModal = () => {
    return `<div class="signup__modal" id="signup_modal">
                <div class="signup__modal__content">
                    <div class="signup__modal__title">아래의 항목들을 입력해주세요.</div>
                    <div class="signup__modal__text" id="signup_modal_text">
                    </div>
                    <div class="signup__modal__buttons">
                        <button class="signup__modal__ok__button" id="signup_modal_ok_btn">확인</button>
                    </div>
                </div>
            </div>`
};

export {
    contractModal,
    resetModal,
    signupModal,
}