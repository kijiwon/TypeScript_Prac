/**
 * 조건부 타입
 * 삼항연산자(?)를 이용해 조건에 따라 타입을 결정하는 문법
 */

type A = number extends string? string : number;
// numebr는 string를 확장하는 타입(서브타입)이 아님 -> number 타입으로 정의

type ObjA = {
    a: number;
}

type ObjB = {
    a: number;
    b: number;
}

type B = ObjB extends ObjA? number : string;
// objB는 objA를 확장한 타입 -> number 타입으로 정의



// 조건부 타입은 제네릭과 함께 쓸 때 더 활용할 수 있음
/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number? string : number;

let varA: StringNumberSwitch<number>; // number 타입으로 정의
let varB: StringNumberSwitch<string>; // string 타입으로 정의

// 오버로드 시그니쳐 사용하기
// 구현 시그니쳐 내부에서 추론이 가능함
function removeSpaces<T>(text: T): T extends string? string : undefined;
function removeSpaces(text: any) {
    if(typeof text === 'string'){
        return text.replaceAll(' ','');
        // return text.replaceAll(' ','')as any;
        // 조건부 타입의 결과를 함수 내부에서 알 수 없음 -> 타입 단언 이용하기 
        // 하지만 as any의 사용은 좋지 않음 -> 함수 오버로딩 구현하기
    } else{
        return undefined;
    }
}

let result = removeSpaces('hi im kiji');
result.toUpperCase();

let result2 = removeSpaces(undefined);