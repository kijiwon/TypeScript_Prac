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


/**
 * 호출 시그니쳐
 * (콜 시그니쳐)
 */

type Operation2 = { // 자바스크립트에서 함수도 객체이기 때문에 객체를 정의하는 방법과 동일하게 정의
    (a: number, b: number): number;
    // 하이브리드 타입
   // 호출 시그니쳐를 이용할 때, 객체에 프로퍼티를 추가로 정의할 수 있음 -> 함수도 객체이기때문
   name: string;
};

const add2:Operation2 = (a,b) => a+b;
const sub2:Operation2 = (a, b) => a-b;
const multiply2:Operation2 = (a, b) => a*b;
const divide2:Operation2 = (a, b) => a/b;

// 함수처럼 호출 가능
add2(1, 2);

// 점 표기법으로 프로퍼티에 접근할 수 있음
add.name;