const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const galleryContainer = document.querySelector('.gallery');

// Створюємо фрагмент для оптимізації додавання елементів в DOM
const fragment = document.createDocumentFragment();

// Проходимося по масиву images та створюємо для кожного об'єкта елемент li з дочірнім елементом img
images.forEach((image) => {
  const listItem = document.createElement('li');
  const imageElement = document.createElement('img');

  // Встановлюємо атрибути для зображення
  imageElement.src = image.url;
  imageElement.alt = image.alt;

  // Додаємо зображення в li
  listItem.appendChild(imageElement);

  // Додаємо li в фрагмент
  fragment.appendChild(listItem);
});

// Додаємо фрагмент (весь список) в ul.gallery за одну операцію
galleryContainer.appendChild(fragment);

// Додаємо класи для оформлення за допомогою CSS
galleryContainer.classList.add('gallery-container');
