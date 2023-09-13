/**
 * 타입 변수 응용하기
 */

// 첫번째 사례
// 타입 변수 여러개 선언
function swap<T, U>(a: T, b:U){
    return [b, a];
};

// 인수의 타입이 다를때 오류 발생 => 타입 변수를 따로 선언
const [a, b] = swap("1", 2);




// 두번째 사례
// 타입 변수를 사용하면 함수가 호출되기 전까지는 unknown 타입으로 추론함
// -> unknown 타입에 배열 인덱스를 사용하려고 하면 오류가 발생
// => 데이터의 타입을 T[](T 배열)타입으로 설정
// function returnFirstValue<T>(data: T[]){
//     return data[0];
// };

// 인수가 유니온 타입의 경우
// 첫번째 요소 타입만 타입 변수로 받고 나머지는 unknown배열 타입으로 정의
function returnFirstValue<T>(data: [T, ...unknown[]]){
    return data[0];
};

let num = returnFirstValue([0, 1, 2]); // 0
let str = returnFirstValue(['hello', 'mynameis']); // hello
// 유니온 배열 타입의 인수를 전달한 경우
// (string | number)[] 타입으로 unio의 타입은 string|number 타입
// -> 0번째 인덱스인 요소만 반환하므로 첫 번째 요소의 타입만 설정하기
let unio = returnFirstValue([1, 'hello', 'mynameis']); // 1




// 세번째 사례
// T의 타입 제한하기
// 인수의 타입이 배열, 문자열, 객체 등으로 다양함
// -> length가 숫자 타입으로 존재하는지 제한하기
// T extends {length: number}
// => length가 숫자 타입으로 존재하는 객체를 확장해 T를 제한함
function getLength<T extends {length: number}>(data: T){
    return data.length;
};

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength('12345'); // 5

let var3 = getLength({length: 10}); // 10
