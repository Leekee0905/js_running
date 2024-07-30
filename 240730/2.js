const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

async function getData(url) {
  try {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === API_URL) {
          resolve("성공");
        } else {
          reject("실패");
        }
      }, 3000);
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getData(WRONG_URL);
