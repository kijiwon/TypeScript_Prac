/**
 * 인터페이스의 확장
 */

// interface Animal {
//     name: string;
//     age: number;
// };

// 타입 별칭의 경우에도 확장이 가능 -> 인터페이스는 객체 타입이면 모두 확장이 가능
type Animal = {
    name: string;
    age: number;
};

// 중복되는 프로퍼티를 Animal 타입에서 받아오기 -> 인터페이스 확장
interface Dog extends Animal{ // 인터페이스 Dog는 Animal의 확장
    // 타입 재정의 가능
    // name: 'doldol';
    // 재정의할 경우 프로퍼티의 타입은 원본 프로퍼티 타입의 서브 타입이어야함
    // name: number;
    isBark: boolean;
};

const dog: Dog = {
    name: '만복',
    age: 1,
    isBark: true,
}

interface Cat extends Animal {
    isScratch: boolean;
};

interface Chicken extends Animal  {
    isFly: boolean;
};

// 다중 확장
interface DogCat extends Dog, Cat {
    
};

const dogCat: DogCat = {
    name: '',
    age: 2,
    isBark: true,
    isScratch: true,
};