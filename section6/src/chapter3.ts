/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
    // 필드
    // 앞에는 public이 기본값으로 등록되어 있음 
    // public (공공의) -> 어디서든 프로퍼티에 접근이 가능
    // public name: string;
    // // private (제한된) -> 클래스 내부에서만 접근이 가능
    // private age: number;
    // // protected (보호된) -> 클래스 외부에서는 접근이 안되지만 클래스 내부와 파생 클래스에서 접근이 가능
    // protected position: string;

    // 생성자
    // 생성자에 접근 제어자를 명시하는 경우 
    // 자동으로 필드가 생성됨
    constructor(public name: string, private age: number, protected position: string){
        // 접근 제어자가 설정된 매개변수들은 this.필드 = 매개변수 가 자동으로 수행됨
        // -> 생성자 내부 코드 제거 가능
    }
    
    // 메소드
    work(){
        // private한 프로퍼티는 클래스 내부에서만 접근 가능
        console.log(`${this.name} 일함`)
    }
}

// 파생 클래스 내에서도 private한 프로퍼티는 접근이 불가능
// 파생 클래스 내에서만 접근이 가능하도록 하는 경우에는
// protected 접근자로 설정
class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name: string, age: number, position: string, officeNumber: number){
       super(name, age, position);
       this.officeNumber = officeNumber; 
    }

    // 메소드
    func(){
        // private
        // this.age;
        // protected
        this.position;
    }
}

const employee = new Employee('김기지', 27, 'developer');
employee.name = '기지';
// employee.age = 20;
// employee.position = 'designer';

console.log(employee);