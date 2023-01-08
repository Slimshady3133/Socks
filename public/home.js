const btnContainer = document.querySelector('.blockBtn');
btnContainer.addEventListener('click', async (event) => {
  if (event.target.classList.contains('btnLink')) {
    event.preventDefault();
    const res = await fetch('/home/color', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        color: event.target.dataset.color,
      }),
    });
    const { url } = await res.json();
    document.querySelector('.change-sock').setAttribute('src', `${url}`);
  }

  if (event.target.classList.contains('btnLinkPic')) {
    event.preventDefault();
    const res = await fetch('/home/picture', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: event.target.dataset.name,
      }),
    });
    const { url, id } = await res.json();
    document.querySelector('.change-sock').setAttribute('src', `${url}`);
    document.querySelector('.change-sock').setAttribute('picid', `${id}`);
  }
});
