/**
 * Exclude<T, U>
 * 제외하다, 추방하다
 * -> T에서 U를 제거하는 타입
 */

// Exclude 직접 구현하기
type Exclude<T, U> = T extends U? never : T;
// 타입 Exclude는 타입 변수 T, U를 받아 T가 U의 확장이라면 never, 아니면 T
// 1단계
// Exclude<string, boolean> |
// Exclude<boolean, boolean>

// 2단계
// string |
// never

// 결과
// string <- never는 공집합이므로 합집합의 결과는 string

type A = Exclude<string | boolean, boolean>
// 타입 A는 string| boolean에서 boolean 타입을 제거한 타입
// => string 타입




/**
 * Extract<T, U>
 * 추출하다, 뽑아내다
 * -> T에서 U를 추출하는 타입
 */

// Extract 직접 구현하기
type Extract<T, U> = T extends U? T : never;
// 타입 Extract는 타입 변수 T, U를 받아 T가 U의 확장이라면 T, 아니면 never
// 1단계
// Extract<string, boolean> |
// Extract<boolean, boolean>

// 2단계
// never |
// boolean

// 결과
// boolean <- never는 공집합이므로 합집합의 결과는 string

type B = Extract<string | boolean, boolean>;
// 타입 B는 string | boolean 에서 boolean 타입을 뽑아낸 타입
// -> boolean 타입




/**
 * ReturnType<T>
 * 함수의 반환값 타입을 추출하는 타입
 */


// ReturnType 직접 구현하기
type ReturnType<T extends (...arg: any)=> any> = T extends (
    ...arg: any
) => infer R ? R : never;
// T에는 함수 타입만 들어올 수 있음
// 매개변수 타입은 any로 설정
// 반환값 타입은 추론해야함 -> infer 사용
// R로 추론했을 때 참인경우 R, 거짓인 경우 never

// 동작 방식
// 1. ReturnType<typeof funcA>
// -> funcA의 타입을 T에 전달 => string
// 2. T가 R의 서브타입이 되도록 추론하기
// => R은 string


function funcA(){
    return 'hello';
};

function funcB(){
    return 10;
};

type ReturnA = ReturnType<typeof funcA>;
// funcA의 반환값 타입은 string
// -> 타입 ReturnA는 string 타입

type ReturnB = ReturnType<typeof funcB>;
// funcB의 반환값 타입은 number
// -> 타입 ReturnB는 number 타입