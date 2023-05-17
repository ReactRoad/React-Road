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
