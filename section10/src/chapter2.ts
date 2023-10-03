/**
 * Pick<T, K>
 * 뽑다, 고르다
 * => 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

// Pick<T, K> 직접 만들기
type Pick<T, K extends keyof T> = { 
    // 타입 변수 K가 T의 key로만 이루어진 string literal 유니온 타입임을 보장해야 함
    // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
    // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL' 
    [key in K]: T[key];
}


const legacyPost: Pick<Post, 'title' | 'content'> = {
    title: '옛날 글',
    content: '옛날 컨텐츠',
}




/**
 * Omit<T, K>
 * 생략하다, 빼다
 * => 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

// Omit 직접 구현
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title>>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>

const noTitlePost: Omit<Post, 'title'> = {
    // Post 타입의 title 프로퍼티만 제거
    content: '',
    tags: [],
   thumbnailURL: '', 
};