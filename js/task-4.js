const loginForm = document.querySelector('.login-form')
const register = (event) => {
    event.preventDefault();
    // Отримуємо значення полів форми
    const emailValue = loginForm.elements.email.value.trim();
    const passwordValue = loginForm.elements.password.value.trim();
  
    // Перевірка на наявність заповнених полів
    if (!emailValue || !passwordValue) {
      alert('All form fields must be filled in');
      return;
    };
  
    // Формуємо об'єкт з введеними даними
    const formData = {
      email: emailValue,
      password: passwordValue,
    };
  
    // Виводимо об'єкт в консоль
    console.log(formData);
  
    // Очищаємо значення полів форми
    loginForm.reset();
  };
  loginForm.addEventListener('submit', register);
  