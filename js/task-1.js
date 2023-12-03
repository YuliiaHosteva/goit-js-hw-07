// Отримуємо список категорій (елементів li.item)
const categoriesList = document.querySelectorAll('#categories .item');

// Виводимо кількість категорій в консоль
console.log(`Кількість категорій: ${categoriesList.length}`);

// Проходимося по кожній категорії і виводимо інформацію в консоль
categoriesList.forEach(category => {
  // Отримуємо заголовок категорії (тег h2)
  const categoryName = category.querySelector('h2').textContent;

  // Отримуємо список елементів в межах категорії (всі <li> вкладені в категорію)
  const categoryItems = category.querySelectorAll('ul li');

  // Виводимо інформацію в консоль
  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів в категорії "${categoryName}": ${categoryItems.length}`);
});
