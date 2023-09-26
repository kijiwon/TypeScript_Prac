/**
 * Partial
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