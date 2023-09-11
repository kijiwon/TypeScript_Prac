/**
 * 인터페이스와 클래스
 */

interface CharacterInterface{
    name: string;
    moveSpeed: number;
    move(): void;
}

// CharacterInterface가 정의한 타입의 객체를 클래스가 생성하도록 하기
// implements(구현하다) 
class Character implements CharacterInterface{
    // 인터페이스는 public 필드만 정의할 수 있음 
    // -> private, protected 설정 불가능
    // private하거나 protected한 필드가 필요한 경우에는 추가로 정의
    constructor(
        public name: string, 
        public moveSpeed: number, 
        private extra: string
        ){}

    move():void{
        console.log(`${this.moveSpeed}만큼 이동`)
    }
}

// 보통 클래스를 만들때 인터페이스로 설계도를 만드는 경우는 드뭄
// 정교한 프로그래밍이나 라이브러리 구현할 때 인터페이스 설계도를 만드는 경우도 있음