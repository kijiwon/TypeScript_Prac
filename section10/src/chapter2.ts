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




/**
 * Record<K, V>
 * 새로운 객체 타입을 정의할 때 인덱스 시그니쳐처럼 유연하지만 조금 더 제한적인 객체 타입을 정의하는 타입
 * 실무에서 자주 사용하는 타입
 */

type ThumnailLegacy = {
    large: {
        url: string;
    };
    medium: {
        url: string;
    };
    small: {
        url: string;
    };
};

// Record 구현
type Record<K extends keyof any, V> = { // K에 제약 걸기 -> K에 들어오는 타입은 객체 타입의 키를 추출한 유니온 타입
    [key in K]: V
}

// Record타입으로 객체 타입 만들기
// 프로퍼티를 추가하는 경우 유니온에 추가
// 버전별로 새로운 프로퍼티를 추가하는 경우 두번째 타입 변수에 추가
type Thumbnail = Record<'large' | 'medium' | 'small' | 'watch', {url: string; size: number}>;
// 첫번째 타입 변수 => 객체의 프로퍼티 키
// 두번째 타입 변수 => 키의 value 타입