const ERROR = {
    NEW_ID_STRUCTURE_ERROR: {
        status: 'Wrong New User ID Structure Error',
        msg: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
        msg_color: '#FF0000',
    },
    NEW_ID_REDUPLICATION_ERROR: {
        status: 'Id Reduplication Error',
        msg: '이미 사용중이거나 탈퇴한 아이디입니다.',
        msg_color: '#FF0000'
    },
    PASSWORD_STRUCTURE_ERROR: {
        status: 'Wrong Password Structure Error',
        msg: '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
        msg_color: '#FF0000'
    },
    RE_PASSWORD_DIFFERENT_ERROR: {
        status: 'Re-entered Password Different Error',
        msg: '비밀번호가 일치하지 않습니다.',
        msg_color: '#FF0000'
    },
    MISSING_REQUIRE_INFO_ERROR: {
        status: 'Missing Required Information Error',
        msg: '필수 정보입니다.',
        msg_color: '#FF0000'
    },
    BIRTH_YEAR_STRUCTURE_ERROR: {
      status: 'Wrong Birth Year Structure Error (four-digit number)',
      msg: '태어난 년도 4자리를 정확하게 입력하세요.',
        msg_color: '#FF0000'
    },
    BIRTH_YEAR_RESTRICT_ERROR: {
      status:'Should Older Than 15',
      msg: '만 14세 미만의 어린이는 보호자 동의가 필요합니다.',
        msg_color: '#FF0000'
    },
    BIRTH_MONTH_DAY_STRUCTURE_ERROR: {
        status: 'Wrong Birth Month Or Day Structure Error',
        msg: '생년월일을 다시 확인해주세요.',
        msg_color: '#FF0000'
    },
    EMAIL_STRUCTURE_ERROR: {
        status: 'Wrong Email Structure Error (ex: check "@")',
        msg: '이메일 주소를 다시 확인해주세요.',
        msg_color: '#FF0000'
    },
    PHONE_STRUCTURE_ERROR: {
        status: 'Wrong Phone Numner Structure Error (10 or 11 digit number, start with 010)',
        msg: '형식에 맞지 않는 번호입니다.',
        msg_color: '#FF0000'
    },
    INTEREST_COUNT_ERROR: {
        status: 'Wrong Interest Count Error (More 3 interest)',
        msg: '3개 이상의 관심사를 입력하세요.',
        msg_color: '#FF0000'
    }
};

const PASS = {
    ID_VALID: {
        status: 'Valid Id',
        msg: '멋진 아이디네요!',
        msg_color: '#09A600'
    },
    PASSWORD_VALID: {
        status: 'Safe Password',
        msg: '안전한 비밀번호입니다.',
        msg_color: '#09A600'
    },
    RE_PASSWORD_SAME: {
        status: 'Same Password',
        msg: '비밀번호가 일치합니다.',
        msg_color: '#09A600'
    },
};

const REG_EXR = {
    ID_CHECK: /^[0-9a-zA-z_-]{5,20}$/,
    PASSWORD_CHECK: /^.*(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*+=_~-]).{8,16}.*$/,
    EMAIL_CHECK: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
    PHONE_CHECK: /^(^010)([0-9]{7,8})$/,
};

const CONTRACT = {
    date: '2019-09-03',
    text: `&nbsp정보통신망법 규정에 따라 부스트캠프에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, <b>개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간</b>을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.<br>
           <br>
           <b>1. 수집하는 개인정보의 항목</b><br>
           최초 회원가입 당시 아래와 같은 최소한의 개인정보를 필수항목으로 수집하고 있습니다.<br>
           - 필수항목 : 아이디, 비밀번호, 이름, 생년월일, 성별, 이메일, 휴대전화, 관심사<br>
           <br>
           <b>2. 개인정보의 수집 및 이용 목적</b><br>
           가. 컨텐츠 제공, 특정 맞춤 서비스 제공<br>
           나. 회원제 서비스 제공, 개인식별, 부스트캠프 이용약관 위반 회원에 대한 이용제한 조치, 서비스의 원활한 운영에 지장을 미치는 행위 및 서비스 부정이용 행위 제재<br>
           <br>
           <b>3. 개인정보의 보유 및 이용기간</b><br>
           이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.<br>
           <br>
           <b>가. 회사 내부 방침에 의한 정보보유 사유</b><br>
           - 부정이용기록(부정가입, 징계기록 등의 비정상적 서비스 이용기록)<br>
           보존 항목 : 가입인증 휴대폰 번호<br>
           보존 이유 : 부정 가입 및 이용 방지<br>
           보존 기간 : 6개월<br>
           ※ '부정이용기록'이란 부정 가입 및 운영원칙에 위배되는 게시글 작성 등으로 인해 회사로부터 이용제한 등을 당한 기록입니다.<br>
           <br>
           <b>나. 관련법령에 의한 정보보유 사유</b><br>
           상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.<br>
           <br>
           - 계약 또는 청약철회 등에 관한 기록<br>
           보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률<br>
           보존 기간 : 5년<br>
           <br>
           - 소비자의 불만 또는 분쟁처리에 관한 기록<br>
           보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률<br>
           보존 기간 : 3년<br>
           <br>
           - 웹사이트 방문기록<br>
           보존 이유 : 통신비밀보호법<br>
           보존 기간 : 3개월<br>
           <br>`
};

export {
    ERROR,
    PASS,
    REG_EXR,
    CONTRACT,
};