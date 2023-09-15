/**
 * 프로미스
 */


// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve에 결과값 20을 전달
//         resolve(20);
//     }, 3000);
// });

// promise.then((response)=>{
//     console.log(response); // 20

//     console.log(response * 20);
//     // response의 타입이 unknown으로 추론됨
//     // -> 곱셈 연산이 불가능
//     // 하지만 위에서 resolve에 20을 넘겨주었음

//     // promise는 비동기 작업의 결과값의 타입을 자동으로 추론할 수 있는 기능이 존재하지 않음
//     // => unknown 타입으로 추론함

// });

// 따라서 제네릭을 이용
// 타입스크립트에서 promise는 제네릭 클래스로 타입이 별도로 선언되어있음 
const promise = new Promise<number>((resolve, reject)=>{
    setTimeout(()=>{
        // 비동기 함수의 결과값을 number로 정의해주었기 때문에 resolve에 들어갈 인수도 number타입이여야 함 
        resolve(20);

        // 실패한 경우
        // reject 함수의 인수로는 선택적 매개변수 reason이 any타입으로 정의되어 있음
        reject('~때문에 실패');
    }, 3000);
});

promise.then((response)=>{
    console.log(response); // 20
    console.log(response * 20); // 400
});

// err의 타입은 any로 추론됨
promise.catch((err)=>{
    // 타입 변수로 에러의 타입을 지정할 수 없기 때문에 타입 좁히기를 이용
    if(typeof err === 'string'){
        console.log(err);
    }
})



/**
 * 프로미스를 반환하는 함수의 타입 정의
 */

// 서버로부터 게시글의 데이터를 불러오는 함수
interface Post {
    id: number;
    title: string;
    content: string; 
}
// Promise는 클래스이므로 타입으로도 사용할 수 있음
// 반환값 타입을 직접 fetchPost에 정의해도 됨
// function fetchPost(): Promise<Post>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve({
//                 id: 1,
//                 title: '게시글 제목',
//                 content: '게시글 컨텐츠'
//             })
//         }, 3000);
//     });
// }

function fetchPost(){
    return new Promise<Post>((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                id: 1,
                title: '게시글 제목',
                content: '게시글 컨텐츠'
            })
        }, 3000);
    });
}

const postRequest = fetchPost();

postRequest.then((post)=>{
    post.id;
})