import {User} from './User.js';

const makeUser = () => {
    const user = new User();
    const afterBaseSettingUser = setUserBaseInfo(user);
    const afterbirthSettingUser = setUserBirthInfo(afterBaseSettingUser);
    const afterInterestsSettingUser = setUserInterestsInfo(afterbirthSettingUser);
    return setUserContractInfo(afterInterestsSettingUser);
};

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

const setUserBirthInfo = (user) => {
    const userBirthInfo = document.getElementsByClassName('user__info__birth');
    user.birth.year = userBirthInfo[0].value;
    user.birth.month = userBirthInfo[1].value;
    user.birth.day = userBirthInfo[2].value;
    return user
};

const setUserInterestsInfo = (user) => {
    const userInterestTagsInfo = document.getElementsByClassName('interest__tag');
    for (let interestTag of userInterestTagsInfo) {
        user.interests.push(interestTag.textContent.substring(0, interestTag.textContent.length-1));
    }
    return user
};

const setUserContractInfo = (user) => {
    const userContractInfo = document.getElementById('user_contract_checkbox');
    user.contract = userContractInfo.checked;
    return user
};

export {
    makeUser,
}