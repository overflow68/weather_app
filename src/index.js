import dom from './dom.js';
import {getCity} from './getData.js';

let searchBtn = document.getElementById("submit");
let input = document.getElementById("search")

searchBtn.addEventListener("click",()=>{

    getCity(input.value);
})








