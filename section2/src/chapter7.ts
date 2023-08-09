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