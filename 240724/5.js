const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function calculator(number1, operator, number2) {
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    default:
      return "없는 연산자입니다.";
  }
}

function addScores(array) {
  return array.map((score) => calculator(score, "+", 3));
}

console.log(addScores(scores));
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]
