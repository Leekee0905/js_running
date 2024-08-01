//1. <빈칸>을 작성해주세요
const obj1 = {
  value: 20,
  getValue() {
    return this.value;
  },
};
console.log(obj1.getValue()); //  출력값 20

//2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요
const obj2 = {
  method: function () {
    console.log("첫번째 this : ", this);

    const innerMethod = () => {
      setTimeout(function () {
        console.log("두번째 this : ", this);
      });
    };
    innerMethod();
  },
};

obj2.method();
//innerMethod함수에서 this는 setTimeout의 콜백으로 호출 되었을 때 일반함수로 호출되었기 때문에 this는 전역 객체를 가리키게 된다.
//때문에 setTimeout 내부의 this는 전역객체 window혹은 global을 가리켜 window 혹은 global의 setTimeout을 출력한다.
