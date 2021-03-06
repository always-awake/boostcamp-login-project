# 멤버십 프로젝트 - 로그인과 회원가입 저장소

### 문제 분석 체크리스트 
- 플래닝 포커를 이용하여 리소스타임을 지정했다.
- (리소스 타임)__

#### 회원가입 ui
- [ ] html 뼈대 만들기 (8)
    - [ ] 9가지의 입력항목을 갖는다.
    - [ ] 각 입력항목에 맞는 type을 설정하고, 각 항목에 맞는 표시법으로 value를 표시한다.(예: 비밀번호는 *****)
- [ ] CSS Layout (5)
    - [ ] 모든 엘레멘트들은 가운데에 정렬 되어있다.
    - [ ] CSS Variable을 사용한다.
- [ ] 세부적인 css (3)
    - [ ] 회원가입 색은 녹색이다.
    - [ ] 버튼색은 녹색이다.
    - [ ] 경고문구는 빨간색이다.
    - [ ] 라벨은 중앙정렬이아니다.
    - [ ] 플레이스홀더는 옅은회색이다.
    - [ ] 관심사의 태그형태의 ui는 x버튼을 가진다
    - [ ] 약관 ui의 동의 버튼은 활성화 비활성화믐 다름 령태를 가진다.
    - [ ] 약관에 동의합니다는 밑줄이 있다.
- [ ] 일관된 규칙을 정하고, 적용하기 (2)
    - [ ] 각각의 컴포넌트에는 일관적인 여백이있다.
    - [ ] 회원가입과 폼 사이에는 일관적인 여백과 다른 크기의 여백이 있다. 
- [ ] input validation (6)
    - [ ] 정규표현식 이용하기
- [ ] 관심사 입력 동작(3)
    - [ ] ',' 단위로  태그형태의 ui가    생기거나 사라진다.
> (4시간)
- [ ] 초기화 버튼 동작
- [ ] 가입하기 버튼 동작
> 
- [ ] 약관 동의 (1)
    - [ ] 내용을 누르면 약관 ui가 생긴다.
    - [ ] 체크박스는 사용자가 체크할 수 없다. 
- [ ] 약관 ui (2)
    - [ ] 스크롤을 한 번이라도 내렸을 때 동의 버튼이활성화
    - [ ] 슼롤 박스가 있다.
    - [ ] x 버튼이 있다.
#### 로그인 ui
- [ ] 스스로 기획한 사항과 일치하는가 (1)

#### 공통사항
- [ ] 자바스크립트 컨벤션을 지켰는가.
- [ ] (회원가입)CSS 지원을 받을 수 있는 라이브러리를 사용하지 않는다.
- [ ] (로그인)CSS 지원을 받을 수 있는 라이브러리를 사용해서 개발

### E 그룹 코드리뷰 규칙
- 매일 짝을 바꾸어가며 코드리뷰하기 (아침에 해도 되고, 집에가고 해도 된다!)
- 코드리뷰시 매너 갖추기
- 클린코드 및 예상하지 못한 이슈에 대해 생각난게 있으면 알려주기

### 구체적인 구현되야할 컴포넌트 (html)
#### 회원가입 ui
- [ ] 회원가입 헤더
- [ ] 아이디 라벨 인풋
- [ ] 비밀번호 라벨 인풋
- [ ] 비밀번호 재확인 라벨 인풋
- [ ] 이름 라벨 인풋
- [ ] 이메일 라벨 인풋
- [ ] 휴대전화 라벨 인풋
- [ ] 관심사 라벨 인풋
- [ ] 성별 라벨 드롭다운
- [ ] 생년월일 라벨 드롭다운 및 인풋
- [ ] 약관동의 라벨 체크박스
- [ ] 초기화 버튼
- [ ] 관심사버튼

#### 약관동의 ui
- [ ] 약관 텍스트 에어리어 (스크롤)
- [ ] x 버튼
- [ ] 라벨

#### 로그인 ui
- [ ] 아이디 라벨 인풋
- [ ] 비밀번호 라벨 인풋
- [ ] 로그인 버튼

#### 메인화면 ui
- [ ] 임의 페이지

### 요구사항에 대한 구체적인 기능
- [ ] 사용해야할 CSS 라이브러리 찾기
- [ ] layout 전체 블록에 대한 가운데 정렬

