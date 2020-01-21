"use strict";
// /*
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// # 배열
//   */
// //1. 배열의 요소 특정 타입들 중하나로 지정
// let arr: (number | string)[] = [1, 2, 3];
// arr = ["a", "b"];
// //2. 배열의 요소 각각을을 아예 특정 타입으로 지정해 버리기 (Tuple)
// let tupleArr: [number, string] = [1, "a"];
// tupleArr = [100, "b"];
// /*
//  # 상수화 시키기
//  */
// const constObj = { a: 1 } as const;
// // constObj.a = 2; // 불가
// /*
//   # 제네릭 https://www.typescriptlang.org/docs/handbook/generics.html
//  */
// //1.인터페이스 제너릭 적용하여 생성
// interface obj<T> {
//   add: (a: T, b: T) => T;
// }
// const numObj: obj<number> = {
//   add: (a, b) => a + b
// };
// numObj.add(1, 2);
// numObj.add("1", "2");
// const strObj: obj<string> = {
//   add: (a, b) => a + b
// };
// strObj.add("1", "2");
// strObj.add(1, 2);
// //--------------------------------
// //2.제네릭의 제한(extends)
// interface contrainObj<T extends string> {
//   //해당 제네릭 T는 문자열 범위로 타입이 좁혀짐
//   add: (a: T, b: T) => T;
// }
// const c: contrainObj<string> = {
//   add: (a, b) => a + b
// };
// const d: contrainObj<number> = {
//   add: (a, b) => a + b
// };
// //--------------------------------
// //3. 함수에서 제네릭 사용
// const abc = <T>(a: T): T => a;
// abc<number>(5);
// //=============================================================
// /*
//   # 나머지 추가적인 타입들
//  */
// //1. intersection 과 union
// interface A {
//   hello: true;
// }
// interface B {
//   bye: true;
// }
// const interC: A & B = {
//   // A와 B를 모두 충족 시켜야한다.
//   hello: true,
//   bye: true
// };
// const unionC: A | B = {
//   hello: true
// };
// //2. Utility Types
// //  1) partial
// interface IparA {
//   a: "a";
//   c: true;
// }
// const parA: Partial<IparA> = {
//   // IparA의 일부분만 사용가능
//   a: "a"
// };
//3. Decorators
function makeGender(target) {
    console.log("hello");
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.gender = "female";
            return _this;
        }
        return class_1;
    }(target));
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.age = 27;
        this.gender = "male";
        this.title = name;
    }
    Person.prototype.setTitle = function (title) {
        this.title = name;
    };
    Person.prototype.sayTitle = function () {
        return this.title;
    };
    Person = __decorate([
        makeGender
    ], Person);
    return Person;
}());
var newPerson = new Person("jsh");
console.log(newPerson.gender);
