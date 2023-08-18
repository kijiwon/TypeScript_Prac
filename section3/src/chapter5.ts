// 타입 추론
// 타입이 정의되어 있지 않은 변수의 타입을 자동으로 추론하는 타입스크립트의 기능
// 변수의 초기값으로 타입을 추론
let a = 10;
let b = "hello";
let c = {
    id:1,
    name: "기지",
    profile: {
        nickname: "kiji",
    },
    urls:["https://kimkiji.com"],
};

let {id, name, profile} = c;
// 구조 분해 할당의 경우에도 타입 추론이 가능
let [one, two, three] = [1, "hello", true];

// 함수의 반환값 타입 추론도 가능
function func(){
    return "hello";
};
// 매개변수의 타입은 기본값에 따라 추론
function func2(message = "hello") {
    return "hello";
};

// 타입 추론이 불가능한 변수에는 암시적으로 any 타입이 추론됨
let d;
d = 10; // 값을 할당하고 나면 타입 추론이 됨
d.toFixed();

// 다른 타입의 값을 할당할 수 있음
d = "hello"; // 이 때의 변수 d는 string 타입으로 추론
d.toUpperCase();

// 이를 any 타입의 진화라고 함
// any 타입을 지정한 것이 아닌 암묵적으로 any 타입이 추론될 경우  
// 변수에 값을 할당하면 그 다음 라인부터 any 타입이 해당 값의 타입으로 변화한다.

// const로 선언한 변수
const num = 10; // 타입이 값(10)으로 추론됨
const str = "hello"; // 타입이 "hello"로 추론됨

let arr = [1, "string"]; // number 타입과 string 타입이 혼합된 유니온 타입으로 추론됨

