//1.
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1);
console.log(arr1 === arr2);
// arr1은 [10,2,3]을 출력한다 얕은 복사이기 때문에 arr1과 arr2가 같은 주소를 참조하는데 arr2[0] = 10을 해주어 값이 변했기 때문이다.
// 같은 주소를 참조하기 때문에 arr1과 arr2의 비교연산은 true를 출력한다.

//2.
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = obj1;

obj2.d = 4;
console.log(obj1);
console.log(obj2);
