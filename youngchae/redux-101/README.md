# redux-101

## Part 0

- redux는 react와 별개로 바닐라js, vue.js 등에서도 쓰일 수 있지만, react와 함께 사용하면서 유명해졌다.
- 강의에 필요한 것들 안내
- 프로젝트 셋업

## Part 1

### 1.0

- 바닐라js로 카운터를 만들때 버튼을 누르면 텍스트가 변하도록 작업이 필요하다.
- 이것은 심플한 리덕스로 교체할 수 있다.

### 1.1

- redux 설치 및 import
- store는 state 데이터를 넣는 곳이고, state는 바뀌는 데이터이다.
- createStore의 인자로는 reducer 함수를 넣어줘야 한다.
- reducer 함수는 데이터를 수정해주는 함수이고, 리턴값이 application에 있는 data가 된다.
- reducer 함수 안에서는 데이터가 수정되고 수정된 데이터를 리턴한다.(add or minus의 결정은 action을 통해 가능)
- reducer 함수의 인자로 현재 state를 받는데, state의 default값을 설정해줄 수 있다.

### 1.2

- reducer 함수의 두번째 인자는 action이다.
- 들어온 action으로 state 변경을 어떻게 할 지 정한다.
- dispatch의 인자로 객체형태의 action을 전달하면 reducer 함수에서 action을 받아올 수 있다.
- action 객체는 무조건 type을 가져야 한다.
- reducer 함수에서 action을 체크하고 action에 맞는 작업을 실행해 리턴한다.

### 1.3

- store를 콘솔에서 보면, subscribe 함수가 존재한다.
- subscribe 함수는 store 안의 변화를 감지해 인자로 받는 함수를 실행한다.

### 1.4

- (Refactor) if문을 switch문으로 변경(가독성)
- (Refactor) action type string을 변수로 저장해 사용하기(오타 방지)

## Part 2

### 2.0

- todo리스트에 리덕스를 적용하면 투두리스트의 상태를 저장할 수 있다.
- dispatch로 action을 넘겨줄 때 객체에 입력받은 todo를 text로 넘겨줄 수 있다.

### 2.1

- mutation은 원래의 배열이나 객체를 바꾸는 것이다.
- 절대 state를 mutate하지 않고, 새로운 state를 생성하고 리턴해야 한다.
- spread문법으로 원래 state요소를 복사해올 수 있다.

### 2.2

- 단일 삭제를 위해 각 li태그에 `Date.now()`로 id를 부여해준다.
- toDo를 생성할 때 삭제 버튼도 생성하고, 버튼을 클릭하면 li태그의 id를 불러와서 dispatch로 전송한다.

### 2.3

- 원래 state 배열에서 요소를 삭제하면 안되므로(mutate) filter 메소드를 사용한다.
- filter 메소드는 테스트를 통과하는 요소들로 새로운 배열을 반환한다.
- toDo의 id가 action으로 받아온 id와 불일치하는 요소만 담은 배열을 반환한다.

### 2.4

- (Recap) action을 dispatch하기 위한 함수, dispatch로 보낼 object를 리턴하는 함수(action creater)로 나눠서 작성했다.
- reducer 함수에서 절대로 state를 mutate 하면 안되고, 새로운 state를 반환해야 했다.
- 배열 state를 mutation없이 반환하기 위해서 filter를 이용했다.
- subscribe는 store의 변화를 감지해 작업을 실행시킨다.

## Part 3

### 3.0

- react-redux todo 셋업
- BrowserRouter, Routes, Route를 react-router-dom으로부터 import해서 라우팅

### 3.1

- store.js에서 store를 만들고, action객체 생성 함수, reducer 함수를 만들어서 export 한다.
- index.js에서는 App 컴포넌트를 react-redux에서 import해온 Provider로 감싸고 store props로 store를 준다.

### 3.2

- 컴포넌트들을 store와 연결시켜주는 connect
- mapStateToProps는 store로부터 state를 Home으로 가져다준다.(props로)
- mapStateToProps는 redux store로부터 온 state와 component의 props(옵션)를 인자로 받는 함수다.
- connect 함수는 리턴값을 Home의 props 객체에 추가해준다.
- `connect()()` 에서 두번째 괄호 안에는 연결할 컴포넌트명을 적는다.(ES6 Currying?)
- connect 함수는 현재 버전에서도 여전히 지원되지만, 기본적으로 hooks API를 사용하는 것이 좋다. useSelector 훅을 사용해 store의 state를 바로 가져올 수 있다.
- `useSelector`는 redux store의 상태를 조회하는 Hook이다. 여기서(Home.js L6)의 state는 `store.getState()` 함수를 호출했을 때의 결과와 같다.
