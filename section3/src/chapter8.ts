/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
*/

type Admin = {
    // 직관적으로 알아보기 위해 tag 추가
    tag: "ADMIN";
    name: string;
    kickCount: number;
};

type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
};

type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
};

// 세 타입을 유니온한 타입
type User =  Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.

function login(user:User){
    // user.tag로 구분하기
    switch(user.tag){
        case "ADMIN":{
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break; 
        }
        case "MEMBER":{
            console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
            break; 
        }
        case "GUEST":{
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
            break; 
        }
    }
    // if('kickCount' in user){
    //     // Admin 타입 
    //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    // } else if('point' in user){
    //     // Member 타입
    //     console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
    // } else{
    //     // Guest 타입
    //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
    // }
}

// 하지만 다른 사람이 보기에는 직관적으로 이해하기 힘듦
// -> tag프로파티를 추가
// tag 프로퍼티가 생기면 각 집합은 서로소 집합이 됨


// 사례 2
// 비동기 작업의 결과를 처리하는 객체
// type AsyncTask = {
//     state: "LOADING" | "FAILED" | "SUCCESS" ; // string으로 정의하는 것보다 더 직관적
//     error?: {
//         message : string;
//     };
//     response?: {
//         data: string;
//     };
// };

// 서로소 유니온 타입으로 만들기
type LoadingTask = {
    state: "LOADING";
};

type FailedTask = {
    state: "FAILED";
    error: {
        message: string;
    };
}

type SuccessTask = {
    state: "SUCCESS";
    response: {
        data: string;
    }
}
type AsyncTask = LoadingTask | FailedTask | SuccessTask;
// 로딩 중 -> 콘솔에 로딩중 출력
// 실패 -> 실페 : 에러메세지 출력
// 성공 -> 성공 : 데이터 출력

function processResult (task: AsyncTask){
    switch(task.state){
        case "LOADING":{
            console.log("로딩 중");
            break;
        };
        case "FAILED":{
            console.log(`에러 발생 : ${task.error.message}`);
            break;
        }
        case "SUCCESS":{
            console.log(`성공 : ${task.response.data}`);
            break;
        }
    }
    // 옵셔널 체이닝을 지우면 -> 에러 발생
   // task의 타입이 여전히 AsyncTask로 되어있기 때문
   // 왜? 좁혀질 타입이 없기 때문
   // state로 구분을 한다고 해도 error나 response는 선택적 프로퍼티로 정의되어 있어
   // 값이 존재하는지 확실하지 않음 => 좁혀질 타입이 존재하지 않음
   // => 옵셔널 체이닝 혹은 non null 단언을 해줘야함
    // 하지만 안전한 코드는 아님
    // => AsyncTask를 서로소 유니온 타입으로 만듬
}
const loading:AsyncTask = {
    state: "LOADING",
};

const failed:AsyncTask = {
    state: "FAILED",
    error: {
        message: "오류 발생",
    }
};

const success:AsyncTask = {
    state: "SUCCESS",
    response: {
        data: "데이터",
    }
};