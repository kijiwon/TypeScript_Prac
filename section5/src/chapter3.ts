/**
 * 인터페이스 선언 합치기
 */

// 타입 별칭은 동일한 스코프 내에 중복된 이름으로 선언 불가능
// type Person = {
//     name: string;
// };
// type Person = {
//     age: number;
// };

// 인터페이스는 중복된 이름으로 선언 가능
interface Person {
    name: string;
};
interface Person {
    age: number;
};
// -> 중복된 이름의 인터페이스 선언은 모두 하나로 합쳐지기 때문
// 즉, 위에서 선언한 Person 인터페이스들은 모두 합쳐져서 아래와 같은 인터페이스가 됨
interface Person { 
    name: string;
    age: number;
};

// 주의점
// 동일한 이름의 인터페이스들이 동일한 이름의 프로퍼티를 서로 다른 타입으로 정의하면 오류 발생
// interface Person {
//     name: number;
// };
// 충돌 발생 <- 동일한 프로퍼티의 타입을 다르게 정의한 상황
// 선언 합침에서 충돌은 허용되지 않음


/**
 * 모듈 보강
 * 선언 합침은 보통 모듈 보강을 하기 위해 사용 
 */

interface Lib {
    a: number;
    b: number;
};

// 모듈 보강을 위한 추가 인터페이스
interface Lib {
    c: string;
};

const lib: Lib = {
    a: 1,
    b: 2,
    // 사용 중간에 프로퍼티를 추가해야하는 경우
    // 바로 추가하면 오류 발생
    // -> 선언 함침으로 해결
    c: "hello",

};