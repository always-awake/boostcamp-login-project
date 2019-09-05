import {User} from './User.js';

const makeUser = () => {
    const user = new User();
    setUserBaseInfo(user);
    setUserBirthInfo(user);
    setUserInterestsInfo(user);
    setUserContractInfo(user);
    return user
};

const setUserBaseInfo = (user) => {
    const userBaseInfo = document.getElementsByClassName('user__info');
    user.id.value = userBaseInfo[0].value;
    user.password.value = userBaseInfo[1].value;
    user.re_password.value = userBaseInfo[2].value;
    user.name.value = userBaseInfo[3].value;
    user.gender.value = userBaseInfo[4].value;
    user.email.value = userBaseInfo[5].value;
    user.phone.value = userBaseInfo[6].value;
};

const setUserBirthInfo = (user) => {
    const userBirthInfo = document.getElementsByClassName('user__info__birth');
    user.birth.year = userBirthInfo[0].value;
    user.birth.month = userBirthInfo[1].value;
    user.birth.day = userBirthInfo[2].value;
};

const setUserInterestsInfo = (user) => {
    const userInterestTagsInfo = document.getElementsByClassName('interest__tag');
    for (let interestTag of userInterestTagsInfo) {
        user.interests.value.push(interestTag.textContent.substring(0, interestTag.textContent.length-1));
    }
};

const setUserContractInfo = (user) => {
    const userContractInfo = document.getElementById('user_contract_checkbox');
    user.contract.validation = userContractInfo.checked;
};

export {
    makeUser,
}