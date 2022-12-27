// const socksHead = document.querySelectorAll('.head');
// socksHead.addEventListener('click', async (event) => {
//   const response = await fetch;
// });

const colorPickerHead = document.getElementById('colorPickerHead');
const colorPickerBody = document.getElementById('colorPickerBody');
const colorPickerHeel = document.getElementById('colorPickerHeel');
const colorPickerToe = document.getElementById('colorPickerToe');
const head = document.querySelector('.head');
const sockBody = document.querySelector('.sockBody');
const sockBody2 = document.querySelector('.sockBody2');
const heel = document.querySelector('.heel');
const toe = document.querySelector('.toe');

head.style.backgroundColor = colorPickerHead.value;
sockBody.style.backgroundColor = colorPickerBody.value;
sockBody2.style.backgroundColor = colorPickerBody.value;
heel.style.backgroundColor = colorPickerHeel.value;
toe.style.backgroundColor = colorPickerToe.value;

colorPickerHead.addEventListener(
  'input',
  (event) => {
    head.style.backgroundColor = event.target.value;
  },
  false,
);
colorPickerBody.addEventListener(
  'input',
  (event) => {
    sockBody.style.backgroundColor = event.target.value;
    sockBody2.style.backgroundColor = event.target.value;
  },
  false,
);
colorPickerHeel.addEventListener(
  'input',
  (event) => {
    heel.style.backgroundColor = event.target.value;
  },
  false,
);
colorPickerToe.addEventListener(
  'input',
  (event) => {
    toe.style.backgroundColor = event.target.value;
  },
  false,
);
