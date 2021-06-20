import background from './background.css';
import style from './style.css';
import gitimg from './images/git.png'

const infoDiv = document.getElementById("contents");
const searchContent = document.getElementById("searchContents");
const githubPic = document.getElementById("gitlink")

githubPic.src = gitimg;






function populateCityInfo(city){
    clearBox("contents");
    let tempC = (city.main.feels_like-273.15)
    let tempCround = Math.round(tempC * 10) / 10
    /*container for first set of info */
    let infoContainer = document.createElement("div");
    infoContainer.setAttribute("id","info");
    
    let wrap = document.createElement("div");
    wrap.setAttribute("id","wrapname");

    let cityName = document.createElement("p");
    cityName.setAttribute("id","name");
    let weather = document.createElement("p");
    weather.setAttribute("id","weather");
    weather.textContent = city.weather[0].description;
    cityName.textContent = city.name + ", " + city.sys.country;
    wrap.appendChild(cityName);
    wrap.appendChild(weather);
    infoContainer.appendChild(wrap);
    

    /*where we display temperature and second set of info*/
    let allinfo = document.createElement("div");
    allinfo.setAttribute("id","allinfo");
    infoContainer.appendChild(allinfo);

    let tempdiv = document.createElement("div");
    tempdiv.setAttribute("id","tempdiv");
    let feelsLike = document.createElement("p");
    feelsLike.setAttribute("id","feelsLike");
    feelsLike.textContent = tempCround.toFixed(0) + " ºC";
    tempdiv.appendChild(feelsLike);
    allinfo.appendChild(tempdiv);

     /*container for second set of info */
    let otherInfoContainer = document.createElement("div");
    otherInfoContainer.setAttribute("id","info2");
    allinfo.appendChild(otherInfoContainer);

    let humidity = document.createElement("p");
    humidity.textContent = "HUMIDITY: " + city.main.humidity + "%";
    humidity.setAttribute("id","humidity");
    otherInfoContainer.appendChild(humidity);

    let pressure = document.createElement("p");
    pressure.setAttribute("id","pressure");
    pressure.textContent = "PRESSURE: " + city.main.pressure + " hPa";
    otherInfoContainer.appendChild(pressure);

    let wind = document.createElement("p");
    wind.setAttribute("id","wind");
    wind.textContent = "wind: " + city.wind.speed + " mph";
    otherInfoContainer.appendChild(wind);

    infoDiv.appendChild(infoContainer);
    infoContainer.classList.add("box", "faded-out")
    requestAnimationFrame(() => {
        infoContainer.classList.remove("faded-out")
      })
    
        
    
}
function clearBox(elementID){
    if (document.getElementById(elementID)){
    document.getElementById(elementID).innerHTML = "";
}else{
    return null;
}
}

export {searchContent,infoDiv,populateCityInfo};