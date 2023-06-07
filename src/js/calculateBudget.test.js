test("Проверка функции calculateBudget", () => {
  // Создаем заглушки для необходимых элементов и свойств
  const incomeInput = document.createElement("input");
  incomeInput.id = "income";
  incomeInput.value = "1000";

  const expensesInput = document.createElement("input");
  expensesInput.id = "expenses";
  expensesInput.value = "500";

  const periodInput = document.createElement("input");
  periodInput.id = "period";
  periodInput.value = "12";

  document.getElementById = jest.fn((id) => {
    if (id === "income") return incomeInput;
    if (id === "expenses") return expensesInput;
    if (id === "period") return periodInput;
    return null;
  });

  let notification = null;
  const showNotification = (message) => {
    notification = message;
  };

  // Включаем реализацию функции calculateBudget здесь
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

  // Вызываем функцию
  calculateBudget();

  // Проверки
  expect(document.getElementById).toHaveBeenCalledWith("income");
  expect(document.getElementById).toHaveBeenCalledWith("expenses");
  expect(document.getElementById).toHaveBeenCalledWith("period");
  expect(notification).toBe(
    'Ваш бюджет на выбранный период: <span class="budget-number">6000</span>'
  );
});
