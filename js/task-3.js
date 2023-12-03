const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// Додаємо обробник події input для інпуту
nameInput.addEventListener('input', updateGreeting);

function updateGreeting() {
  // Отримуємо значення з інпуту та очищуємо від пробілів по краях
  const inputValue = nameInput.value.trim();

  // Перевіряємо, чи інпут порожній або містить лише пробіли
  const outputText = inputValue === '' ? 'Anonymous' : inputValue;

  // Оновлюємо текст у спані
  nameOutput.textContent = outputText;
}