# Redux

- `Redux`는 애플리케이션의 `state`를 관리하는 데 도움이 되는 라이브러리입니다.
- `Redux`는 `state`가 한 곳에서만 변경되고 모든 컴포넌트에서 동기화되도록 보장하는 데 도움이 됩니다.
- `reducer`는 `state`를 관리하는 데 `action`, `reducer`, `store`라는 세 가지 주요 구성 요소를 사용합니다.
- `action`은 `state`를 변경하는 데 사용되는 이벤트입니다.
- `reducer`는 액션에 따라 `state`를 변경하는 데 사용되는 함수입니다.
- `store`는 `state`를 저장하고 액션에 응답하여`state`를 업데이트하는 데 사용되는 개체입니다.
- `Redux`는 액션을 만들고 `reducer`를 연결하고 `state`를 디버그하는 데 도움이 되는 도구 세트인 `redux Toolkit`을 사용합니다.
- `Redux`에는 액션이 발생할 때마다 호출되는 함수인 `subscribe`이 포함되어 있습니다.
- `subscribe`을 사용하여 컴포넌트를 `state` 변경에 알릴 수 있습니다.
- `subscribe`을 사용하여 컴포넌트를 최신 `state`로 유지할 수 있습니다.

# Redux ToolKit

- `createAction()` 함수는 `Redux`에서 사용되는 작업을 생성하는 데 사용할 수 있는 유틸리티 함수입니다.
- `createAction()` 함수는 작업의 유형과 작업에 전달될 데이터의 기본 유형을 입력으로 받습니다.
- `createAction()` 함수는 작업의 유형과 데이터를 포함하는 작업 개체를 반환합니다.
- `createReducer()` 함수는 `switch/case` 문 없이 `Redux reducer`를 작성하기 쉽게 만드는 도구입니다.
- `createReducer()` 함수는 초기 상태와 각 작업에 대한 핸들러를 가져옵니다.
- `createReducer()` 함수는 초기 상태와 각 작업의 결과로 생성된 새 상태를 반환합니다.
- `createReducer()` 함수는 `state`를 변경하는 대신 `state`를 변경하는 데 유용한 `Immer` 라이브러리를 사용합니다.
- `createSlice()` 함수는 `Redux` 슬라이스를 만드는 데 도움이 되는 도구입니다.
- `createSlice()` 함수는 이름, 초기 `state` 및 `reducer`를 가져옵니다.
- `createSlice()` 함수는 이름, 초기 `state` 및 `reducer`를 사용하여 `slice`를 반환합니다.
- `configureStore()` 함수는 `Redux` `store`를 만드는 데 도움이 되는 도구입니다.
- `configureStore()` 함수는 초기 `state`와 미들웨어를 가져옵니다.
- `configureStore()` 함수는 초기 `state`와 미들웨어를 사용하여 `store`를 반환합니다.
- `Redux` 개발자 도구는 `Redux` `store`를 디버그하는 데 도움이 되는 도구입니다.
- `Redux` 개발자 도구는 `Redux` `store`의 현재 `state`를 볼 수 있고 작업이 `state`에 어떤 영향을 미치는지 확인할 수 있습니다.
- `Redux` 개발자 도구는 `Redux` `store`를 디버그하는 데 유용한 도구입니다.
