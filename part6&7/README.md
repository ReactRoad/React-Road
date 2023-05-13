## part6 Effects

##### state를 변경할 때 모ㄴ code들은 다시 실행, alwayssssss

##### useEffect는 두개의 argument를 가지는 function, 쉽게 말해서 우리 코드가 딱 한번만 실행될 수 있게 보호

##### state가 변화하던, 무슨 일이 일어나던 코드가 한번만 실행될 거라고 확신할 수 있음

##### 첫번째 argument는 딱 한번만 실행하고 싶은 코드

##### 두번째 argument는 마법 같은 친구 ,

##### useEffect(() => {console.log('SEARCH FOR', keyword);}, [keyword]); -> counter가 실행되도 대괄호 안에 keyword는 실행 되지 않음 !! 이 코드는 keyword가 변화할 때만 실행
