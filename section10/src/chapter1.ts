/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * => 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
    title: string;
    tag: string[];
    content: string;
    thumbnailURL?: string;
}


// Partial 타입 직접 구현
type Partial<T> = {
    // 맵드 타입 이용
    // T의 모든 key 꺼내오기
    [key in keyof T]? : T[key];
};

const draft: Partial<Post> = {
    title: '제목 나중에 짓자',
    content: '초안...',
}





/**
 * Required<T>
 * 필수의, 필수적인
 * => 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

// Required 직접 구현
type Required<T> = {
    // 모든 프로퍼티에서 '선택적'이라는 기능을 빼주기
    [key in keyof T]-?: T[key];
}

const withThumbnailPost: Required<Post> = {
    title: '한입 타스 후기',
    tag: ['ts'],
    content: '',
    // 선택적 프로퍼티인 thumbnailURL도 필수 프로퍼티가 됨
    thumbnailURL: 'https://...',
}




/**
 * Readonly<T>
 * 읽기전용, 수정불가
 * => 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

// Readonly 직접 구현
type Readonly<T> = {
    readonly[key in keyof T]: T[key];
}

const readonlyPost: Readonly<Post> = {
    title: '보호된 게시글 입니다.',
    tag: [],
    content: '',
};

// 프로퍼티 수정 불가능
// readonlyPost.content = '본문';  // ❌