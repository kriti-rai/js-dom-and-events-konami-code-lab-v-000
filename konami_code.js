const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

  let i = 0
  document.body.addEventListener('keydown', (event) => {
    const key = parseInt(event.detail || event.key);

     if (key === code[i]) {
      i++;
      if (i === code.length) {
        alert("Congratulations, you've cracked the Code!!");
        i = 0;
      }
    } else {
      i = 0;
    }
  });
}

init();
