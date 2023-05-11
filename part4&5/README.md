## part4

##### props.banana -> {banana}

###### props는 객체이기 때문에 중괄호 사용

###### prop을 더 많은 곳에 사용 할 수 있음

###### onClick 커스터마이즈를 할 수 있음

###### Btn onClick={changeValue} /> 이것은 이벤트 리스너를 붙인 것이 아닌, 컴포넌트에 onClick이라는 프롭을 전달한 것이다. 여기서 onClick은 단순히 props의 이름이다.결국 컴포넌트에 onClick 이벤트리스너를 붙이고 싶다면 해당 컴포넌트의 props으로 이벤트 리스너를 보내고, 그걸 받아오면 해당 컴포넌트의 최상단 엘리먼트에 onClick 이벤트 리스너를 붙이면 된다. 즉, 컴포넌트에는 HTML Element처럼 속성을 지정해줄 수 없다. 컴포넌트에 그러한 행위를 하는것은 그저 props를 전달해 주는 것 뿐

###### 불필요한 re-render는 React.memo()로 관리, 부모 컴포넌트의 state를 변경하면 당연히 그 자식 컴포넌트들도 Re-render가 일어남 불필요한 렌더링이 발생할 수도 있는데, 이 경우에는 React.memo()로 prop의 변경이 일어난 부분만 렌더링 시킬 수 있음. 아주 많은 자식 컴포넌트를 가지고 있는 부모 컴포넌트일 때 사용하면 될듯

###### React.memo() : 컴포넌트가 React.memo()로 wrapping 될 때, React는 컴포넌트를 렌더링하고 결과를 메모이징한다. 그리고 다음 렌더링이 일어날 때 props가 같다면 react는 메모이징된 내용을 재사용

##### 만약에 TypeScript로 리액트를 한다면 , 굳이 PropType을 안써도 된다.
