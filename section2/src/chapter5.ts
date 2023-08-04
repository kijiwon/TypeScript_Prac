// 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 타입스크립트에서만 제공되는 새로운 타입
// enum 키워드를 사용하여 설정
//타입 별칭과는 다르게 '='을 사용하지 않음

// 숫자 enum
enum Role {
    ADMIN ,
    USER = 10,
    GUEST,
}

// 문자열 enum
enum Language {
   korean = 'ko',
   english = 'en' 
}

const user1 = {
    name : '김기지',
    role : Role.ADMIN, // 0 <- 관리자
    language : Language.korean,
}

const user2 = {
    name : '강백호',
    role : Role.USER // 1 <- 일반 유저
}

const user3 = {
    name : '소형준',
    role : Role.GUEST // 2 <- 게스트
}

console.log(user1, user2, user3);