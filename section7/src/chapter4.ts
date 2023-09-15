/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V>{
    key: K;
    value: V;
};

let keyPair: KeyPair<string, number> ={
    key: 'key',
    value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ['1'],
};


/**
 * 인덱스 시그니쳐와 함께 사용하기
 */

// 인덱스 시그니쳐 
// -> 프로퍼티의 키와 밸류의 타입에 관련된 규칙만 만족하면 어떠한 객체든 허용하는 유연한 객체 타입을 만듬

interface NumberMap {
    [key: string]: number;
};

let numberMap: NumberMap = {
    key: -123,
    key2: 123123,
};

// 제네릭 인터페이스와 사용
interface Map<V> {
    [key: string]: V;
};

let booleanMap: Map<boolean> = {
    key: true,
};

let stringMap: Map<string> = {
    key: "value",
};




/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
    [key: string]: V;
};

let stringMap2: Map2<string> = {
    key: 'hallo',
};




/**
 * 제네릭 인터페이스의 활용 예시
 * 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

// 두 인터페이스는 서로소 집합
interface Student {
    type: 'student';
    school: string;
};

interface Developer {
    type: 'developer';
    skill: string;
};

// User 인터페이스를 제네릭 인터페이스로 바꾸기
interface User<T> {
    name: string;
    profile: T;
};

// 학생 유저만 사용하는 함수
function goToSchool(user: User<Student>){
    if(user.profile.type !=='student'){
        console.log('잘 못 오셨습니다');
        return;
    };
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
};

const developerUser: User<Developer> = {
    name: '기지',
    profile: {
       type: 'developer',
       skill: 'TypeScript', 
    },
};

const studentUser: User<Student> = {
    name: '죠니',
    profile: {
        type: 'student',
        school: '단국대학교',
    },
};