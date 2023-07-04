// Elements
const elForm = document.querySelector("form");
const elInput = document.querySelector("input");
const elSelect = document.querySelector("select");
const elHeading = document.querySelector("h1");

// Variables
let course;
let rub = 128.29;
let usd = 11516.09;
let euro = 12554.27;

// functions
function eventSelect() {
  switch (elSelect.value) {
    case "usd":
      course = usd;
      return;

    case "eur":
      course = euro;
      return;

    case "rub":
      course = rub;
      return;

    default:
      return;
  }
}

function eventForm(e) {
  e.preventDefault();

  if (!course) {
    elHeading.textContent = "Valuta turini tanlang";
    return;
  }

  elHeading.textContent = `${(+elInput.value / course).toFixed(2)} ${elSelect.value}`;
}

// Events
elSelect.addEventListener("change", eventSelect);

elForm.addEventListener("submit", eventForm);
