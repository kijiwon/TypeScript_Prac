/**
 * 합수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number){
    // 반환값의 타입은 return문을 추론하여 자동으로 설정되기 때문에 따로 선언하지 않아도 됨
    return a+b;
};

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a:number, b:number) => a + b; // 화살표함수의 반환값 또한 자동으로 추론되기 때문에 따로 작성하지 않아도 됨

/**
 * 함수의 매개변수
 */

function introduce(name = "kiji", age:number , tall?:number){
    console.log(`name: ${name}`);
    console.log(`tall: ${tall}`);
};

introduce('kiji', 168);
// tall을 선택적 매개변수로 만들면 인수를 하나만 넣어도 됨
introduce('kiji', 28);

// 주의점
// 다른 타입의 값을 인수로 전달하면 오류 발생
// function introduce(name:number = "kiji"){
//     console.log(`name: ${name}`);
// }
// 자동추론된 매개변수의 타입과 다른 타입의 인수를 전달하면 오류발생
// introduce(1);

// 나머지 매개변수
// 들어오는 인수를 모두 더한 값을 리턴하는 함수
function getSum(...rest:number[]){ // rest파라미터를 이용해 매개변수를 선언
    let sum = 0;
    rest.forEach((el)=> (sum+=el));
    return sum;
}

// 튜플 타입으로 매개변수의 길이를 고정할 수 있음
// function getSum(...rest: [number, number, number]) {
//     let sum = 0;
//     rest.forEach((it) => (sum += it));
//     return sum;
// }
  
getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);