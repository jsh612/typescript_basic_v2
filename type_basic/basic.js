"use strict";
/*

배열

  */
//1. 배열의 요소 특정 타입들 중하나로 지정
var arr = [1, 2, 3];
arr = ["a", "b"];
//2. 배열의 요소 각각을을 아예 특정 타입으로 지정해 버리기 (Tuple)
var tupleArr = [1, "a"];
tupleArr = [100, "b"];
/*

 상수화 시키기

 */
var constObj = { a: 1 };
var a = {
    add: function (a, b) { return a + b; }
};
console.log(a.add(1, 2));
