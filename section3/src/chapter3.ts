// 객체 타입간의 호환성
// -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?

type Animal = {
    name:string;
    color:string;
};

type Dog = {
    name:string;
    color:string;
    breed:string;
};

let animal:Animal = {
    name: "기린",
    color: "yellow",
};

let dog:Dog ={
    name: "만복이",
    color: "white",
    breed: "진도",
};

// 업캐스팅
animal = dog;

// 다운 캐스팅
// dog = animal

type Book = {
   name:string;
   price:number; 
};

type ProgrammingBook = {
    name:string;
    price:number;
    skill:string;
};

let book:Book;
let programmingBook:ProgrammingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs",
}

book = programmingBook;
// programmingBook = book;

// 초과 프로퍼티 검사
let book2:Book = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs", 
}

// 변수에 값을 보관한 후 초기화 값으로 사용하면 발생하지 않음
let book3:Book = programmingBook;

// 함수의 매개변수에도 동일하게 발생
function func(book:Book){};
func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs", 
})

// 변수를 넣으면 발생하지 않음
func(programmingBook)