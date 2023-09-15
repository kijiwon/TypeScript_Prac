/**
 * 제네릭 클래스
 */

class NumberList {
    constructor(private list: number[]){}

    push(data: number){
        this.list.push(data);
    }

    pop(){
        return this.list.pop();
    }

    print(){
        console.log(this.list);
    }
}


const numberList = new NumberList([1, 2, 3]);

numberList.pop();
numberList.push(4);
numberList.print(); // [1, 2, 4]

// 동일한 형태의 StringList 클래스도 필요하다면?
// -> 새로운 클래스를 하나 더 만드는 대신 제네릭 클래스로 만들기
class List<T> {
    constructor(private list: T[]){}

    push(data: T){
        this.list.push(data);
    }

    pop(){
        return this.list.pop();
    }

    print(){
        console.log(this.list);
    }
}

const numberList2 = new List([1, 2, 3]);

numberList.pop();
numberList.push(4);
numberList.print(); // [1, 2, 4]

const stringList = new List(['1', '2']);

stringList.pop();
stringList.push('hello');
stringList.print();