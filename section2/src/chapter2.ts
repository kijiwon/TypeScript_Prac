// 배열
let numArr:number[] = [1,2,3];
let strArr:string[] = ['hello','welcome'];
let boolArr: Array<boolean> = [true, false, true];

// 배열의 요소들의 타입이 다양할 경우
let multiArr = [1, 'hello'];

// 다차원 배열의 타입 정의하기
let doubleArr:number[][] = [
    [1,2,3],
    [4,5]
];

let doubleStr:string[][]= [
    ['hello', 'welcome'],
    ['im', 'princess']
]

// 튜플
let tup1:[number, number] = [1,2];
let tup2: [number, string, boolean] = [1, "hello", true];

// tup1 = [1,2,3];
// tup1 = ['1','2'];
// tup2 = [1,2,3];
// tup2 = ['1','hello', true]
tup1.push(2);
console.log(tup1);

const users:[string, number][]= [
    ["김기지", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    [5, "최아무개"]
  ];