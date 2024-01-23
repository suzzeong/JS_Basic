// 함수 = function(기능)
// : input과 output을 가지고 있는 기능의 단위

// function (매개변수) {
//     // 함수 내부에서 실행할 로직
// }

// 1. 함수 선언문
// 두 개의 숫자를 입력받아서 덧셈을 한 후 내보내는 함수
function add(x, y) {
  // let result = x + y;
  // return result;
  return x + y;
}

// 함수를 호출한다(=사용한다)
// 함수명() -> add()
console.log(add(2, 3)); // 5

let functionResult = add(3, 4); // 할당 후, 찍어보기
console.log(functionResult); // 7

/*-----------------------------------------*/
// 2. 함수 표현식
let add2 = function (x, y) {
  return x + y;
};

// 예제) add2를 가지고 10과 20을 더한 값 출력하기
console.log(add2(10, 20)); // 30

let functionResult2 = add2(10, 20); // 할당 후, 찍어보기
console.log(functionResult2); // 30

// input : 함수의 input -> 매개변수(매개체가 되는 변수!)
// output : return문 뒤에 오는 값 -> 반환 값
