# JavaScript 기초 문법 공부 레포지토리
이 레포지토리는 JavaScript 기초 문법에 대한 학습 내용을 담고 있습니다.

## 1주차

<details>
  <summary><strong>1. 변수와 상수: `var`, `let`, `const`</strong></summary>

#### 1-1. `var`
- **선언 키워드:** `var`
- **특징:** 함수 스코프를 가지고 있어 함수 내에서 선언된 변수는 함수 내에서만 유효하며 블록 스코프를 무시합니다.
- **사용 예제:**
  ```javascript
  var x = 10;
  if (true) {
    var y = 20;
    console.log(x); // 10
  }
  console.log(y); // 20

#### 1-2. `let`
- **선언 키워드:** `let`
- **특징:** 블록 스코프를 가지고 있어 블록 내에서 선언된 변수는 블록 내에서만 유효합니다.
- **사용 예제:**
  ```javascript
  let a = 30;
  if (true) {
    let b = 40;
    console.log(a); // 30
  }
  // console.log(b); // Error: b is not defined
  
#### 1-3. `const`
- **선언 키워드:** `const`
- **특징:** 상수를 선언하는 키워드로, 한 번 값을 할당하면 변경할 수 없습니다. 블록 스코프를 가집니다.
- **사용 예제:**
    ```javascript
    const PI = 3.14;
    // PI = 3.14159; // Error: Assignment to a constant variable

</details>

<details>
  <summary><strong>2. 데이터 타입: 숫자</strong></summary>

- 숫자 데이터 타입은 정수와 소수를 모두 포함하며, 다양한 수학적 연산이 가능합니다.
    ```javascript
    // 숫자 데이터 타입 예제
    let integerNumber = 42; // 정수
    let floatingPointNumber = 3.14; // 소수
    let result = integerNumber + floatingPointNumber; // 숫자 간 덧셈 연산

</details>

<details>
  <summary><strong>3. 데이터 타입: 문자</strong></summary>

#### 3-1. 문자열 생성
- JavaScript에서는 따옴표(단일 또는 이중)를 사용하여 문자열을 생성할 수 있습니다.
    ```javascript
    let singleQuotes = 'Hello, World!';
    let doubleQuotes = "Hello, World!";
    
#### 3-2. 문자열 연산
- 문자열은 + 연산자를 사용하여 연결(concatenate)할 수 있습니다.
    ```javascript
    let greeting = "Hello";
    let name = "John";
    let message = greeting + ", " + name + "!";
    // 결과: "Hello, John!"
    
#### 3-3. 문자열 길이
- length 속성을 사용하여 문자열의 길이를 얻을 수 있습니다.
    ```javascript
    let str = "JavaScript";
    let length = str.length; // 결과: 10

#### 3-4. 문자열 인덱싱과 추출
- 문자열은 각 문자에 대한 인덱스를 가지고 있으며, 이를 사용하여 특정 위치의 문자를 추출할 수 있습니다.
    ```javascript
    let str = "Hello";
    let firstChar = str[0]; // 결과: "H"
    let thirdChar = str[2]; // 결과: "l"

#### 3-5. 부분 문자열 추출
- substring() 메서드를 사용하여 부분 문자열을 추출할 수 있습니다.
    ```javascript
    let str = "JavaScript";
    let substr = str.substring(4, 8); // 결과: "Script"

#### 3-6. 문자열 검색
- indexOf() 메서드를 사용하여 특정 문자 또는 부분 문자열의 인덱스를 찾을 수 있습니다.
    ```javascript
    let str = "Hello, World!";
    let index = str.indexOf("World"); // 결과: 7

#### 3-7. 문자열 대/소문자 변환
- toUpperCase()와 toLowerCase() 메서드를 사용하여 문자열의 대문자 또는 소문자로 변환할 수 있습니다.
    ```javascript
    let str = "JavaScript";
    let upperCaseStr = str.toUpperCase(); // 결과: "JAVASCRIPT"
    let lowerCaseStr = str.toLowerCase(); // 결과: "javascript"

</details>

<details>
  <summary><strong>4. 데이터 타입: 불리언, `undefined`, `null`, object, array</strong></summary>

#### 4-1. 불리언 (Boolean)
- 불리언 데이터 타입은 `true`와 `false` 두 가지 값 중 하나를 가집니다. 주로 조건문과 논리 연산에서 사용됩니다.
    ```javascript
    let isTrue = true;
    let isFalse = false;

#### 4-2. undefined
- undefined는 값이 할당되지 않은 변수의 초기 상태를 나타냅니다.
    ```javascript
    let undefinedVariable;
    console.log(undefinedVariable); // 출력: undefined

#### 4-3. null
- null은 명시적으로 값이 없음을 나타냅니다. 변수에 명시적으로 null을 할당하여 사용할 수 있습니다.
    ```javascript
    let nullValue = null;

#### 4-4. 객체 (Object)
- 객체는 여러 속성(key-value 쌍)을 포함하는 데이터 구조입니다. 속성은 다양한 데이터 타입일 수 있습니다.
    ```javascript
    let person = {
      name: "John",
      age: 30,
      isStudent: false
    };
    
#### 4-5. 배열 (Array)
- 배열은 여러 값을 순서대로 저장하는 데이터 구조입니다. 각 값은 인덱스를 통해 접근할 수 있습니다.
    ```javascript
    let fruits = ["apple", "banana", "orange"];

</details>

<details>
  <summary><strong>5. 형변환: 암시적, 명시적</strong></summary>

#### 5-1. 암시적 형변환
- 자바스크립트 엔진이 자동으로 데이터 타입을 변환하는 것을 의미합니다.
- 주로 연산자를 사용할 때 발생하며, 예를 들어 문자열과 숫자를 더할 때 문자열로 변환됩니다.
  ```javascript
  const num = 5;
  const str = "10";
  const result = num + str; // 암시적 형변환 발생, result 값은 "510"
  
#### 5-2. 명시적 형변환
- 개발자가 의도적으로 데이터 타입을 변환하는 것을 명시적 형변환이라고 합니다.
- Number(): 숫자로의 명시적 형변환
- String(): 문자열로의 명시적 형변환
- Boolean(): 불리언으로의 명시적 형변환
  ```javascript
  let strNumber = "123";
  let numFromStr = Number(strNumber); // 문자열 "123"을 숫자로 명시적 형변환

</details>

<details>
  <summary><strong>6. 연산자</strong></summary>

#### 6-1. 산술 연산자
1. **더하기 연산자 (+)**
   - 두 숫자를 더하는 연산을 수행합니다.
     ```javascript
     let sum = 5 + 3; // 결과: 8
     ```

2. **빼기 연산자 (-)**
   - 첫 번째 숫자에서 두 번째 숫자를 뺀 연산을 수행합니다.
     ```javascript
     let difference = 7 - 4; // 결과: 3
     ```

3. **곱하기 연산자 (*)**
   - 두 숫자를 곱하는 연산을 수행합니다.
     ```javascript
     let product = 2 * 6; // 결과: 12
     ```

4. **나누기 연산자 (/)**
   - 첫 번째 숫자를 두 번째 숫자로 나눈 결과를 반환합니다.
     ```javascript
     let quotient = 10 / 2; // 결과: 5
     ```

5. **나머지 연산자 (%)**
   - 첫 번째 숫자를 두 번째 숫자로 나눈 나머지를 반환합니다.
     ```javascript
     let remainder = 9 % 4; // 결과: 1
     ```

#### 6-2. 할당 연산자

1. **등호 연산자 (`=`)**
   - 변수에 값을 할당하는 기본적인 할당 연산자입니다.

     ```javascript
     let x = 10; // 변수 x에

2. **더하기 등호 연산자 (`+=`)** 
   - 현재 변수의 값에 특정 값을 더하고 그 결과를 변수에 다시 할당합니다.

     ```javascript
     let y = 5;
     y += 3; // 변수 y에 현재 값에 3을 더한 결과를 할당 (y = y + 3)
     ```

3. **빼기 등호 연산자 (`-=`)**
   - 현재 변수의 값에서 특정 값을 빼고 그 결과를 변수에 다시 할당합니다.

     ```javascript
     let z = 8;
     z -= 2; // 변수 z에 현재 값에서 2를 뺀 결과를 할당 (z = z - 2)
     ```

4. **곱하기 등호 연산자 (`*=`)**
   - 현재 변수의 값에 특정 값을 곱하고 그 결과를 변수에 다시 할당합니다.

     ```javascript
     let a = 4;
     a *= 6; // 변수 a에 현재 값에 6을 곱한 결과를 할당 (a = a * 6)
     ```
     
#### 6-3. 비교 연산자

1. 일치 연산자 (===)
- 데이터 값과 데이터 타입이 동일한 경우에 true를 반환하는 연산자입니다.

2. 불일치 연산자 (!==)
- 데이터 값이나 데이터 타입 중 하나 이상이 다른 경우에 true를 반환하는 연산자입니다.

3. 작다 연산자 (<), 작거나 같다 연산자 (<=), 크다 연산자 (>), 크거나 같다 연산자 (>=)
- 작다 연산자 (<): 좌항이 우항보다 작은 경우 true를 반환하는 연산자입니다.
- 작거나 같다 연산자 (<=): 좌항이 우항보다 작거나 같은 경우 true를 반환하는 연산자입니다.
- 크다 연산자 (>): 좌항이 우항보다 큰 경우 true를 반환하는 연산자입니다.
- 크거나 같다 연산자 (>=): 좌항이 우항보다 크거나 같은 경우 true를 반환하는 연산자입니다.

#### 6-4. 논리 연산자
- **논리곱 연산자 (&&) :** 모두 true일 때, true 반환
- **논리합 연산자 (||) :** 두 값 중 하나라도 true인 경우 true 반환
- **논리부정 연산자 (!)**

#### 6-5. 삼항 연산자
- 조건에 따라 다른 값을 반환하는 삼항 연산자를 학습합니다.

#### 6-6. 타입 연산자
- 변수나 표현식의 데이터 타입을 반환하는 typeof 연산자에 대해 알아봅니다.

</details>


<details>
<summary>7. 함수</summary>

#### 1. **함수 선언문**
   - 두 개의 숫자를 입력받아 덧셈을 수행하는 함수
     ```javascript
     function addNumbers(num1, num2) {
       return num1 + num2;
     }
     ```

#### 2. **함수 표현식**
   - 더하기 기능을 수행하는 함수를 함수 표현식으로 정의
     ```javascript
     const addFunction = function(num1, num2) {
       return num1 + num2;
     };
     ```

</details>


<details>
<summary>8. 스코프</summary>

스코프는 변수의 유효 범위를 나타냅니다. JavaScript에서는 블록 스코프와 함수 스코프가 있습니다.

- **블록 스코프:** `let`과 `const`로 선언된 변수는 블록({}) 내에서만 유효합니다.
  ```javascript
  if (true) {
    let blockScopedVar = 10;
    const constVar = 20;
  }
  console.log(blockScopedVar); // 에러: blockScopedVar is not defined

- **함수 스코프:** 함수 스코프는 함수 내에서 선언된 변수가 함수 외부에서 접근할 수 없는 것을 의미합니다.
   ```javascript
  function exampleFunction() {
    var functionScopedVar = "Hello, Function Scope!";
    console.log(functionScopedVar);
  }
  
  console.log(functionScopedVar); // 에러: functionScopedVar is not defined

</details>


<details>
<summary>9. 전역변수, 지역변수</summary>
  
#### 9-1. 전역변수
- 전역변수는 프로그램 전체에서 접근 가능한 변수를 의미합니다. 전역변수는 어디서든지 호출이 가능하며, 주의가 필요한 부분이 있습니다.
  ```javascript
  // 전역변수 예제
  let globalVariable = "I am a global variable";
  
  function exampleFunction() {
    console.log(globalVariable); // 전역변수 호출 가능
  }

#### 9-2. 지역 변수
- 지역 변수는 함수 내에서 선언된 변수로, 해당 함수 내에서만 유효한 범위를 갖습니다. 함수 내부에서 선언되어 함수가 종료되면 소멸하게 됩니다.
  ```javascript
  function exampleFunction() {
    let localVar = "This is a local variable";
    console.log(localVar);
  }
  
  exampleFunction(); // 함수 호출
  // console.log(localVar); // 오류: localVar는 함수 외부에서 접근 불가

</details>


<details>
<summary>10. 화살표 함수</summary>

- JavaScript에서 화살표 함수는 ES6에서 도입된 새로운 함수 표현식입니다. 간결한 문법과 특정 상황에서의 유용한 특성을 제공합니다.

#### 10-1. 기본 구문
- 화살표 함수의 기본 구문은 다음과 같습니다:
  ```javascript
  const add = (a, b) => {
    return a + b;
  };

#### 10-2. 단축 구문
- 만약 함수가 한 줄로 간결하다면 중괄호와 return 키워드를 생략할 수 있습니다.
  ```javascript
  const multiply = (a, b) => a * b;

#### 10-3. 매개변수가 하나인 경우
- 매개변수가 하나인 경우 괄호를 생략할 수 있습니다.
  ```javascript
  const square = x => x * x;

</details>


<details>
<summary>11. 조건문 if 문</summary>

- JavaScript에서 조건문은 주어진 조건에 따라 코드를 실행하거나 건너뛸 수 있는 구조를 제공합니다.

#### 11-1. `if` 문
- `if` 문은 주어진 조건이 `true`인 경우에만 코드 블록을 실행합니다.
  ```javascript
  // if문
  if (조건) {
    // 조건이 true일 때 실행되는 코드 블록
  }

#### 11-2. `if-else` 문
- `if-else` 문은 주어진 조건이 참일 때와 거짓일 때 각각 다른 코드 블록을 실행합니다.
  ```javascript
  if (조건) {
    // 조건이 참일 때 실행되는 코드
  } else {
    // 조건이 거짓일 때 실행되는 코드
  }

#### 11-3. `if-else if-else` 문
- `if-else if-else` 문은 여러 조건을 순차적으로 검사하며, 처음으로 참이 되는 조건의 코드 블록을 실행합니다.
  ```javascript
  if (조건1) {
    // 조건1이 참일 때 실행되는 코드
  } else if (조건2) {
    // 조건1이 거짓이고 조건2가 참일 때 실행되는 코드
  } else {
    // 모든 조건이 거짓일 때 실행되는 코드
  }

</details>


<details>
<summary>12. 조건문의 중첩</summary>
  
- 조건문의 중첩은 여러 개의 조건문을 조합하여 복잡한 조건을 다룰 때 사용됩니다.
  ```javascript
  // 중첩된 if 문
  let num = 25;
  
  if (num > 0) {
    if (num % 2 === 0) {
      console.log("양수이면서 짝수");
    } else {
      console.log("양수이면서 홀수");
    }
  } else {
    console.log("음수이거나 0");
  }

</details>


<details>
<summary>13. 조건부 실행</summary>

#### 13-1. AND 조건(&&)
- AND 조건(`&&`)은 두 개의 조건이 모두 참일 때에만 실행됩니다. 만약 첫 번째 조건이 거짓이면 두 번째 조건은 확인되지 않습니다.
  ```javascript
  let x = 10;
  
  // x가 양수일 때에만 실행
  x > 0 && console.log("x는 양수입니다."); // x는 양수입니다.

#### 13-2. OR 조건(||)
- 삼항 연산자와 단축평가
  ```javascript
  let y; // y에는 undefined
  let z = y || 20;
  
  // y가 falsy일 때 20을 할당
  console.log(z); // 20

</details>


<details>
<summary>14. Falsy한 값과 Truthy한 값</summary>

- Falsy한 값은 조건문에서 거짓으로 간주되는 값이며, Truthy한 값은 조건문에서 참으로 간주되는 값입니다.

#### 14-1. Falsy한 값
다음은 주로 Falsy한 값으로 간주되는 값들입니다:
- `0`: 숫자 0
- `""`: 빈 문자열
- `null`: 값이 없음을 나타내는 특별한 값
- `undefined`: 변수에 값이 할당되지 않았을 때의 기본 값
- `NaN`: 숫자가 아님을 나타내는 값
- `false`: 불리언 값 false

#### 14-2. Truthy한 값
Falsy한 값이 아닌 경우는 모두 Truthy한 값으로 간주됩니다.

</details>
