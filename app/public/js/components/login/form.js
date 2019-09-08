const loginForm = () => {
    return `<div class="wrapper fadeInDown zero-raduis">
                <div id="formContent">
                    <div class="fadeIn first">
                        <h2 class="my-5 login__title">로그인</h2>
                    </div>
                    <form>
                        <input type="text" id="login_id" class="fadeIn second zero-raduis" placeholder="아이디">
                        <input type="text" id="login_pw" class="fadeIn third zero-raduis" name="login" placeholder="비밀번호">
                        <div id="formFooter">
                        </div>
                        <input type="button" class="fadeIn fourth zero-raduis" value="로그인" id="login_btn">
                        <div class="fadeIn first" id="login_line"></div>
                        <div class="fadeIn first" id="signup__text">회원이 아니신가요 ?</div>
                        <input type="button" class="fadeIn fourth zero-raduis" value="회원가입" id="register_btn">
                        <div class="login__find__buttons">
                        <div class="find__id__button">아이디 찾기</div>
                        <div class="find__vertical__line"> | </div>
                        <div class="find__pw__button">비밀번호 찾기</div>
                        </div>
                    </form>
                </div>
           </div>`
};

export {
    loginForm,
}