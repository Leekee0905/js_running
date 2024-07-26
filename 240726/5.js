//해당 문제를 forEach로 변경하여 풀어주세요
//1.
let arr = [10, 20, 30];

// 해당 로직을 작성하세요
arr.forEach((e, idx) => {
  arr[idx] = e * 10;
});
console.log(arr);

// 결과 값: [100, 200, 300] 출력해주세요

//2.
let arr2 = [10, 22, 33];
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요
let answer = [];
arr2.forEach((e) => {
  if (e % 5 == 0) {
    answer.push(e);
  }
});
console.log(answer);

// 결과값 [10]
