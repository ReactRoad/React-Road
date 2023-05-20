##### createReducer는 state mutate 가능
##### createReducer가 해주는 것은 switch, case를 사용할 필요없게 해주고

##### 왜? 리덕스에서는 push가 가능하냐면 immer 아래서 작동하기 때문

##### push는 아무것도 리턴하지 않아, 대신 state를 mutate해줌

##### filter는 state를 mutate하지 않음, filter는 새로운 array를 리턴

###### - createAction

###### - createReducer

###### - configureStore

###### - 최종보스 :: createSlice - 모든 코드를 캡슐화