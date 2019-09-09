const logoutModal = () => {
    return `<div class="logout__modal" id="logout_modal">
                <div class="logout__modal__content">
                    <div class="logout__modal__message" id="logout_modal_msg">
                        정상적으로 로그아웃됬습니다. 
                    </div>
                    <button class="logout__modal__ok__button" id="logout_modal_ok_btn">확인</button>
                </div>
            </div>`
};

export {
    logoutModal,
}