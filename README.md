# Part2

### 1. vanilla.html : 자바스크립트만을 이용해서 간단한 카운터를 만든 코드

#### - 자바스크립트만으로 구현할 때의 단점

- querySelector나 getElementById 등을 활용해 태그를 불러와야 한다.
- addEventListener로 이벤트를 생성해야한다.

### 2. index.html : react로 구현하기

#### - body태그 내에는 id가 'root'인 div태그만 남기고, script 태그에서 먼저 그려낸다.

#### - script태그로 react, react-dom을 불러오고, `React.createElement`, `ReactDOM.render()`를 사용해 화면이 나타낸다.

#### - createElement를 할 때 onClick이나 onMouseEnter 등의 이벤트와 스타일 속성도 같이 추가해준다.

#### - 각 요소들을 JSX문법으로 고쳐준다.(함수로 선언)

#### - 함수로 선언한 하나의 컴포넌트는 사용 시 첫글자를 무조건 대문자로 해줘야함!!

#### - 아직 create-react-app 사용 전이므로 브라우저가 JSX문법을 렌더링하지 못한다. babel을 이용해 렌더링한다.
