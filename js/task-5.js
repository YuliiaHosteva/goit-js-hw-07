function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  document.querySelector('.change-color').addEventListener('click', function() {
    const newColor = getRandomHexColor();
  
    // Задаємо фон для <body>
    document.body.style.backgroundColor = newColor;
  
    // Задаємо текстовий вміст для <span class="color">
    document.querySelector('.color').textContent = newColor;
  });