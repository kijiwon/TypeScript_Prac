// Any type
// 특정 변수와 타입을 확실히 모를때 사용할 수 있는 입입
let anyVar:any = 10;
anyVar = 'hello';
anyVar = true;
anyVar = {};
// anyVar = () => {};
// 메소드도 자유롭게 사용할 수 있음
anyVar.toUpperCase();
anyVar.toFixed();

// 타입이 정의된 변수에 할당할 수 있음
let num:number = 10;
num = anyVar;

// unknown type
let unknownVar:unknown;

unknownVar = "";
unknownVar = 10;
unknownVar = {};
unknownVar = ()=>{};

// 어떤 타입의 변수에 할당하거나 연산, 메소드를 사용하는 것은 불가능
// num = unknownVar;
// unknownVar+1;
// unknownVar.toFixed();

// typeof 연산자를 이용해 값을 활용
if(typeof unknownVar === 'number'){
    num = unknownVar;
}