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

### 4.2

- props로 어떤 타입의 값을 전달해줄지 react가 알지 못한다.
- protoTypes를 사용해 props의 각 값 타입을 미리 명시해주면 타입 불일치 시 경고를 띄워주고, isRequired 속성으로 필수값 여부도 설정 가능하다.
- props를 받아올 때 default 값도 설정 가능하다.

### 4.3

- (Recap) props는 컴포넌트를 설정할 수 있도록 해주는 유용한 도구다.

<br>

# Part5

### 5.0

- create-react-app을 사용해 node 환경에서 react앱을 실행할 수 있다.
- create-react-app을 사용하면 html파일에서 사용하던 script태그들 대신 react앱을 위한 패키지가 설치되어 쉽게 사용 가능하다.

### 5.1

- cra로 작업할 때는 이전과 코드도 같고 PropType도 같고, props를 받아내는 방법도 같다.
- 그러나 cra에서는 서로 다른 파일들로 코드를 *분할*하는 등의 작업이 가능하다.
- 또한 특정 컴포넌트를 위한 CSS 파일을 만들 수 있는 기능이 생겼다.
- 스타일을 적용하는 몇가지 방법

  1. 하나의 css 파일을 만들어 index.js에서 import해오기
     - 전역에 스타일을 지정하는 방법은 좋지 않다.
  2. 컴포넌트 내 태그에 스타일을 직접 입력하기
     - 스타일을 직접 인라인에 js문법으로 적는것이 좋지 않다.
     - 컴포넌트를 사용하는 모든 곳에 같은 스타일이 적용된다.
  3. css모듈 사용하기
     - 컴포넌트명.module.css에 css코드를 작성하고 해당 컴포넌트 파일에서 `import styles from './Button.module.css';`처럼 import하면, className에 `styles.{클래스명}`과 같이 작성할 수 있고, css코드를 자바스크립트 코드로 변환시켜준다.
     - 콘솔에서 해당 부분을 확인하면 클래스명에 해시값이 부여되어 랜덤클래스를 갖게된 것을 확인할 수 있다.
     - css파일에서 작성한 className을 사용하고 싶은 컴포넌트에 가져다 쓸 수 있고, 각각은 해시값이 부여되어 고유한 클래스네임을 갖는다.

<br>

# Part6

### 6.0

- 컴포넌트가 처음 렌더링될때만 어떤 작업을 실행시키고 싶을 때 useEffect를 사용하면 된다.

### 6.1

- useEffect는 코드가 한 번만 실행될 수 있도록 보호해주는 역할을 한다.
- useEffect의 첫번째 인자에는 실행할 함수를 담는다.

### 6.2

- 특정 state만이 변화했을 때 원하는 코드들을 실행하고 싶을 때, useEffect의 두번째 인자 배열에 해당 state를 적어준다.
- 배열을 비워두면 처음 한번만 실행된다.

### 6.3

- (Recap) useEffect로 언제 어떤 코드를 실행할지 고르는 것이 가능해졌다.

### 6.4

- Cleanup function
- 컴포넌트가 생길 때 useEffect로 코드를 실행하듯, 사라질 때도 코드를 실행할 수 있다.
- useEffect의 첫번째 인자 함수 안에서 새로운 함수를 리턴하면, 컴포넌트가 사라질 때 해당 코드가 실행된다.

<br>

# Part7

### 7.0

- state를 변경할 때는 절대 직접 수정하지 않고, 함수를 사용한다.
- state가 배열일 경우 원래 배열을 직접 수정하지 않고, setState 함수의 인자로 들어오는 원래 배열을 복제해서 수정하거나, 새로운 배열을 만들어 리턴해야 한다.

### 7.1

- 배열 state를 map을 사용해 li태그로 변환해 출력할 수 있다.
- map으로 나오는 태그에는 고유한 값을 key prop으로 넘겨줘야 한다.(map의 두번째 인자인 index활용)

### 7.2

- api를 fetch로 불러온다. 데이터를 불러오는 작업은 첫 렌더링 시 한번만 하면 되므로 useEffect를 활용한다.
- 불러온 데이터로 state를 세팅하고, 원하는 곳에 활용할 수 있다.
- 코인 데이터를 불러와 예산을 입력받고 구매 가능한 개수를 출력하는 앱 생성

### 7.3

- Movie App 만들기
- movie api를 불러와서 이미지, 제목, 줄거리, 장르를 map으로 출력해준다.

### 7.4

- Movie 컴포넌트를 만들고, props로 이미지url, 제목, 줄거리, 장르를 받고, 각 prop의 타입을 지정해준다.
- React Router를 이용해 페이지 전환을 할 수 있다.(react-router-dom 설치)
- react router는 페이지의 url에 따라서 알맞은 컴포넌트를 보여준다.
- 각 페이지들은 routes폴더에 넣어 관리한다.

### 7.5

- react-router-dom으로부터 Browser Router(Router), Routes, Route를 import해와서 App컴포넌트 안에 라우팅해준다.
- Router>Routes>Route순으로 작성하고 Route의 path에는 해당 url문자열을 적어주고, element에는 출력할 컴포넌트를 적어준다.(6.0 버전 기준)
- a태그만을 이용해서 페이지를 이동하면 전체 페이지가 새로고침된다. 이를 피하기 위해 Link를 사용하면, 전체 페이지 재실행 없이 이동한다.

### 7.6

- react router는 url에 변수를 적용해 사용할 수 있는 동적 url을 지원한다.
- 변수로 사용하고 싶은 부분의 앞에는 콜론(`:`)을 적어준다.
- react-router-dom에서 제공하는 useParams를 이용하면, params를 객체로 받아올 수 있다.

### 7.7

- gh-pages 설치
- github pages는 우리가 만든 코드들을 볼 수 있게 할 수 있는 툴이다.
- npm run build를 입력하면 build 폴더가 생성되고 압축된 최적화된 코드들이 만들어진다.
- package.json에 `"homepage": "https://깃허브유저네임.github.io/레포지토리명"`라고 적는다.
- package.json의 scripts에 `"deploy": "gh-pages -d build", "predeploy": "npm run build"`를 추가해준다.(gh-pages가 build폴더를 웹사이트에 업로드하도록 하는 것)

### 7.8

- 끝

### 7.9

- description의 길이가 너무 긴 경우 글자수를 기준으로 slice해서 출력하기

### 7.10

- class문법으로 작성하던 구버전의 react는 현재에도 동작하긴 하지만, 대부분의 개발자들이 더 편리한 함수형을 선호한다.
