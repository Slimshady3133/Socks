
document.querySelectorAll('.buttons .deleteLink').forEach((del) => {
  del.addEventListener('click', async (event) => {
    event.preventDefault();
    const delid = event.target.getAttribute('deletid');
    const res = await fetch(`/render/basket/${delid}`, {
      method: 'DELETE',
    });
    event.target.closest('.item').remove();
  });
});

document.querySelectorAll('.buttonsFav .deleteLinkFav').forEach((del) => {
  del.addEventListener('click', async (event) => {
    event.preventDefault();
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
