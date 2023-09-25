/**
 * 분산적인 조건부 타입
 * 유니온 타입과 함께 사용할 때 조건부 타입이 분산적으로 동작하게 하는 문법
 */
type StringNumberSwitch<T> = T extends number? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;


let c: StringNumberSwitch<number | string>;
// T는 number 타입의 슈퍼타입이 됨 -> 거짓이 되므로 number 타입이 되어야함
// 하지만 c는 string | number 유니온 타입이 됨

// 타입 변수에 유니온 타입을 할당하게 되면 유니온 타입이 한 번에 들어가지 않고 각 타입이 한 번씩 들어가게 됨
// => 한 번은 StringNumberSwitch<number>
// 또 한 번은 StringNumberSwitch<string> 으로 들어감 
// => StringNumberSwitch<number> | StringNumberSwitch<string> 

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// number |
// string |
// number

// 결과
// number | string


/**
 * 실용적인 예제
 * 유니온 타입에서 특정 타입만 제거하는 타입 만들기
 */

type Exclude<T, U> = T extends U? never : T;
//T가 U의 서브타입이면 never, 아니면 T

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number
// never
// boolean

// 결과
// number | never | boolean 
// 유니온에 never가 포함되는 경우에는 공집합과의 합집합이 되므로 사라짐
// => number | boolean


/**
 * 특정 타입만 남기기
 */

type Extract<T, U> = T extends U? T : never;

type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number, sstring> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never
// string
// never

// 3단계
// string



// Tip
// 조건부 타입이 분산적으로 작동하지 않도록 하려면
// extends의 양 옆을 []로 묶어줌
type StringNumberSwitch2<T> = [T] extends [number]? string : number;

let e: StringNumberSwitch2<boolean | number | string>; // number