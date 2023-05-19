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
- connect의 첫번째 인자 `mapStateToProps`는 store로부터 state를 Home으로 가져다준다.(props로)
- `mapStateToProps`는 redux store로부터 온 state와 component의 props(옵션)를 인자로 받는 함수다.
- connect 함수는 리턴값을 Home의 props 객체에 추가해준다.
- `connect()()` 에서 두번째 괄호 안에는 연결할 컴포넌트명을 적는다.(ES6 Currying?)
- connect 함수는 현재 버전에서도 여전히 지원되지만, 기본적으로 hooks API를 사용하는 것이 좋다. useSelector 훅을 사용해 store의 state를 바로 가져올 수 있다.
- `useSelector`는 redux store의 상태를 조회하는 Hook이다. useSelector 인자함수의 인자로 오는 state는 `store.getState()` 함수를 호출했을 때의 결과와 같다.

### 3.3

- connect의 두번째 인자 `mapDispatchToProps`는 컴포넌트의 props로 dispatch함수를 보내준다.
- 앞 장에서 `mapStateToProps`대신 `useSelector`를 사용한 것과 마찬가지로 `mapDispatchToProps` 대신 `useDispatch`로 구현하면 편하다.
- `useDispatch`는 redux store의 dispatch를 함수에서 사용할 수 있게 해주는 Hook이다.
- store.js에서 action객체 생성함수를 불러와 dispatch 함수의 인자로 전달하면 reducer가 실행되고 state가 갱신된다.
- [3.2, 3.3 참고 링크 1](https://react.vlpt.us/redux/05-counter.html) / [3.2, 3.3 참고 링크 2](https://react.vlpt.us/redux/09-connect.html)

### 3.4

- ToDo 컴포넌트를 생성해서 connect함수를 사용해 li태그에 렌더링하기
- `useSelector`, `useDispatch`를 사용하면 컴포넌트 분리 없이 Home에서 map함수로 렌더링할 수 있다.
- 삭제 버튼에 이벤트리스너 함수를 연결하고 dispatch로 deleteToDo에 클릭한 버튼의 id를 보내주면 state가 갱신되고 재렌더링된다.

### 3.5

- useParams를 이용해 디테일페이지의 파라미터를 가져오고, useSelector로 state를 가져와 파라미터와 일치하는 toDo의 text와 id를 적절하게 출력한다.
- `todoText?.text`에서 `?`는 Javascript Optional Chaining 문법이다.

### 3.6

- (challenge) localStorage에 state 저장하기 구현

## Part 4

### 4.0

- redux를 사용하려면 너무 많은 양의 코드가 필요하다는 단점이 있다.
- redux toolkit은 많은 지름길들이 있는 패키지다. 적은 양의 코드로 같은 기능을 하도록 돕는다.

### 4.1

- action을 생성할 때 변수를 생성하고, action 객체를 리턴하는 함수를 만들고 이용해야 했다. 객체 안에서 필수로 사용해야하는 type을 제외하면 이름을 자유롭게 짓고 사용했다.
- redux toolkit의 `createAction` 함수를 이용하면 action을 생성하는데, 이 객체는 type과 payload로만 이루어져 있다. 즉, action으로부터 무언가를 받으면 payload에 배치된다.

### 4.2

- `createReducer`를 사용하면 기존에 reducer 함수에서 사용하던 switch문을 사용하지 않아도 된다.
- `createReducer`에서는 state를 mutate하는 것이 가능하다.
- mutate를 하거나, 새로운 state를 리턴하는 것 둘 다 가능하다.(redux toolkit 내부에서 immerjs를 사용하기 때문) return을 할 때는 꼭 새로운 state여야 한다.
- `createReducer`의 첫번째 인자는 initialState이고, 두번째 인자 안에서 기존의 switch 문을 대신하는 로직을 작성하면 된다.

### 4.3

- `configureStore`는 미들웨어와 함께 store를 생성하는 함수다.
- `configureStore`를 사용하면 redux dev tools를 사용할 수 있다.
- 브라우저에서 redux dev tools를 사용하면, action과 state를 시간별로 확인하고 되돌려 볼 수 있다. dispatch를 직접 입력해볼 수도 있다.
