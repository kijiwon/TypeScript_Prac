// void 
// void -> 공허 -> 아무것도 없다.
// 아무것도 없음을 의미하는 타입

function func1():string {
    return "hello"
}

function func2():void{
    console.log("hello");
}

// 변수에도 void 타입을 정의할 수 있음
let a:void;
// a=1;
// a={};
// a="hello";
a=undefined;
// tsconfig.json의 strictNullChecks설정을 false로 하면 null을 담을 수 있음
// a=null;

// never
// never -> 존재하지 않는
// 불가능한 타입

// 무한루프를 타는 함수
function func3():never{
    while(true){}
}

// 의도적으로 오류를 발생시키는 함수 -> 반환값 없음
function func4():never{
    throw new Error();
}

// 변수에 정의할 시 any를 포함한 어떠한 타입의 값도 담을 수 없다.
let anyVar:any;
let b:never;
// b=1;
// b="hello";
// b={};
// b=undefined;
// b=anyVar;
// b=null