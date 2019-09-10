import {setInputEvent} from './setInputEvent.js';
import {setButtonEvent} from './setButtonEvent.js';

/**
 * 회원가입 폼 페이지의 모든 이벤트를 추가하는 함수
 */
const setEvent = () => {
    setInputEvent();
    setButtonEvent();
};

export {
    setEvent
};