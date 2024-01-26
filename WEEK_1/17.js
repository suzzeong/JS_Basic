// for, while => ~동안 : 반복문
// for (초기값; 조건식; 증감식) {
// }

// i라는 변수는 0부터 시작 -> 초기값
// i라는 변수가 10에 도달하기 전까지 계속 실행 -> 조건식
// i라는 변수는 한 사이클이 돌고 나면 1을 더함 -> 증감식
for (let i = 0; i < 10; i++) {
  console.log(i); // 0 1 2 3 4 5 6 7 8 9
}

// 배열과 for문은 짝꿍이다.
const arr = ["one", "two", "three", "four", "five"];
for (let i = 0; i < arr.length; i++) {
  console.log(i); // 0 1 2 3 4 5
  console.log(arr[i]); // one two three four five
}

// 예제) 0부터 10까지의 수 중에서 2의 배수만 console.log로 출력
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0 && i >= 2) {
    console.log(i);
  }
}

// for ~ in 문
// 객체의 속성을 출력하는 문법
let person = {
  name: "John",
  age: 30,
  gender: "male",
};

for (let key in person) {
  console.log(key); // name age gender
  console.log(person[key]); // John 30 male
}
