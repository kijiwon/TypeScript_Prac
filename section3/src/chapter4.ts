// 대수 타입
// -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입 존재

// 1. 합집합 - Union 타입
// | 으로 합집합을 표시
let a:string | number;
// string 타입과 number 타입을 모두 넣을 수 있음
a = 1;
a = "hello";

// boolean 타입의 값도 넣고 싶다면 추가하기
let b:string | number | boolean;

// 여러가지 요소를 갖는 배열의 타입도 합집합 타입으로 선언할 수 있다.
let arr :(number | string | boolean)[] = [1, "hello", true];

// 타입 별칭을 이용해 유니온 타입을 만들 수 있다.
// 여러개의 객체 타입의 유니온 타입도 정의할 수 있다.
type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
}

type Union1 = Dog | Person;
let union1: Union1 = {
    name:"",
    color: ""
};

let union2: Union1 = {
    name:"",
    language:""
};

let union3:Union1 = {
    name:"",
    color:"",
    language:""
};

// let union4:Union1 = {
//     name:"",
// };
// name 프로퍼티만 들어있는 union4는 Dog타입에도 Person 타입에도 속하지 않음
