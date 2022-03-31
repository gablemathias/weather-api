const cityValue = document.querySelector('.cityValue');
const submitButton = document.querySelector('.button');

const cityName = document.querySelector('.name');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');

const secretkey = config.SECRET_KEY;

submitButton.addEventListener('click', async () => {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityValue.value+'&appid='+secretkey);

  if(response.status !== 200){
    alert('Cidade não encontrada, insira valor válido');
    return
  }
  
  const data = await response.json()

  const nameValue = document.createTextNode(data['name']);
  const tempValue = document.createTextNode(Math.round(data['main']['temp']-273.15));
  const descValue = document.createTextNode(data['weather'][0]['description']);

  cityName.appendChild(nameValue);
  temperature.appendChild(tempValue);
  description.appendChild(descValue);

});

//Validar Input da Cidade
//Tratar Erros (Try Catch) --> Nulo, Cidade Válida
//Limpar Submit


