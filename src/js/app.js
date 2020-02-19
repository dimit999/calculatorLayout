// Table
const DATA = {
  whichSite: ['landing', 'multiPage', 'onlineStore'],
  price: [4000, 8000, 26000],
  desktopTemplates: [50, 40, 30],
  adapt: 20,
  mobileTemplates: 15,
  editable: 10,
  metrikaYandex: [500, 1000, 2000],
  analyticsGoogle: [850, 1350, 3000],
  sendOrder: 500,
  deadlineDay: [[2, 7], [3, 10], [7, 14]],
  deadlinePercent: [20, 17, 15],
};

// Elemetns
const startButton = document.querySelector('.start-button');
const firstScreen = document.querySelector('.first-screen');
const mainForm = document.querySelector('.main-form');
const formCalculate = document.querySelector('.form-calculate');
const endButton = document.querySelector('.end-button');
const blockTotal = document.querySelector('.total');
const fastRange = document.querySelector('.fast-range');
const totalPriceSum = document.querySelector('.total_price__sum');
const adaptBtn = document.getElementById('adapt');
const mobileDevices = document.getElementById('mobileTemplates');

// Default view
mobileDevices.disabled = true;

// Function
function showElements(elem) {
  elem.style.display = 'block';
}

function hideElements(elem) {
  elem.style.display = 'none';
}

function priceCalculation(elem) {
  let result = 0;
  let index = 0;
  const options = [];

  if (elem.name === 'whichSite') {
    for (const item of formCalculate.elements) {
      if (item.type === 'checkbox') {
        item.checked = false;
      }
    }
    hideElements(fastRange);
  }

  for (const item of formCalculate.elements) {
    if (item.name === 'whichSite' && item.checked) {
      index = DATA.whichSite.indexOf(item.value);
    } else if (item.classList.contains('calc-handler') && item.checked) {
        options.push(item.value);
    }
  }

  options.forEach((key) => {
    if (typeof (DATA[key]) === 'number') {
      if (key === 'sendOrder') {
        result += DATA[key];
      } else {
        result += DATA.price[index] * DATA[key] / 100;
      }
    } else if (key === 'desktopTemplates') {
        result += DATA.price[index] * DATA[key][index] / 100;
      } else {
        result += DATA[key][index];
      }
  });

  result += DATA.price[index];
  totalPriceSum.textContent = result;
}

// Handler
function handlerCallBackForm(event) {
  const target = event.target;
  if (target.classList.contains('want-faster')) {
    // eslint-disable-next-line no-unused-expressions
    target.checked ? showElements(fastRange) : hideElements(fastRange);
  }

  if (target.classList.contains('calc-handler')) {
    priceCalculation(target);
  }
}

// Events
startButton.addEventListener('click', () => {
  showElements(mainForm);
  hideElements(firstScreen);
});

endButton.addEventListener('click', () => {
  for (const elem of formCalculate.elements) {
    if (elem.tagname === 'FIELDSET') {
      hideElements(elem);
    }
  }
  showElements(blockTotal);
});

formCalculate.addEventListener('change', handlerCallBackForm);

adaptBtn.addEventListener('change', disableMobileDevices);

function disableMobileDevices() {
  if (mobileDevices.disabled === false) {
    mobileDevices.disabled = true;
  } else {
    mobileDevices.disabled = false;
    mobileDevices.checked = false;
  }
}