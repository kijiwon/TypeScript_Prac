// 타입 단언

// 특정 타입으로 정의된 변수에 빈 객체를 넣어두고 나중에 그 값을 넣고싶은 경우
type Person = {
    name:string;
    age:number;
}
// let person:Person = {} // 빈 객체를 넣는 경우 에러 발생 
// person의 프로퍼티를 나중에 초기화하고 싶은 경우
// Person타입을 선언해주지 않으면 나중에 프로퍼티를 초기화할 때 에러 발생
// let person ={};
// // 초기값인 빈 객체를 기준값으로 추론하기 때문
// person.name = "kiji";
// person.age = 27;

// 초기화값의 타입을 단언해주면 에러가 발생하지 않음
// as 키워드를 사용해 뒤애 타입을 명시
let person = {} as Person;
person.name = "kiji";
person.age = 27;

// 초과 프로퍼티 검사 피하기
type Dog = {
    name:string;
    color:string;
};

// let dog: Dog={
//     name: "만복이",
//     color: "brown",
//     bread: "진도"
// }
let dog={
    name: "만복이",
    color: "brown",
    bread: "진도"
} as Dog;

// 타입 단언의 규칙
// 값 as 타입 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나 
// A가 B의 서브타입이어야 함
let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string;
// 위 식을 오류가 없이 사용하는 방법
// 다중단언으로 중간에 모든 타입의 슈퍼타입을 단언하면 오류발생안함
// 하지만 매우 좋지 않은 방식
let num4 = 10 as unknown as string;

// const 단언
// const로 선언한 것과 동일한 효과를 가짐
let num5 = 10 as const;

// 객체의 프로퍼티는 readonly가 됨
let cat = {
    name: "냥복이",
    color: "yellow"
} as const;
// cat.name = "";

// Non Null 단언
// 어떤 값이 null 이나 undefined이 아니라는 것을 컴파일러에게 알려줌

type Post = {
    title:string;
    author?:string; // author 프로퍼티의 값이 없을 수도 있다는 것을 의미 
}

let post:Post = {
    title: "게시글1",
    author: "kiji"
}

// author 프로퍼티의 값의 길이 가져오기
// const len: number = post.author?.length;
// author 뒤의 ?가 자동으로 붙음 -> ?는 옵셔널 체이닝

// ?대신 !를 붙여 Non Null 단언을 사용
const len1: number = post.author!.length;