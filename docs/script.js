const hello = document.getElementById('hello');
const babo = document.getElementById('babo-button');

babo.onclick = function () {
  hello.innerHTML += ' Babo';
};
