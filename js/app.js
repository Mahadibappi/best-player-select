function commonName(event) {
  const name = document.getElementById(event);
  const value = name.innerText;
  return value;
}

document.getElementById("player-1").addEventListener("click", function () {
  const player = commonName("messi");
  const list = document.getElementById("list-1");
  list.innerText = player;
  //disble button
  const disbale = document.getElementById("player-1");
  disbale.style.backgroundColor = "grey";
});

document.getElementById("player-2").addEventListener("click", function () {
  const player = commonName("ronaldo");
  const list = document.getElementById("list-2");
  list.innerText = player;

  //disble button
  const disbale = document.getElementById("player-2");
  disbale.style.backgroundColor = "grey";
});

document.getElementById("player-3").addEventListener("click", function () {
  const player = commonName("mane");
  const list = document.getElementById("list-3");
  list.innerText = player;

  //disble button
  const disbale = document.getElementById("player-3");
  disbale.style.backgroundColor = "grey";
});

document.getElementById("player-4").addEventListener("click", function () {
  const player = commonName("salah");
  const list = document.getElementById("list-4");
  list.innerText = player;

  //disble button
  const disbale = document.getElementById("player-4");
  disbale.style.backgroundColor = "grey";
});

document.getElementById("player-5").addEventListener("click", function () {
  const player = commonName("neymer");
  const list = document.getElementById("list-5");
  list.innerText = player;

  //disble button
  const disbale = document.getElementById("player-5");
  disbale.style.backgroundColor = "grey";
});
