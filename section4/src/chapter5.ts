/**
 * 사용자 정의 타입가드
 */

type Dog = {
    name: string;
    isBark: boolean;
};

type Cat = {
    name: string;
    isScratch: boolean;
};

type Animal = Dog | Cat;

// 객체가 Dog 타입인지 확인하는 함수
function isDog(animal: Animal): animal is Dog{ // 직접 만든 함수의 반환값을 가지고는 타입을 좁혀주지 않음 -> 함수 자체를 타입가드로 만듬
    // animal을 Dog로 단언한 후 검사
    return (animal as Dog).isBark !== undefined;
};

// 객체가 Cat 타입인지 확인하는 함수
function isCat(animal: Animal): animal is Cat{
    return (animal as Cat).isScratch !== undefined;
};

function warning(animal: Animal){
    // 타입 좁히기 (타입을 손댈 수 없다고 가정)
    if(isDog(animal)){
        // 강아지의 경우
        animal
    } else if("isScratch" in animal){
        // 고양이의 경우
    }
}