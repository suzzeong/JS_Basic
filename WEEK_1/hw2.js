// 어떤 정수들이 있습니다.
// 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와
// 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

let absolutes = [1, 2, 3];
let signs = [false, false, true];

function solution(absolutes, signs) {
  let result = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      result += absolutes[i];
    } else {
      result -= absolutes[i];
    }
  }

  return result;
}

console.log(solution(absolutes, signs));
