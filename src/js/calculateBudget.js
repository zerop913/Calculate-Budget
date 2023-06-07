function calculateBudget() {
  const income = parseInt(document.getElementById("income").value);
  const expenses = parseInt(document.getElementById("expenses").value);
  const period = parseInt(document.getElementById("period").value);

  if (isNaN(income) || isNaN(expenses)) {
    showNotification('Пожалуйста, заполните поля "Доходы" и "Расходы"');
    return;
  }

  const budget = income - expenses;

  let result = "";
  if (budget > 0) {
    result = `Ваш бюджет на выбранный период: <span class="budget-number">${(
      budget * period
    ).toFixed(0)}</span>`;
  } else if (budget < 0) {
    result = `Ваш бюджет на выбранный период: <span class="deficit">дефицит ${(
      -budget * period
    ).toFixed(0)}</span>`;
  } else {
    result = "Ваш бюджет на выбранный период: 0";
  }

  showNotification(result);
}
