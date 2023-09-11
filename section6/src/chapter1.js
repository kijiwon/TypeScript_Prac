/**
 * 클래스
 */

let studentA = {
   name: '기지',
   grade: 'A+',
   age: 27,
   study(){
    console.log('열심히 함'); 
   } ,
   introduce(){
    console.log('안녕하세요');
   },
};

let studentB = {
    name: '죠니',
    grade: 'B-',
    age: 27,
    study(){
     console.log('열심히 함'); 
    } ,
    introduce(){
     console.log('안녕하세요');
    },
 };

 // 두 객체는 동일한 형식을 가짐
 // 같은 형식을 가진 객체를 수없이 많이 만들어야하는 경우
 // 자바스크립트의 클래스를 이용
 class Student { // 클래스의 이름은 보통 파스칼케이스를 사용
    // 필드 설정 필드-> 클래스가 만들어낼 객체의 프로퍼티
    name;
    grade;
    age;

    // 생성자 -> 클래스를 호출하면 실제로 객체를 생성하는 역할
    // 생성자 메소드 constructor()를 이용
    constructor(name, grade, age){ // 필드에 설정한 프로퍼티를 매개변수로 받음
        // this -> 이 클래스가 만들어내는 객체
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메소드
    study(){
        console.log('열심히 함');
    }
    // this 활용하기
    introduce(){
        console.log(`안녕하세요 ${this.name} 입니다`);
    }
};


// 클래스를 호출해 객체 만들기
// 클래스를 이용해서 만든 객체 -> 인스턴스
// Student 인스턴스 
let studentC = new Student('김기지', 'A-', 27);
// console.log(studentC);
// studentC.study();
// studentC.introduce();

// 상속
// 앞에서 만든 클래스를 기반으로 추가적인 필드와 메소드를 갖는 클래스를 만들 경우
// 상속을 이용해 중복되는 코드를 없앤다.

class StudentDeveloper extends Student{
    // 필드 -> 중복되는 프로퍼티는 super함수로 불러오기
    // name;
    // grade;
    // age;
    favoriteSkill;
    // 생성자
    constructor(name, grade, age, favoriteSkill){
        // super 함수로 호출
        super(name, grade, age)
        this.name = name;
        this.grade = grade;
        this.age = age;
        this.favoriteSkill = favoriteSkill;
    }

    // 메소드
    // study(){
    //     console.log('열심히 함');
    // }

    // introduce(){
    //     console.log(`안녕하세요 ${this.name} 입니다`);
    // } 

    programming(){
       console.log(`${this.favoriteSkill}로 프로그래밍 함`) 
    }
}

const studentDeveloper = new StudentDeveloper('김기지', 'B-', 27, 'TypeScript');
console.log(studentDeveloper);
studentDeveloper.programming();
studentDeveloper.introduce();

