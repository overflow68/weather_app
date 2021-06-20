import { populateCityInfo } from "./dom";
const API_KEY = '96e6aaee7a6e3e2c63ff61c4089357bf';


async function getCity(city) {
    try{
     let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`, {mode: 'cors'})
     let cityData = await response.json();
     populateCityInfo(cityData);
     console.log(cityData);
    }catch(error){alert("City not found!")}
     
     
  }

  export {getCity};