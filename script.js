const ADVICE_URL = "https://api.adviceslip.com/advice";
const PRINT_ADVICE = document.querySelector("#advice_content");
const PRINT_ADVICE_TITLE = document.querySelector("#advice_title");
const DICE_BUTTON = document.querySelector("#dice_button");

async function getAdvice() {
  try {
    const startTime = performance.now();
    const response = await fetch(ADVICE_URL);
    const data = await response.json();
    const endTime = performance.now();
    console.log(`${endTime - startTime} ms`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    printAdvice(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

function printAdvice(data) {
  PRINT_ADVICE_TITLE.textContent = data.slip.id;
  PRINT_ADVICE.textContent = `"${data.slip.advice}"`;
}
DICE_BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  getAdvice();
});
