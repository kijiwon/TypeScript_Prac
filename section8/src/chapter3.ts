/**
 * 맵드 타입
 * 객체 타입을 조작하는 기능
 */

interface User {
    id: number;
    name: string;
    age: number;
}

// key in 프로퍼티
// key가 'id' 일 때 → id : User['id'] → id : number
// key가 'name'일 때 → name : User['user'] → name : string
// key가 'age'일 때 → age : User['age'] → age : number
type PartialUser = {
    [key in 'id' | 'name' | 'age']?: User[key]; // ?를 붙여 모두 선택적 프로퍼티 만들기
}

// keyof 연산자 같이 쓰기
// keyof User => 'id' | 'name' | 'age'
type BooleanUser = {
    [key in keyof User]: boolean;
}

// 읽기 전용(readonly)으로 만들기
type ReadonlyUser = {
   readonly [key in keyof User]: User[key];
}


// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User{
    return {
        id: 1,
        name: '기지',
        age: 27,
    }
}


// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser){
    // 수정하는 기능
}

updateUser({
    // id: 1,
    // name: '기지',
    age: 25,
})