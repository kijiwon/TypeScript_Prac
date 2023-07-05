// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

// type User = number

function a(){
    type User = string;
}
let user1: User = {
    id:1,
    name: "김기지",
    nickname: "kiji",
    birth: "1996.07.10",
    bio: "hello",
    location: "수원"
};

let user2: User = {
    id:2,
    name: "기지",
    nickname: "공주",
    birth: "1996.07.10",
    bio: "hello",
    location: "수원"
}