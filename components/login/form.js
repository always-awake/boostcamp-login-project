const loginForm = () => {
    return `<div class="wrapper fadeInDown zero-raduis">
  \t  <div id="formContent">
  \t    <div class="fadeIn first">
  \t      <!-- <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" /> -->
  \t      <h2 class="my-5">Log In</h2>
  \t    </div>

  \t    <!-- Login Form -->
  \t    <form>
  \t      <input type="text" id="id" class="fadeIn second zero-raduis" placeholder="아이디">
  \t      <input type="text" id="password" class="fadeIn third zero-raduis" name="login" placeholder="비밀번호">
\t\t      <div id="formFooter">
  \t      \t<a class="underlineHover" href="#">Forgot Password?</a>
  \t      </div>
  \t      <input type="submit" class="fadeIn fourth zero-raduis" value="login">
  \t      <h2>You don't have a account ?</h2>
  \t      <input type="button" class="fadeIn fourth zero-raduis pc" value="register">
  \t    </form>
  \t    

  \t  </div>
  </div>`
};

export {
    loginForm,
}