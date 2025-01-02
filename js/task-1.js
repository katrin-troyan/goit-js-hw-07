const categoriesList = document.querySelector('ul#categories');
const categories = categoriesList.querySelectorAll('.item');
console.log('Number of categories:', categories.length);

categories.forEach(category => {
  const categoryName = category.querySelector('.categories-title').textContent;
  const elementsCategory = category.querySelectorAll('.categories-item').length;
  console.log('Category: ', categoryName);
  console.log('Elements: ', elementsCategory);
});
