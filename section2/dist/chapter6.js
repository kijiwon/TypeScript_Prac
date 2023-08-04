// Any type
// 특정 변수와 타입을 확실히 모를때 사용할 수 있는 입입
let anyVar = 10;
anyVar = 'hello';
anyVar = true;
anyVar = {};
// anyVar = () => {};
// 메소드도 자유롭게 사용할 수 있음
anyVar.toUpperCase();
anyVar.toFixed();
// 타입이 정의된 변수에 할당할 수 있음
let num = 10;
num = anyVar;
export {};
