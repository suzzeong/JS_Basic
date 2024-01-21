// 변수, 상수
// 메모리에 저장한다. 읽어들여서 재사용한다. 변수.

// [변수의 5가지 주요 개념]
// 변수 이름 : 지정된 값의 고유 이름
// 변수 값 : 변수에 저장된 값
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
// 변수 참조 : 변수에 할당된 값을 읽어오는 것

// 변수를 선언할 수 있는 3가지 방법: var, let, const

// 1. var : 재선언 가능
var myVar = "Hello World";
var myVar = "Test 1";
myVar = "GoodBye";
console.log(myVar); // GoodBye

// 2. let : 재선언 불가능
let myLet = "Hello World1";
// let myLet = "Test 2";
myLet = "GoodBye1";
console.log(myLet); // GoodBye1

// 3. const : 재선언 불가능, 재할당 불가능
const myConst = "Hello World2";
// const myConst = "Test 3";
// myConst = "GoodBye2";
console.log(myConst); // Hello World2
