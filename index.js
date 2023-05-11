const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a07d6db918mshdce52e0be90b26fp1af54djsncf57e70cb3b8',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = (city) => {
  cityName.innerHTML = city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {


      console.log(response)

      temp.innerHTML = response.temp
      humidity.innerHTML = response.humidity
      wind_speed.innerHTML = response.wind_speed
      wind_degrees.innerHTML = response.wind_degrees
      sunrise.innerHTML = response.sunrise
      sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}


submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value)
})
getWeather("Delhi");

function LoadDate() {

  var today = new Date();

  // specify the options for the time format
  var options = { hour: 'numeric', minute: 'numeric' };

  // get the current time in hours and minutes format
  var time = today.toLocaleTimeString('en-US', options);

  document.getElementById("dateNow").innerHTML = time;

}
