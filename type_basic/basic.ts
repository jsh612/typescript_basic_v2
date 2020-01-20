/* 

# 배열

  */
//1. 배열의 요소 특정 타입들 중하나로 지정
let arr: (number | string)[] = [1, 2, 3];
arr = ["a", "b"];

//2. 배열의 요소 각각을을 아예 특정 타입으로 지정해 버리기 (Tuple)
let tupleArr: [number, string] = [1, "a"];
tupleArr = [100, "b"];

/* 

 # 상수화 시키기

 */

const constObj = { a: 1 } as const;
// constObj.a = 2; // 불가

/* 


  # 제네릭 https://www.typescriptlang.org/docs/handbook/generics.html


 */

//1.인터페이스 제너릭 적용하여 생성
interface obj<T> {
  add: (a: T, b: T) => T;
}

const numObj: obj<number> = {
  add: (a, b) => a + b
};

numObj.add(1, 2);
numObj.add("1", "2");

const strObj: obj<string> = {
  add: (a, b) => a + b
};

strObj.add("1", "2");
strObj.add(1, 2);

//--------------------------------

//2.제네릭의 제한(extends)
interface contrainObj<T extends string> {
  //해당 제네릭 T는 문자열 범위로 타입이 좁혀짐
  add: (a: T, b: T) => T;
}

const c: contrainObj<string> = {
  add: (a, b) => a + b
};

const d: contrainObj<number> = {
  add: (a, b) => a + b
};

//--------------------------------

//3. 함수에서 제네릭 사용
const abc = <T>(a: T): T => a;
abc<number>(5);

//--------------------------------
/* 

=============================================================

 */
