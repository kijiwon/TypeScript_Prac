/**
 * 인덱스드 엑세스 타입
 */

interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}


// 인덱스드 엑세스 타입 사용해서 Post의 author만 가져오기
// 인덱스 안에는 타입만 들어올 수 있음
// -> 변수를 넣으면 에러가 발생
// const key = 'author';
// function printAuthorInfo(author:Post[key]){  -> 에러 발생
//     console.log(`${author.name} - ${author.id}`);
// }

function printAuthorInfo(author:Post['author']){ // []<-인덱스라 부름 
    console.log(`${author.name} - ${author.id}`);
}

// 인덱스의 중첩도 가능
// author의 id만 필요한 경우
// function printAuthorInfo(author:Post['author']['id']){ 
//     console.log(`${author}`);
// }
    
const post:Post = {
    title: '게시글 제목',
    content: '게시글 본문',
    author: {
        id: 1,
        name: '기지',
        age: 27,
    },
};




// 배열 타입으로부터 특정 요소의 타입을 가져올 수 있음
type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}[];

function printAuthorInfo2(author:PostList[number]['author']){ 
    console.log(`${author.name} - ${author.id}`);
}

const Post2:PostList[number] = { // 배열의 요소 타입을 추출할 때는 인덱스에 number 타입을 넣음
    title: '게시글 제목',
    content: '게시글 본문',
    author: {
        id: 1,
        name: '기지',
        age: 27,
    }, 
}

printAuthorInfo(post.author);




// 튜블 타입과 사용하기
type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

// type Tup3 = Tup[3];

type TupNum = Tup[number];