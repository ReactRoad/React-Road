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
- useState의 인자에는 초기값을 넣어준다.

### 3.2

- modifier 함수는 data를 바꾸고 재렌더링까지 해주는 함수이다.
- modifier 함수의 이름은 data이름에 set을 붙여주고 카멜케이스로 적는다.

### 3.3

- (Recap) modifier 함수를 이용해 state를 바꾸면 컴포넌트가 재생성되고, 코드가 다시 실행된다.

### 3.4

- setState 함수로 state를 변경하는 방법은 2가지다. setState 함수에 새로운 값을 넣어 변경해주는 것, 현재 값을 이용해 새로운 값을 계산해 내는 것.
- 현재 값을 이용해 현재 값을 계산해낼 때는 setState 함수 안에 current state를 parameter로 받는 함수를 넣는 것이 안전하다.
- 인자로 받는 current state가 확실히 현재 값이라는 보장이 생기기 때문.

### 3.5

- 시간 변환하기 구현
- jsx 문법에서는 for 대신 htmlFor, class 대신 className을 사용해야 한다.
- input에 onChange이벤트로 입력할 때마다 이벤트핸들링을 할 수 있다.
- event.target.value로 입력받은 값을 minutes state에 저장해준다.

### 3.6

- 만약 onChange 이벤트를 삭제하면, value가 minutes로 설정되어있고 minutes state가 바뀌지 않기 때문에 input창의 값을 바꿀 수 없다.
- minutes를 60으로 나눈 값을 hours input의 value로 준다.
- hours input에 disabled 속성을 주면 input에 접근할 수 없게 된다.

### 3.7

- flipped state는 boolean으로, 각 input의 disabled 속성을 true, false로 설정하는 데 이용한다.
- Flip 버튼을 누르면 amount state를 초기화하고, 각 input의 disabled 속성을 바꿔준다.
- flipped의 상태에 따라 각 input의 value를 계산해내는 방법을 다르게 한다.(삼항연산자 활용)

### 3.8

- (Recap) state를 활용해서 값을 다르게 렌더링하거나 기능을 구현할 수 있다.

### 3.9

- 사용자가 원하는 단위변환기를 선택할 수 있도록 메뉴바 생성(분/시간 변환기, 마일/킬로미터 변환기)
- select태그와 option태그로 원하는 단위변환기를 선택한다.
- index state를 생성해서 option의 value를 받아와 어떤 컴포넌트를 렌더할지 세팅한다.

<br>

# Part4

### 4.0

- 두 개의 버튼에 같은 스타일을 적용할 때 복사 붙여넣기보다 컴포넌트를 만들고, 버튼의 텍스트는 props로 설정하도록 한다.
- 컴포넌트를 사용할 때 넘겨준 속성들은 function의 props인자로 들어온다.
- props인자의 속성들을 꺼내서 활용할 수 있다.

### 4.1

- 컴포넌트를 사용할 때 전달한 onClick은 이벤트가 아닌 props이다.
- 마찬가지로 style 속성도 전달할 수 없다.
- 이벤트나 스타일은 props가 아닌 실제 html태그에 넣어줘야 한다.
- Continue 버튼은 변화가 없으므로 재렌더링이 필요하지 않다. 이때 메모를
- props가 변경되지 않으면 해당 컴포넌트를 다시 그리지 않도록 memo를 통해 설정해줄 수 있다.
