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
