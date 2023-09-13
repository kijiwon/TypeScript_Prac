/**
 * 제네릭
 * 일반적인, 포괄적인
 * 제네릭 함수
 * -> 모든 타입에 두루두루 사용할 수 있는 범용적인 함수  
 * 제네릭 함수로 만들면 함수의 인수에 따라 반환값의 타입을 가변적으로 만들 수 있음 
 */

// 제네릭 함수
// T -> 타입 변수(타입을 담음)
function func<T>(value: T): T{
    return value;
};

// 함수를 호출할 때 타입 변수에 할당되는 타입이 인수에 따라 정의됨
let num = func(10);
let bool = func(true);
let str = func('string');

// 타입 변수에 할당되는 타입을 프로그래머가 명시할 수도 있음
// 명시 ❌
let arr1 = func([1, 2, 3]);
// 튜플 타입으로 정의하기
let arr2 = func<[number, number, number]>([1, 2, 3]);