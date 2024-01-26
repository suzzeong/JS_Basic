// 배열

// 1. 생성
// 1-1. 기본 생성
let fruits = ["사과", "바나나", "오렌지"];

// 1-2. 크기 지정
let number = new Array(5);

console.log(fruits); // [ '사과', '바나나', '오렌지' ]
console.log(fruits.length); // 3
console.log(number); // [ <5 empty items> ]
console.log(number.length); // 5

// 2. 요소 접근
console.log(fruits[0]); // 사과
console.log(fruits[1]); // 바나나
console.log(fruits[2]); // 오렌지

// 3. 배열 메소드
// 3-1. push : 마지막 요소 뒤에 새로운 요소 추가
let fruits1 = ["사과", "바나나"];
fruits1.push("오렌지");

console.log(fruits1); // [ '사과', '바나나', '오렌지' ]

// 3-2. pop : 마지막 요소가 삭제
let fruits2 = ["사과", "바나나"];
fruits2.pop();

console.log(fruits2); // [ '사과' ]

// 3-3. shift : 첫번째 요소가 삭제
let fruits3 = ["사과", "바나나", "키위"];
fruits3.shift();

console.log(fruits3); // [ '바나나', '키위' ]

// 3-4. unshift : 첫번째 요소에 새로운 요소 추가
let fruits4 = ["사과", "바나나", "키위"];
fruits4.unshift("포도"); // [ '포도', '사과', '바나나', '키위' ]

console.log(fruits4);

// 3-5. splice : start요소에서 deleteCount만큼 삭제하고 items를 추가
// Array<string>.splice(start: number, deleteCount: number, ...items: string[]): string[]
let fruits5 = ["사과", "바나나", "키위"];
fruits5.splice(1, 1, "포도");

console.log(fruits5); // [ '사과', '포도', '키위' ]

// 3-6. slice : start요소에서 end까지 새로운 배열로 반환
// Array<string>.slice(start?: number | undefined, end?: number | undefined): string[]
let fruits6 = ["사과", "바나나", "키위"];
let slicedFruits = fruits6.slice(1, 2);

console.log(slicedFruits); // [ '바나나' ]

// 4. forEach, map, filter, find
// 4-1. forEach
let numbers = [4, 1, 5, 4, 5];

// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
numbers.forEach(function (item) {
  console.log(item); // 4 1 5 4 5
});

// 4-2. map : 항상 원본 배열의 길이만큼 반환
let mapNumbers = numbers.map(function (item) {
  return item * 2;
});
// let mapNumbers = numbers.map((item) => {
//   return item * 2;
// });
// let mapNumbers = numbers.map((item) => item * 2);

console.log(mapNumbers); // [ 8, 2, 10, 8, 10 ]

// 4-3. filter : return에 조건이 들어가서 새로운 배열로 반환
let numbers1 = [4, 1, 5, 4, 5];
let filterNumbers = numbers1.filter(function (item) {
  return item > 3;
});

console.log(filterNumbers); // [ 4, 5, 4, 5 ]

// 4-4. find : return의 조건에 맞는 첫번째 요소만 반환
let numbers2 = [4, 1, 5, 4, 5];
let findNumbers = numbers2.find((item) => {
  return item > 3;
});

console.log(findNumbers); // 4
