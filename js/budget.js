document
  .getElementById("playear-expense")
  .addEventListener("click", function () {
    const perPlayer = document.getElementById("playerInput");
    const perPlayearValue = parseInt(perPlayer.value);

    const playearExpense = document.getElementById("total-player-expense");

    playearExpense.innerText = perPlayearValue * 5;
  });
