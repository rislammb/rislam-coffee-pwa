const container = document.querySelector('.container');
const coffees = [
  { name: 'Perspiciatis', image: 'images/coffee1.jpg' },
  { name: 'Voluptatem', image: 'images/coffee2.jpg' },
  { name: 'Explicabo', image: 'images/coffee3.jpg' },
  { name: 'Rchitecto', image: 'images/coffee4.jpg' },
  { name: 'Beatae', image: 'images/coffee5.jpg' },
  { name: 'Vitae', image: 'images/coffee6.jpg' },
  { name: 'Inventore', image: 'images/coffee7.jpg' }
];
const showCoffees = () => {
  let output = '';
  coffees.forEach(
    ({ name, image }) =>
      (output += `
    <div class='card'>
    <img class='card--avatar' src=${image} alt='image' />
    <h1 class='card--title'>${name}</h1>
    <a class='card--link' href='#'>Taste</a>
    </div>
    `)
  );
  container.innerHTML = output;
};
document.addEventListener('DOMContentLoaded', showCoffees);
// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then(res => console.log('Service worker registered', res))
      .catch(err => console.log('Service worker not registered', err));
  });
}
