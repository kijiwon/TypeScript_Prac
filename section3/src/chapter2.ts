// unknown 타입
// 모든 타입의 슈퍼 타입 => 모든 타입을 담을 수 있음
function unknownExam(){
    // 업캐스팅은 가능
    let a:unknown = 1;
    let b:unknown = "hello";
    let c:unknown = true;
    let d:unknown = null;
    let e:unknown = undefined;

   // 다운 캐스팅은 불가능
    let unknownVar:unknown;
    // let num:number = unknownVar;
    // let str:string = unknownVar; 
    // let bool:boolean = unknownVar;
    let any:any = unknownVar;
}

// never 타입
//모든 타입의 서브 타입 => 모든 집합의 부분 집합(공집합-> 아무것도 없다)
function neverExam(){
    function neverFunc():never{
        while(true){} // neverFunc 함수가 반환하는 것은 공집합임을 의미
    }

    // 업캐스팅 가능
    let num:number = neverFunc();
    let str:string = neverFunc();
    let bool:boolean = neverFunc();

    // 다운 캐스팅 불가능
    // let never1:never = 1;
    // let never2:never = "hello";
    // let never3:never = true;
    // let never4:never = null;
}

// void 타입
// return 값이 없는 함수의 반환값 타입을 명시할 때 사용
function voidExam(){
    function voidFunc():void{
        console.log("hello")
        return undefined; // undefined로 반환되므로 업캐스팅과 같은 의미
    }

    //  void 타입은 undefined 타입의 슈퍼 타입으로 업캐스팅이 가능
    let voidVar:void = undefined; 
}

// any 타입
function anyExam(){
    let unknownVar:unknown;
    let anyVar:any;
    let undefinedVar:undefined;
    let neverVar:never;

    // unknwon 타입의 다운 캐스팅이 가능
    anyVar = unknownVar;

    // 다운 캐스팅 가능
    undefinedVar = anyVar;
    
    // never 타입으로 다운 캐스팅은 불가능
    // neverVar = anyVar;
    
}