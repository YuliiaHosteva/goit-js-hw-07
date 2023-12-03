function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  function createBoxes(amount) {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = ''; // Очищення контейнера перед додаванням нових елементів
  
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
  
      boxesContainer.appendChild(box);
    }
  }
  
  function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = ''; // Очищення контейнера
  }
  
  document.querySelector('[data-create]').addEventListener('click', function() {
    const input = document.querySelector('input');
    const amount = parseInt(input.value, 10);
  
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = ''; // Очищення значення input
    }
  });
  
  document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);