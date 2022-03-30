const cityValue = document.querySelector('.cityValue');
const submitButton = document.querySelector('.button');

const name = document.querySelector('.name');
const description = document.querySelector('.description');
const temperature = document.querySelector('.temperature');

submitButton.addEventListener('click', () => {
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityValue.value+'&appid=38fb4a8d1ffb92242a9d58d93ec7af87')
  .then(response => response.json())
  .then(data => console.log(data))
});


/*fetch('http://api.openweathermap.org/geo/1.0/direct?q='+cityValue.value+'&limit=5&appid=38fb4a8d1ffb92242a9d58d93ec7af87')
.then(response => response.json())
.then(data => console.log(data))
*/
/*fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.1289771&lon=-84.0832646&appid=38fb4a8d1ffb92242a9d58d93ec7af87');*/