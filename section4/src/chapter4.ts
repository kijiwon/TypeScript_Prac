/**
 * 함수 오버로딩
 * 자바스크립트애서는 지원❌ 타입스크립트에서만 지원
 * 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> ver1. 매개변수가 1개 => 이 매개변수에 20을 곱한 값 출력
 * -> ver2. 매개변수가 3개 => 이 매개변수를 다 더한 값을 출력 
 */

// 함수 오버로딩을 하기 위해서는 
// 함수에 어떤 버전들이 있는지 알려줘야함
// 함수 구현부가 없이 선언식만 써놓음 -> 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 함수의 실제 구현부 -> 구현 시그니쳐
// function func(){};

// 버전에 따라 다르게 동작하는 기능 만들기
// 구현 시그니쳐에도 매개변수를 정의해줘야함
function func(a: number, b?: number, c?: number){ // 모든 매개변수가 들어온다면 첫 번째 오버로드는 의미가 없음
   if(typeof b === 'number' && typeof c === 'number'){
    console.log(a + b + c);
   } else{
    console.log(a * 20);
   }
};
 
// 함수 호출하기
// func(); // ❌ -> 구현 시그니쳐는 오류가 발생하지 않았는데 왜? 오버로드 시그니쳐와 호환이 되야함 
func(1);
// func(1, 2); // ❌
func(1, 2, 3);
