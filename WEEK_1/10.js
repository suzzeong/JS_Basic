// 화살표 함수
// ES6 신문법
function add(x, y) {
  return x + y;
}

// 1-1. 기본적인 화살표 함수
let arrowFunc01 = (x, y) => {
  return x + y;
};

// 1-2. 한 줄로 (한 줄로 사용시, 중괄호 삭제 해야함!)
let arrowFunc02 = (x, y) => x + y;

/*-----------------------------------------*/
// 추가)
function testFunc(x) {
  return x;
}

// 화살표 함수로!
let arrowFunc03 = (x) => x;
