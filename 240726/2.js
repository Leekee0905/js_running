var arr1 = [{ a: 1 }, { b: 2 }];
var arr2 = JSON.parse(JSON.stringify(arr1));
arr2[0].c = 3;
console.log(arr1);
console.log(arr2);
/* 여기에 깊은 복사 코드를 작성해주세요 
깊은복사 할 때 deepCopy를 사용하시거나 다른 방식도 가능합니다. */

/* arr2의 0번째 객체에 c라는 속성을 추가하고 값을 3으로 할당해주세요 */

/* arr1을 출력해주세요 출력값 : [{a:1}, {b:2}] */
/* arr2를 출력해주세요 출력값 : [{a:1, c: 3}, {b:2}]*/
