function perPlayearExpense(event) {
  const perPlayer = document.getElementById(event);
  const perPlayearValue = parseInt(perPlayer.value);
  const TotalPlayerCost = perPlayearValue * 5;

  const playearExpense = document.getElementById("total-player-expense");
  playearExpense.innerText = TotalPlayerCost;

  perPlayer.value = "";
}

document
  .getElementById("playear-expense")
  .addEventListener("click", function () {
    perPlayearExpense("playerInput");
  });

// total cost calculation

function finalCalculation() {
  const managerCost = document.getElementById("manager-cost");
  const managerValue = parseInt(managerCost.value);
  managerCost.value = "";
  const coachCost = document.getElementById("coach-cost");
  const coachValue = parseInt(coachCost.value);
  coachCost.value = "";
  const managerCoachTotal = managerValue + coachValue;

  const playearExpense = document.getElementById("total-player-expense");
  const totalPlayerExpense = parseInt(playearExpense.innerText);
  console.log(typeof totalPlayerExpense);

  const totalCost = document.getElementById("total-cost");
  totalCost.innerText = managerCoachTotal + totalPlayerExpense;
}
document
  .getElementById("final-calculation")
  .addEventListener("click", function () {
    finalCalculation();
  });
