function calculator(number1, operator, number2) {
  switch (operator) {
    case "+":
      console.log(number1 + number2);
      break;
    case "-":
      console.log(number1 - number2);
      break;
    case "*":
      console.log(number1 * number2);
      break;
    case "/":
      console.log(number1 / number2);
      break;
    default:
      console.log("없는 연산자입니다.");
      break;
  }
}

calculator(3, "+", 6); // 결과값 9
calculator(11, "-", 6); // 결과값 5
calculator(6, "*", 3); // 결과값 18
calculator(15, "/", 3); // 결과값 5
