/**
 * 함수 타입 표현식
 * 함수 타입을 타입 별칭과 함께 별도로 정의할 수 있음
 */

// type Add = (a:number, b:number) => number;
// const add:Add = (a, b):number => a+b;

// 함수 타입 표현식을 사용하면 좋은 예
// 여러개의 함수가 동일한 타입을 갖는 경우
type Operation = (a:number, b:number) => number;

const add:Operation = (a,b) => a+b;
const sub:Operation = (a, b) => a-b;
const multiply:Operation = (a, b) => a*b;
// 함수 타입 표현식이 반드시 타입 별칭과 함께 사용되어야 하는 것은 아님
// 타입 주석에 사용해도 문제 없음
const divide:(a:number, b:number) => number = (a, b) => a/b;