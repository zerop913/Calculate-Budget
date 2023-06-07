const incomeInput = document.getElementById("income");
const expensesInput = document.getElementById("expenses");

incomeInput.addEventListener("input", function (event) {
  event.target.value = event.target.value.replace(/[^0-9]/g, "");
});

expensesInput.addEventListener("input", function (event) {
  event.target.value = event.target.value.replace(/[^0-9]/g, "");
});
