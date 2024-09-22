const billInput = document.getElementById("inp");
const tipButtons = Array.from(document.getElementsByClassName("button"));
const peopleInput = document.getElementById("people");
const tipAmount = document.getElementById("tip-amount");
const tipResult = document.getElementById("total-result");
const custom = document.getElementById("custom");
const numberOfPeopleTitle = document.querySelector(".number-of-people-title");

let billValue;
let percentValue;
let customValue;
let peopleValue;
let resetValue;

billInput.addEventListener("input", (event) => {
  billValue = event.target.value;
  calculation();
});

tipButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    percentValue = parseInt(event.target.textContent);
    calculation();
  });
});

custom.addEventListener("input", (event) => {
  customValue = event.target.value;
  calculation();
});

peopleInput.addEventListener("input", (event) => {
  let temp = event.target.value;

  if (temp > 0) {
    peopleValue = temp;
    numberOfPeopleTitle.classList.remove("error-quantity");
    peopleInput.classList.remove("invalid");
    calculation();
  } else {
    peopleInput.classList.add("invalid");
    numberOfPeopleTitle.classList.add("error-quantity");
  }
});

function calculation() {
  const tipResultValue = (billValue * (percentValue / 100)) / peopleValue;
  const totalResultValue = tipResultValue + billValue / peopleValue;

  if (peopleValue) {
    tipResult.textContent = `${totalResultValue.toFixed(2)}`;
    tipAmount.textContent = `${tipResultValue.toFixed(2)}`;
  }
}
