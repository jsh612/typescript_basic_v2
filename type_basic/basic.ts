/* 

배열

  */
//1. 배열의 요소 특정 타입들 중하나로 지정
let arr: (number | string)[] = [1, 2, 3];
arr = ["a", "b"];

//2. 배열의 요소 각각을을 아예 특정 타입으로 지정해 버리기 (Tuple)
let tupleArr: [number, string] = [1, "a"];
tupleArr = [100, "b"];

/* 

 상수화 시키기

 */

const constObj = { a: 1 } as const;
constObj.a = 2; // 불가
