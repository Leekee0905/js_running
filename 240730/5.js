function taskA() {
  return new Promise((resolve) => {
    const time = Math.floor(Math.random() * 5000);
    setTimeout(() => {
      resolve("Task A Complete");
    }, time);
  });
}

function taskB() {
  return new Promise((resolve) => {
    const time = Math.floor(Math.random() * 5000);
    setTimeout(() => {
      resolve("Task B Complete");
    }, time);
  });
}

function taskC() {
  return new Promise((resolve) => {
    const time = Math.floor(Math.random() * 5000);
    setTimeout(() => {
      resolve("Task C Complete");
    }, time);
  });
}

async function findFirstCompletedTask() {
  return await Promise.race([taskA(), taskB(), taskC()])
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
}
findFirstCompletedTask();
// 가장 먼저 완료된 작업을 찾아서 반환되는 값을 출력하세요.
