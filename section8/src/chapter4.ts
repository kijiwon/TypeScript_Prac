/**
 * 템플릿 리터럴 타입
 * string literal타입을 기반으로 특정 패턴을 갖는 문자열 타입을 만드는 기능 
 */

type Color = 'red' | 'black' | 'green';

type Animal = 'dog' | 'cat' | 'chicken';

// type ColoredAnimal = `red-dog` | 'red-cat' | 'red-chicken' | 'black-dog' ... ;
// Color나 Animal 타입에 string literal 타입이 추가되어 경우의 수가 많아질수록 
// ColoredAnimal 타입에 추가해야하는 타입이 점점 많아짐
// -> 템플릿 리터럴 타입 이용
type ColoredAnimal = `${Color}-${Animal}`;

const coloredAnimal: ColoredAnimal = 'black-dog';