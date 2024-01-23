// falsy한 값, truthy한 값
// falsy: 0, "", null, undefined, NaN, false

if (0) {
  // main logic
  console.log("hello"); // 실행 X
}
if ("") {
  // main logic
  console.log("hello"); // 실행 X
}
if (null) {
  // main logic
  console.log("hello"); // 실행 X
}
if (undefined) {
  // main logic
  console.log("hello"); // 실행 X
}
if (NaN) {
  // main logic
  console.log("hello"); // 실행 X
}
if (false) {
  // main logic
  console.log("hello"); // 실행 X
}
if (true) {
  // main logic
  console.log("hello"); // hello
}
