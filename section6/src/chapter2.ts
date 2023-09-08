/**
 * 타입스크립트의 클래스
 */

const employeeA = {
    name: '기지',
    age: 27,
    position: 'developer',
    work(){
       console.log('일함'); 
    },
};

class Employee {
    // 필드
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string){
        this.name = name;
        this.age = age;
        this.position = position;
    }
    
    // 메소드
    work(){
        console.log('일함')
    }
}

// 상속
class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name: string, age: number, position: string, officeNumber: number){
       super(name, age, position);
       this.officeNumber = officeNumber; 
    }
}

// 인스턴스 만들기
const employeeB = new Employee('김기지', 27, '개발자');
console.log(employeeB);

// 클래스는 타입으로도 사용
const employeeC: Employee = {
    name: "",
    age: 0,
    position: "",
    work(){}
}