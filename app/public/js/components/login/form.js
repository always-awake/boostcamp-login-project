const loginForm = () => {
    return `<div class="wrapper fadeInDown zero-raduis">
                <div id="formContent">
                    <div class="fadeIn first">
                        <h2 class="my-5">Log In</h2>
                    </div>
                    <form>
                        <input type="text" id="login_id" class="fadeIn second zero-raduis" placeholder="아이디">
                        <input type="text" id="login_pw" class="fadeIn third zero-raduis" name="login" placeholder="비밀번호">
                        <div id="formFooter">
                        </div>
                        <input type="button" class="fadeIn fourth zero-raduis pc" value="login" id="login_btn">
                        <h2>You don't have a account ?</h2>
                        <input type="button" class="fadeIn fourth zero-raduis pc" value="register" id="register_btn">
                    </form>
                </div>
           </div>`
};

export {
    loginForm,
}