//1.
let uninitialized;
console.log(uninitialized); // 결과값 < undefined >

//2. < const > apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable

//3.
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >

//4.
let mySchedule = "";
console.log(mySchedule || false); // < false >
console.log(!!mySchedule); // < false >

/*
1. let으로 선언 후 데이터를 할당하지 않아서 정의되지않음인 undefined를 출력한다.
2. const로 선언하면 변수의 재선언이 불가능하다.
3. 배열의 인덱스는 0부터 시작해서 3이면 4번째 인덱스를 의미하므로 19를 출력한다.
4. js에서 빈 문자열은 false를 출력한다. false or false이므로 false를 출력한다. 또한 !!mySchedule은 문자열을 boolean의 형태로 나타낼수있으므로 빈 문자열은 false를 출력한다.
*/
