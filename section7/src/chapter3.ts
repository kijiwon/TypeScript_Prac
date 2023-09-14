/**
 * map 메소드
 */

const arr = [1, 2, 3];
let newArr = arr.map((el) => el*2); // [2, 4, 6]

// 반환값의 타입이 인수의 타입과 다른 배열의 반환도 가능해야 함
// -> 타입 변수 2개 사용하기
function map<T, U>(arr: T[], callback: (item: T) => U){
    let result = [];
    for(let i=0; i<arr.length; i++){
        result.push(callback(arr[i]));
    }
    return result;
}

map(arr, (it)=>it*2);
map(['hi', 'hello'], (it)=> it.toUpperCase());
map(['123', '45'], (it)=> parseInt(it)); 
// -> 콜백함수의 반환값이 number타입이 됨
// T는 string 타입으로 들어오기 때문에 오류가 발생
// 하지만 map 메소드는 원본 배열 타입과 다른 타입의 배열로도 반환할 수 있어야 함
// => 타입 변수를 추가해 수정하기




/**
 * forEach
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it)); // [1, 2, 3]

// forEach 메소드 구현하기
// 콜백함수가 반환하는 값이 없으므로 void 타입으로 정의해도o
function forEach<T>(arr: T[], callback: (item: T) => void){
    for(let i=0; i<arr.length; i++){
        callback(arr[i]);
    };
};

forEach(arr2, (it) => console.log(it.toFixed())); // it -> number 타입
forEach(['123', '456'], (it) => console.log(it)); // it -> string 타입