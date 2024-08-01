//1. 출력값과 출력되는 값의 이유를 설명해주세요

var name = "yuno";

function myName() {
  var name = "yuno2";
  function a() {
    console.log(name);
  }
  return a();
}

myName();
// myName함수는 a()함수를 리턴을 하는데 해당 상황에서 function(){console.log(name)}을 리턴받아 전역변수인 name="yuno"를 출력하게 된다.

//2. 출력값과 출력되는 값의 이유를 설명해주세요

function test() {
  var x = 1;

  if (true) {
    var x = 2;
  }

  console.log(x);
}

test();
// 출력은 2 var은 블록 스코프를 지원하지 않기 때문에 if(true)이후 재선언 되어 x는 2가 출력된다.

//3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.

const nameObj = {
  name: "yuno",
  method: function () {
    const arrow = () => {
      console.log(`화살표 함수 : ${this.name}`);
    };
    function normal() {
      console.log(`일반 함수 : ${this.name}`);
    }
    arrow();
    normal();
  },
};

nameObj.method();
// 화살표 함수는 자신의 this 바인딩을 가지지 않지만 정의된 위치의 this를 그대로 사용하여 nameObj.method의 this를 사용한다.
// 일반 function은 자신의 this를 가지며 독립적으로 호출된다. 그렇기 때문에 명시적으로 바인딩을 해주지 않아 undefined를 출력한다.
// normal()이 실행 될 때 앞에 주체가 없기 때문에 undefined가 출력되고 arrow()는 nameObj의 name을 가리키게 되어 yuno를 출력하게 된다.
