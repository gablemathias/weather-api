const cityValue = document.querySelector('.cityValue');
const submitButton = document.querySelector('.button');

const cityName = document.querySelector('.name');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');

submitButton.addEventListener('click', () => {
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityValue.value+'&appid=38fb4a8d1ffb92242a9d58d93ec7af87')
  .then(response => response.json())
  .then(data => {

    const nameValue = document.createTextNode(data['name']);
    const tempValue = document.createTextNode(data['main']['temp']);
    const descValue = document.createTextNode(data['weather'][0]['description']);

    cityName.appendChild(nameValue);
    temperature.appendChild(tempValue);
    description.appendChild(descValue);

  })
});


/*fetch('http://api.openweathermap.org/geo/1.0/direct?q='+cityValue.value+'&limit=5&appid=38fb4a8d1ffb92242a9d58d93ec7af87')
.then(response => response.json())
.then(data => console.log(data))
*/
/*fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.1289771&lon=-84.0832646&appid=38fb4a8d1ffb92242a9d58d93ec7af87');*/