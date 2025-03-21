const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');
const temperatureContainer = document.querySelector('#temprature');
const wind = document.querySelector('#wind');
const windChill = document.querySelector('#windchill');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`


 let temperature = 10;
 let windSpeed = 5;

const calculateWindChill = (temperature, wind) => {
    return (13.12 + (0.6215 * temperature)) - ( 11.37 * (wind**0.16)) + (0.3965 * temperature * (wind**0.16))
}

 if (temperature <= 10 && windSpeed > 4.8){
    windChill.innerHTML = `${calculateWindChill(temperature, windSpeed).toFixed(1)}&deg;C`
 } else {
    windChill.innerHTML = "N/A."
 }


