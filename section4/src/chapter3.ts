/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a:A = () => 10;
let b:B = () => 10;

a = b;
// number타입은 number literal 타입의 슈퍼 타입으로 다운 캐스팅 불가능 
// b = a;
// 즉, 반환값끼리의 다운 캐스팅이 되면 안됨

// 기준2. 매개변수가 호환되는가?
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c:C = (value) => {};
let d:D = (value) => {};

// number literal 타입을 number 타입으로 업캐스팅이 왜 불가능?
// -> 매개변수의 타입을 기준으로 호환성을 판단할때는 업캐스팅의 경우 호환이 불가능하다고 평가
// c = d; // ❌
d = c;

// 매개변수가 객체 타입을 사용하는 예시
// Animal 타입이 Dog 타입의 슈퍼타입 <- 프로퍼티가 더 적기때문
type Animal = {
    name: string;
};

type Dog = {
    name: string;
    color: string;
};

let animalFunc = (animal:Animal) => {
    console.log(animal.name);
};
let dogFunc = (dog:Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

// animalFunc = dogFunc;
// 위 식을 표현해본다면
// 타입은 Animal 타입을 따르고
// 출력은 dogFunc의 본문을 따름
let testFunc = (animal:Animal) => {
    console.log(animal.name);
    // console.log(animal.color);
}
dogFunc = animalFunc;
// 타입은 Dog 타입을 따르고
// 출력은 animalFunc의 본문을 따름
let testFunc2 = (dog:Dog) => {
    console.log(dog.name);
}

// 2-2. 매개변수의 개수가 다를 때
// 단, 타입은 같아야함
type Func1 = (a:number, b:number) => void;
type Func2 = (a:number) => void;

let func1:Func1 = (a,b) => {};
let func2:Func2 = (a) => {};

// Func1 타입을 Func2 타입으로 취급 
func1 = func2;

// 할당하려는 쪽의 매개변수의 개수가 더 많은 쪽이면 호환 안됨
// func2 = func1;
