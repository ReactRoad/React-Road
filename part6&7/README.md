## part6 Effects

##### state를 변경할 때 모ㄴ code들은 다시 실행, alwayssssss

##### useEffect는 두개의 argument를 가지는 function, 쉽게 말해서 우리 코드가 딱 한번만 실행될 수 있게 보호

##### state가 변화하던, 무슨 일이 일어나던 코드가 한번만 실행될 거라고 확신할 수 있음

##### 첫번째 argument는 딱 한번만 실행하고 싶은 코드, 아무것도 없는(비어있는) []

##### 두번째 argument는 마법 같은 친구(dependencies)-> react.js가 지켜보아야 하는 것들

##### useEffect(() => {console.log('SEARCH FOR', keyword);}, [keyword]); -> counter가 실행되도 대괄호 안에 keyword는 실행 되지 않음 !! 이 코드는 keyword가 변화할 때만 실행

##### 배열이기 때문에 [] 안에 원한는 state 여러가지 합칠 수 있음

### useEffect-> state를 변화시킬 때 component를 재실행시키는 것, 언제 코드를 실행할 지 선택권을 가질 수 있음

##### return () => console.log('destroyed 🥲'); -> clean up function

##### 정리(clean-up)를 이용하는 Effects

##### 위에서 정리(clean-up)가 필요하지 않은 side effect를 보았지만, 정리(clean-up)가 필요한 effect도 있음

##### 외부 데이터에 구독(subscription)을 설정해야 하는 경우, 이런 경우에 메모리 누수가 발생하지 않도록 정리(clean-up)하는 것은 매우 중요

##### effect에서 함수를 반환하는 이유는 무엇일까요?

##### 이는 effect를 위한 추가적인 정리(clean-up) 메커니즘

##### 모든 effect는 정리를 위한 함수를 반환

##### React가 effect를 정리(clean-up)하는 시점은 정확히 언제일까요?

##### React는 컴포넌트가 마운트 해제되는 때에 정리(clean-up)를 실행합니다. 하지만 위의 예시에서 보았듯이 effect는 한번이 아니라 렌더링이 실행되는 때마다 실행됩니다. React가 다음 차례의 effect를 실행하기 전에 이전의 렌더링에서 파생된 effect 또한 정리하는 이유가 바로 이 때문입니다.

## part7

### to-do-list

##### const food = [1,2,3,4]

##### [6, food] -> [6, Array(4)]0: 61: (4) [1, 2, 3, 4]length: 2[[Prototype]]: Array(0)

##### [6,...food] -> [6, 1, 2, 3, 4]

##### setToDos((currentArray) => [toDo, ...currentArray]); -> 함수 매개변수로 전달되는 배열 객체의 참조(reference)가 전달

### coin tracker

##### coin api에는 이미 key가 있으므로 없어도 됨, setCoins(json)이 호출되어서 coins의 상태 변수가 업데이트되고 이전 값에서 새로운 값으로 변경

##### coins에서 원하는 데이터만 뽑기 위해 coins.map((coin)=> {coin.name} ({coin,symbol}):${coin.quotes.USD.price}USD)의 데이터만 묶어서 보여줌

### 챌린지! USD -> BTC로 바꾸기!!!

### finally Movie!!!!!

##### Moive api 가져와서 브라우저 화면에 출력!

##### Routes와 components 폴더 생성 후 파일을 나눔
