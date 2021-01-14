
- 프레젠테이셔널 컴포넌트, 컨테이너 컴포넌트 분리
   - 프레젠테이셔널 컴포넌트 : 상태관리가 이루어지지 않고, props를 받아와서 화면에 UI를 보여주기만 함 src/components
   - 컨테이너 컴포넌트 : 리덕스와 연동되어 있는 ㄴ컴포 넌트로 리덕스로부터 상태를 받아오기도 하고 리덕스 스토어에 액션을 디스패치하기도 함 src/containers

1. src/components : UI 만들기

2. src/moduels : 액션, 액션타입, 리듀서 만들기
   - Ducks 패턴

3. src/containers
connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
  - mapStateToProps : 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
  - mapDispatchToProps : 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수

const makeContainer = connect(mapStateToProps, mapDispatchToProps)
makeContainer(타깃 컴포넌트)

![a1](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcLoxki%2FbtqTwXwQZps%2F67sGZvEJw24MMa10bQov6K%2Fimg.jpg)
![a2](https://blog.kakaocdn.net/dn/oGDFe/btqTDKbWabX/nSuJpWj8xrJnlDR5GGBG2k/img.jpg)
![a3](https://blog.kakaocdn.net/dn/bbRpm4/btqTEMUVvI5/DZ9EpCqMQyZYZ84TZy6A41/img.jpg)
![a4](https://blog.kakaocdn.net/dn/rI79L/btqTEL9x6jf/kJfYLIiBZdxRl9rnWPFfW1/img.jpg)
ㅆㅃ너무어려움...내가이걸이해할수잇을까????/ ,.. ㅡㅡ 
