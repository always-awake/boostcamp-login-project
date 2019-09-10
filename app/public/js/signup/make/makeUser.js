import {User} from '../utils.js';

/**
 * 입력값을 바탕으로 db에 저장할 유저 객체를 생성한 후, 필드 값을 채워 리턴하는 함수
 *
 * @return {user obj}
 */
const makeUser = () => {
    const user = new User();
    const afterBaseSettingUser = setUserBaseInfo(user);
    const afterbirthSettingUser = setUserBirthInfo(afterBaseSettingUser);
    const afterInterestsSettingUser = setUserInterestsInfo(afterbirthSettingUser);
    return setUserContractInfo(afterInterestsSettingUser);
};

/**
 * 입력값을 바탕으로 유저의 생년월일과 관심사, 약관과 관련된 필드를 제외한 필드를 채워주는 함수
 *
 * @param user
 * @return {user obj}
 */
const setUserBaseInfo = (user) => {
    const userBaseInfo = document.getElementsByClassName('user__info');
    user.id = userBaseInfo[0].value;
    user.password = userBaseInfo[1].value;
    user.re_password = userBaseInfo[2].value;
    user.name = userBaseInfo[3].value;
    user.gender = userBaseInfo[4].value;
    user.email = userBaseInfo[5].value;
    user.phone = userBaseInfo[6].value;
    return user
};

/**
 * 입력값을 바탕으로 유저의 생년월일 필드를 채워주는 함수
 *
 * @param user
 * @return {user obj}
 */
const setUserBirthInfo = (user) => {
    const userBirthInfo = document.getElementsByClassName('user__info__birth');
    user.birth.year = userBirthInfo[0].value;
    user.birth.month = userBirthInfo[1].value;
    user.birth.day = userBirthInfo[2].value;
    return user
};

/**
 * 입력값을 바탕으로 유저의 관심사 필드를 채워주는 함수
 *
 * @param user
 * @return {user obj}
 */
const setUserInterestsInfo = (user) => {
    const userInterestTagsInfo = document.getElementsByClassName('interest__tag');
    for (let interestTag of userInterestTagsInfo) {
        user.interests.push(interestTag.textContent.substring(0, interestTag.textContent.length-1));
    }
    return user
};

/**
 * 입력값을 바탕으로 유저의 약관과 관련된 필드를 채워주는 함수
 *
 * @param user
 * @return {user obj}
 */
const setUserContractInfo = (user) => {
    const userContractInfo = document.getElementById('user_contract_checkbox');
    user.contract = userContractInfo.checked;
    return user
};

export {
    makeUser,
}