// 1. while

// 1-1. while
let i = 0;
// while (조건) {
//   // 메인로직
//   // 증감
// }

while (i < 10) {
  console.log(i); // 0 1 2 3 4 5 6 7 8 9
  i++;
}

// 예제) while문을 활용해서, 3초과 100미만의 숫자 중 5의 배수인 것만 출력
let j = 3;
while (j < 100) {
  if (j % 5 === 0 && j >= 5) {
    console.log(j); // 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95
  }
  j++;
}

// 1-2. do ~ while
let k = 0;
do {
  console.log(k); // 0 1 2 3 4 5 6 7 8 9
  k++;
} while (k < 10);

for (let l = 0; l < 10; l++) {
  if (l === 5) {
    // break;
    continue;
  }
  //   console.log(l); // break -> 0 1 2 3 4
  console.log(l); // continue -> 0 1 2 3 4 5 6 7 8 9
}
