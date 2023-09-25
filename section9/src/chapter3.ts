/**
 * infer
 * 조건부 타입에서 특정 타입을 추론하는 기능
 */

type FuncA= () => string;

type FuncB = () => number;

// 조건부 타입
type ReturnType<T> = T extends () => infer R? R : never;
// infer R -> 조건식을 참으로 만드는 타입을 추론하도록 동작
// () => string 일 때 R = string
// () => number 일 때 R = number

type A = ReturnType<FuncA>; // string

type B = ReturnType<FuncB>; // number

type C = ReturnType<number>; // never 추론이 불가능한 경우에는 거짓



/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R>? R : never;
// 조건 1. T는 프로미스 타입이어야 함
// 조건 2. 프로미스 타입의 결과값 타입을 반환해야 함

type PromiseA = PromiseUnpack<Promise<number>>;
// infer R -> number 
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// infer R -> string
// string