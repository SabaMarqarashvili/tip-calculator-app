const billInput = document.getElementById("inp");
const tipButtons = Array.from(document.getElementsByClassName("button"));
const peopleInput = document.getElementById("people");
const tipAmount = document.getElementById("tip-amount");
const tipResult = document.getElementById("total-result");
const custom = document.getElementById("custom");
const numberOfPeopleTitle = document.querySelector(".number-of-people-title");
const reset = document.querySelector("#reset");

let percentValue = 1;
let billValue = 0;
let peopleValue = 0;

billInput.addEventListener("input", (event) => {
  billValue = event.target.value;
  calculation();
});

peopleInput.addEventListener("input", (event) => {
  if (event.target.value > 0) {
    peopleValue = event.target.value;
    calculation();
  }
});

tipButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    percentValue = parseInt(event.target.textContent);
    calculation();
  });
});

custom.addEventListener("input", (event) => {
  if (event.target.value > 0) {
    percentValue = event.target.value;
    calculation();
  }
});

reset.addEventListener("click", () => {
  billValue = 0;
  peopleValue = 0;
  percentValue = 1;

  custom.value = "";
  peopleInput.value = "";
  billInput.value = "";
  tipResult.textContent = "0.00";
  tipAmount.textContent = "0.00";
});

function calculation() {
  if (peopleValue) {
    const tipResultValue = (billValue * (percentValue / 100)) / peopleValue;
    const totalResultValue = tipResultValue + billValue / peopleValue;

    tipResult.textContent = `${totalResultValue.toFixed(2)}`;
    tipAmount.textContent = `${tipResultValue.toFixed(2)}`;
  }
}

// let billValue = 0;
// let percentValue = 0;
// let customValue = 0;
// let peopleValue = 0;
// let resetValue = 0;

// reset.addEventListener("click", (event) => {
//   billValue = 0;
//   percentValue = 0;
//   customValue = 0;
//   peopleValue = 0;
//   resetValue = 0;

//   billInput.value = "";
//   peopleInput.value = "";
//   tipAmount.textContent = 0;
//   tipResult.textContent = 0;
// });

// billInput.addEventListener("input", (event) => {
//   billValue = event.target.value;
//   calculation(percentValue);
// });

// tipButtons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     percentValue = parseInt(event.target.textContent);
//     calculation(percentValue);
//   });
// });

// custom.addEventListener("input", (event) => {
//   calculation(event.target.value);
// });

// peopleInput.addEventListener("input", (event) => {
//   let temp = event.target.value;

//   if (temp > 0) {
//     peopleValue = temp;
//     numberOfPeopleTitle.classList.remove("error-quantity");
//     peopleInput.classList.remove("invalid");
//     calculation(percentValue);
//   } else {
//     peopleInput.classList.add("invalid");
//     numberOfPeopleTitle.classList.add("error-quantity");
//   }
// });

// function calculation(percent) {
//   const tipResultValue = (billValue * (percent / 100)) / peopleValue;
//   const totalResultValue = tipResultValue + billValue / peopleValue;

//   if (peopleValue) {
//     tipResult.textContent = `${totalResultValue.toFixed(2)}`;
//     tipAmount.textContent = `${tipResultValue.toFixed(2)}`;
//   }
// }
