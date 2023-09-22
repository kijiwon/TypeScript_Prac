/**
 * keyof 연산자
 */

interface Person {
    name: string;
    age: number;
}

// 주의!
// keyof 연산자는 타입에만 사용할 수 있음
// -> keyof person ❌
function getPropertyKey(person: Person, key: keyof Person){
    return person[key];
}

const person: Person = {
    name: '기지',
    age: 27,
};

getPropertyKey(person, 'name');


// typeof연산자와 함께 사용 가능
// 타입을 정의할 때 사용하면 어떤 변수의 타입을 뽑아오는 역할을 함
type Person2 = typeof person2;

// Person2에는 person2에서 뽑아온 객체 타입이 들어가 있음
// => Person2 대신 typeof person2로 사용 가능
function getPropertyKey2(person: Person2, key: keyof typeof person2){ // key에는 'name' | 'age' 유니온 타입이 들어감
    return person[key];
}

const person2 = {
    name: '기지',
    age: 27,
};