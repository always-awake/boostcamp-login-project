import { contractModal, resetModal, signupModal } from './modal.js';

const birthInput = () => {
    return `<div class="signup__form__input" id="user_birth_input_box">
                <div class="input__name">생년월일</div>
                <div class="input__birth">
                    <div class="input__box__birth">
                        <input class="input__tag__birth user__info__birth" id="user_birth_year_input" type="text" placeholder="년(4자)"/>
                    </div>
                    <div class="input__box__birth">
                        <select class="birth__month user__info__birth"  id="user_birth_month_input">
                            <option value="birth_month_default">월</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </div>
                    <div class="input__box__birth" >
                        <input class="input__tag__birth user__info__birth" id="user_birth_day_input" type="text" name="day" placeholder="일"/>
                    </div>
                </div>
                <div class ="validation__message" id="user_birth_msg"></div>
            </div>`
};

const interestInput = () => {
  return `<div class="signup__form__input" id="user_interests_input_box">
            <div class="input__name">관심사</div>
                <div class="input__box__interest" id="input_box_interests">
                    <div class="interest__tags" id="interest_tags">
                        <input class="input__tag__interest" id="user_interest_input" type="text" />
                    </div>
                </div>
            <div class ="validation__message" id="user_interest_msg"></div>
        </div>`
};

const signupForm = () => {
    return `<section class="signup__section">
        <div class="signup__form">
            <div class="signup__form__input" id="user_id_input_box">
                <div class="input__name">아이디</div>
                <div class="input__box">
                    <input class="input__tag user__info" id="user_id_input" type="text" maxlength="20" />
                </div>
                <div class ="validation__message" id="user_id_msg"></div>
            </div>
            <div class="signup__form__input" id="user_pw_input_box">
                <div class="input__name">비밀번호</div>
                <div class="input__box">
                    <input class="input__tag user__info" id="user_pw_input" type="text" />
                </div>
                <div class ="validation__message" id="user_password_msg"></div>
            </div>
            <div class="signup__form__input" id="user_re_pw_input_box">
                <div class="input__name">비밀번호 재확인</div>
                <div class="input__box">
                    <input class="input__tag user__info" id="user_re_pw_input" type="text" />
                </div>
                <div class ="validation__message" id="user_re_password_msg"></div>
            </div>
            <div class="signup__form__input">
                <div class="input__name">이름</div>
                <div class="input__box">
                    <input class="input__tag user__info" id="user_name_input" type="text" />
                </div>
                <div class ="validation__message" id="user_name_msg"></div>
            </div>
               ${birthInput()}
            <div class="signup__form__input" id="user_gender_input_box">
                <div class="input__name">성별</div>
                <div class="input__box">
                    <select class="input__gender user__info" id="user_gender_select">
                        <option value selected value="default">성별</option>
                        <option value="boy">남자</option>
                        <option value="girl">여자</option>
                    </select>
                </div>
                <div class ="validation__message" id="user_gener_msg"></div>
            </div>
            <div class="signup__form__input" id="user_email_input_box">
                <div class="input__name">이메일</div>
                <div class="input__box">
                    <input class="input__tag user__info" id="user_email_input" type="text" />
                </div>
                <div class ="validation__message" id="user_email_msg"></div>
            </div>
            <div class="signup__form__input" id="user_phone_input_box">
                <div class="input__name">휴대전화</div>
                <div class="input__box">
                    <input class="input__tag user__info" id="user_phone_input" type="text" placeholder="- 없이 입력해주세요. 예) 0101231234"/>
                </div>
                <div class ="validation__message" id="user_phone_msg"></div>
            </div>
            ${interestInput()}
            <div class="signup__form__contract__agree">
                <div class="contract__agree__text">
                    약관에 동의합니다.
                </div>
                <div class="input__box">
                    <input class="condition__checkbox" id="user_contract_checkbox" type="checkbox">
                </div>
                ${contractModal()}
                ${resetModal()}
                ${signupModal()}
            </div>
            <div class="signup__form__buttons">
                <button class="signup__button" id="signup_reload_button" type="button">초기화</button>
                <button class="signup__button" id="signup_submit_button" type="button">가입하기</button>
            </div>
    </section>`
};

export {
    signupForm,
}