function commonName(event) {
  const messi = document.getElementById(event);
  const value = messi.innerText;
  return value;
}

document.getElementById("player-1").addEventListener("click", function () {
  const player = commonName("messi");
  const list = document.getElementById("list-1");
  list.innerText = player;
});

document.getElementById("player-2").addEventListener("click", function () {
  const player = commonName("ronaldo");
  const list = document.getElementById("list-2");
  list.innerText = player;
});

document.getElementById("player-3").addEventListener("click", function () {
  const player = commonName("mane");
  const list = document.getElementById("list-3");
  list.innerText = player;
});

document.getElementById("player-4").addEventListener("click", function () {
  const player = commonName("salah");
  const list = document.getElementById("list-4");
  list.innerText = player;
});

document.getElementById("player-5").addEventListener("click", function () {
  const player = commonName("neymer");
  const list = document.getElementById("list-5");
  list.innerText = player;
});
