// // const socksHead = document.querySelectorAll('.head');
// // socksHead.addEventListener('click', async (event) => {
// //   const response = await fetch;
// // });

// const colorPickerHead = document.getElementById('colorPickerHead');
// const colorPickerBody = document.getElementById('colorPickerBody');
// const colorPickerHeel = document.getElementById('colorPickerHeel');
// const colorPickerToe = document.getElementById('colorPickerToe');
// const head = document.querySelector('.head');
// const sockBody = document.querySelector('.sockBody');
// const sockBody2 = document.querySelector('.sockBody2');
// const heel = document.querySelector('.heel');
// const smallheel = document.querySelector('.smallheel ');
// const toe = document.querySelector('.toe');

// head.style.backgroundColor = colorPickerHead.value;
// sockBody.style.backgroundColor = colorPickerBody.value;
// sockBody2.style.backgroundColor = colorPickerBody.value;
// heel.style.backgroundColor = colorPickerHeel.value;
// smallheel.style.backgroundColor = colorPickerBody.value;
// toe.style.backgroundColor = colorPickerToe.value;

// colorPickerHead.addEventListener(
//   'input',
//   (event) => {
//     head.style.backgroundColor = event.target.value;
//   },
//   false,
// );
// colorPickerBody.addEventListener(
//   'input',
//   (event) => {
//     sockBody.style.backgroundColor = event.target.value;
//     sockBody2.style.backgroundColor = event.target.value;
//     smallheel.style.backgroundColor = event.target.value;
//   },
//   false,
// );
// colorPickerHeel.addEventListener(
//   'input',
//   (event) => {
//     heel.style.backgroundColor = event.target.value;
//   },
//   false,
// );
// colorPickerToe.addEventListener(
//   'input',
//   (event) => {
//     toe.style.backgroundColor = event.target.value;
//   },
//   false,
// );
document.querySelectorAll('.buttons .deleteLink').forEach((del) => {
  del.addEventListener('click', async (event) => {
    event.preventDefault();
    // const description = event.target.description.href;
    // console.log(event.target);
    const delid = event.target.getAttribute('deletid');
    // console.log(delid);
    const res = await fetch(`/render/basket/${delid}`, {
      method: 'DELETE',
    });
    event.target.closest('.item').remove();
  });
});

document.querySelectorAll('.buttonsFav .deleteLinkFav').forEach((del) => {
  del.addEventListener('click', async (event) => {
    event.preventDefault();
    // const description = event.target.description.href;
    // console.log(event.target);
    const delid = event.target.getAttribute('deletidfav');
    const res = await fetch(`/render/like/${delid}`, {
      method: 'DELETE',
    });
    const result = await res.json();
    console.log(result);
    if (result.status === 'ok') {
      event.target.closest('.itemfav').remove();
    }
  });
});
const price = document.querySelector('.totalPrice').textContent;

const mainDiv = document.querySelector('.shoppingCart');
mainDiv.addEventListener('click', async (event) => {
  if (event.target.classList.contains('plusBtn')) {
    const count = event.target.nextSibling.value;
    let valueInput = Number(count);
    valueInput += 1;
    event.target.nextSibling.value = valueInput;
    event.target.closest('.item').querySelector('.totalPrice').textContent =
      price * valueInput;
  }
  if (event.target.classList.contains('minusBtn')) {
    const count = event.target.previousSibling.value;
    let valueInput = Number(count);
    if (valueInput > 1) {
      valueInput -= 1;
      event.target.closest('.item').querySelector('.totalPrice').textContent =
        price * valueInput;
    }
    if (valueInput === 1) {
      valueInput = 1;
      event.target.closest('.item').querySelector('.totalPrice').textContent =
        price;
    }
    event.target.previousSibling.value = valueInput;
  }
});
