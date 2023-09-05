/**
 * 인터페이스
 * 타입에 이름을 지어주는 문법
 * 객체의 구조를 정의하는데 특화
 * 타입 별칭에서는 제공하지 않는 상속, 합침 등의 특수한 기능 제공
 */

interface Person {
    readonly name: string;
    age?: number;
    // 메소드도 인터페이스에서 타입 정의가 가능
    // 함수 타입 표현식
    // sayHi: ()=> void;
    // 또는 호출 시그니쳐를 이용 -> 메소드 이름이 소괄호 앞에 붙음
    sayHi(): void;
    // 매개변수에 따라 다르게 호출 -> 오버로드 시그니쳐 만들기
    sayHi(a:number, b:number): void;

};
// 인터페이스 객체 타입은 유니온이나 인터섹션 불가능
// -> 타입 별칭 또는 타입 주석에 사용
// 타입 별칭
type Person1 = Person | number;
type Person2 = Person & string & number;

// 타입 주석
const person2: Person | string = {
    name: 'kiji',
    sayHi: function(){
        console.log('Hi');
    }
}

const person:Person = {
    name: 'kiji',
    // age: 28,
    sayHi: function(){
        console.log('Hi');
    }
};

// sayHi를 매개변수에 따라 다르게 정의하는 경우 -> 함수타입 표현식이 아닌 호출 시그니쳐로 정의
person.sayHi();
person.sayHi(1, 2)

// person.name = '기지';