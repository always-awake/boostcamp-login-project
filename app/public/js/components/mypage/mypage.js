const myPage = (user) => {
    return `<div class="mypage">
    <div class="mypage__profile__image" id="mypage_profile_image">
        <img id="profile_img" src="http://mblogthumb1.phinf.naver.net/20150427_84/ninevincent_1430122792324niOLy_JPEG/kakao_2.jpg?type=w2" alt="">
    </div>
    <div class="mypage__user__info" id="mypage_user_info">
        <div class="user__name">
            <span class="username">${user.name}</span>
            <span class="suffix">님</span>
        </div>
        <div class="user__id">${user.id}</div>
        <div class="user__email">${user.email}</div>
        <div class="user__interests" id="user_interests"></div>
    </div>
    <button class="logout__btn" id="mypage_logout_btn">로그아웃</button>
</div>`

};

export  {
    myPage,
}