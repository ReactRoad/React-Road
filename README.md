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

<br>

# Part3

### 3.0

- 버튼을 클릭했을 때 어떤 값에 변화를 주더라도, 클릭할 때마다 다시 렌더링하는 과정이 없으면 UI에는 변화가 없다. 즉, 변화를 UI에 보여주고 싶다면 변화가 일어날 때마다 재렌더링을 해줘야 한다.
- 바닐라JS만을 이용해 상태를 변화시킬 때와 비교해 React의 장점은 정확히 변하는 부분만(ex.클릭횟수) 변화를 줄 수 있다는 점이다.
- 이전에 렌더링된 컴포넌트와 새롭게 렌더링된 컴포넌트 사이의 차이점만을 찾아내 바꾸는 방식이다.

### 3.1

- 리렌더링 함수를 계속해서 실행시키는 것 말고 최고의 방법으로 변화를 반영하려면, useState를 활용한다.
- useState로 불러온 배열의 첫 번째 요소는 우리가 담으려는 data값이고, 두 번째 요소는 data를 바꿀 때 사용할 modifier이다.

### 3.2

- modifier 함수는 data를 바꾸고 재렌더링까지 해주는 함수이다.
- modifier 함수의 이름은 data이름에 set을 붙여주고 카멜케이스로 적는다.

### 3.3

- (Recap) modifier 함수를 이용해 state를 바꾸면 컴포넌트가 재생성되고, 코드가 다시 실행된다.
