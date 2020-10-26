## 화살표 함수

```javascript
// 기존
hello = function() {
  return "Hello World!";
}

// 일반함수
hello = () => {
  return "Hello World!";
}

```

- 값을 반환하는 경우에는 괄호 제거 할 수 있다.
```javascript
var hello;
hello = () => "Hello World!";
document.getElementById("demo").innerHTML = hello();
```

- 매개 변수가 있는 경우 괄호 안에 전달한다.
```javascript
var hello;
hello = (val) => "Hello " + val;
document.getElementById("demo").innerHTML = hello("Universe!");

// 매개 변수가 하나만 있는 경우에는 괄호 생략 가능
hello = val => "Hello " + val;

// 일반함수로
function hello(val){
	return "Hello" + val;
}

```

- this
   - 일반함수에서 this 키워드는 함수를 호출한 객체를 나타냄
   - 화살표 함수에서 this는 항상 화살표 함수를 정의한 객체를 나타냄

```javascript
var hello;

// 일반 함수 this는 함수를 호출하는 객체를 나타낸다.
hello = function() {
  document.getElementById("demo").innerHTML += this;
}
//버튼 클릭 이벤트
document.getElementById("btn").addEventListener("click", hello);

// => [object HTMLButtonElement] 출력 (객체)
```

```javascript
// 화살표 기능 this 는 기능의 소유자를 나타낸다.
hello = () => {
  document.getElementById("demo").innerHTML += this;
}
document.getElementById("btn").addEventListener("click", hello);

// => [object Window] 출력 (기능의 소유자)
```


- 그 외 화살표 함수 예제
```javascript
// ES5
var x = function(x, y) {
   return x * y;
}

// ES6
const x = (x, y) => x * y;
```
