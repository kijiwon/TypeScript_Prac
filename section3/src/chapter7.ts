// 타입 좁히기
// 조건문 들을 이용해 넓은 타입에서 좁은 타입으로
// 타입을 상황에 따라 좁히는 방법
// 조건문을 이용해 조건문 내부에서 변수가 특정 타입임을 보장하면(더 좁은타입임을 증명하면) 
// 타입스크립트는 이 변수의 타입을 더 좁은타입으로 자동으로 추론함
function func1(value: number | string ){
    // 밖에서 value의 타입은 number | string으로 메소드를 사용할 수 없음
    value;
    // value.toFixed();
    // value.toUpperCase();

    // value의 타입이 number -> toFixed()사용
    if(typeof value === 'number'){
        // 조건문 내부에서는 value의 타입이 number
        console.log(value.toFixed());
    } else if(typeof value === 'string'){
        // value의 타입이 string -> toUpperCase()사용
        // 조건문 내부에서는 value의 타입이 string
       console.log(value.toUpperCase()); 
    }
}

// 타입 좁히기를 활용하면 좋은 점
// 개발을 하다보면 매개변수에 여러 타입의 값을 들어올 수 있고
// 내부에서는 타입에 따라 각각 다른 동작을 시키는 범용적인 함수를 더 쉽게 만들 수 있음

function func2(value: number | string | Date | null){
    // value의 타입이 number -> toFixed()사용
    if(typeof value === 'number'){
        // 조건문 내부에서는 value의 타입이 number
        console.log(value.toFixed());
    } else if(typeof value === 'string'){
        // value의 타입이 string -> toUpperCase()사용
        // 조건문 내부에서는 value의 타입이 string
       console.log(value.toUpperCase()); 
    } else if(typeof value === 'object'){
        // value의 타입이 Date(Date 객체 -> object) -> getTime() 사용
        // console.log(value.getTime());
    }
}

// instanceof 타입가드
function func3(value: number | string | Date | null){
    // value의 타입이 number -> toFixed()사용
    if(typeof value === 'number'){
        // 조건문 내부에서는 value의 타입이 number
        console.log(value.toFixed());
    } else if(typeof value === 'string'){
        // value의 타입이 string -> toUpperCase()사용
        // 조건문 내부에서는 value의 타입이 string
       console.log(value.toUpperCase()); 
    } else if(value instanceof Date){
        // value가 Date 객체라면 -> true , 아니면 -> false
        console.log(value.getTime());
    }
}

// in 타입 가드
type Person = {
    name:string;
    age:number;
};
function func4(value: number | string | Date | null | Person){
    if(typeof value === 'number'){
        console.log(value.toFixed());
    } else if(typeof value === 'string'){
       console.log(value.toUpperCase()); 
    } else if(value instanceof Date){
        console.log(value.getTime());
    } else if(value && 'age' in value){
        // 'age' in value만 하는 경우 null도 포함되기 때문에 value가 존재함을 표시
       console.log(`${value.name}은 ${value.age}살 입니다.`) 
    }
}