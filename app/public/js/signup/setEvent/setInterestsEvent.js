import {checkInterestsValidation} from '../check/checkValidation.js';

/**
 * 관심사 Input Div의 이벤트를 설정하는 함수
 */
const setInterestsEvent = () => {
    const userInterests = [];
    const interestInput = document.getElementById('user_interest_input');
    const interestTagDiv = document.getElementById('interest_tags');

    interestInput.addEventListener('keyup', () => {
        const target = interestInput.value;
        if (target[target.length-1] === ',') {
            const interestContainComma = interestInput.value;
            const interest = interestContainComma.substring(0, interestContainComma.length-1);
            userInterests.push(interest);
            // 쉽표만 입력됬을 경우 예외 처리
            if (interest === '' || interest[interest.length-1] === ',') {
                setTimeout(function(){
                    interestInput.value = '';
                }, 300);
            } else {
                interestInput.value = '';
                // 태그 body 만들기
                const interestTag = document.createElement('div');
                interestTag.classList.add('interest__tag');
                interestTag.textContent = `${interest.trim()}`;
                interestTag.style.height = '30px';

                // 태그 body 내 close 버튼 만들기
                const tagCloseBtn = document.createElement('div');
                tagCloseBtn.classList.add('interest__tag__close__button');
                tagCloseBtn.textContent = 'x';
                interestTag.appendChild(tagCloseBtn);

                // 태그 body 내 close 버튼 이벤트 추가하기
                tagCloseBtn.addEventListener('click', (event) => {
                    const interestTag = event.target.parentNode;
                    userInterests.splice(userInterests.indexOf(interestTag.value), 1);
                    interestTag.remove();
                    interestInput.focus();
                });
                interestTagDiv.appendChild(interestInput);
                interestTagDiv.insertBefore(interestTag, interestInput);
                interestInput.focus();
            }
        }
    });

    // Backspace를 이용해 관심사 태그 수정 및 삭제 로직

    /**
     *
     * @type {HTMLElement}
     */
    const interestTagsDiv = document.getElementById('interest_tags');
    interestInput.addEventListener('keydown', (event) => {
        if (event.key === "Backspace" && userInterests.length !== 0 && interestInput.value === '') {
            const interestTagsCount = interestTagsDiv.childElementCount;
            const interestTags = interestTagsDiv.childNodes;
            const interestTagToUpdate = interestTags[interestTagsCount];
            interestInput.value = interestTagToUpdate.textContent;
            userInterests.splice(userInterests.indexOf(interestTagToUpdate.textContent), 1);
            interestTagToUpdate.remove();
        }
    });
    checkInterestsValidation(interestInput, interestTagsDiv);
};

export {
    setInterestsEvent
}