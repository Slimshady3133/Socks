document.querySelector('.btnDiv').addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.classList.contains('btnBasket')) {
    // console.log('THERE')
    const idPicture = event.target
      .closest('.conteinerConstructor')
      .querySelector('.change-sock')
      .getAttribute('picid');
    const res = await fetch(`/home/picture/${idPicture}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: idPicture,
      }),
    });
    await res.json();
  }

  if (event.target.classList.contains('btnFavorites')) {
    const idPicture = event.target
      .closest('.conteinerConstructor')
      .querySelector('.change-sock')
      .getAttribute('picid');
    // console.log(idPicture)
    const res = await fetch(`/home/picture/${idPicture}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: idPicture,
      }),
    });
    await res.json();
  }
});
function show() {
  const p = document.getElementById('pwd');
  p.setAttribute('type', 'text');
}

function hide() {
  const p = document.getElementById('pwd');
  p.setAttribute('type', 'password');
}

let pwShown = 0;

document.getElementById('eye').addEventListener(
  'click',
  () => {
    if (pwShown === 0) {
      pwShown = 1;
      show();
    } else {
      pwShown = 0;
      hide();
    }
  },
  false,
);
