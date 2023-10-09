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