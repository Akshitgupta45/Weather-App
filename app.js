
const weatherApi={
    key:"001bc72375f682d0856e46a5abd62970",
    url:"https://api.openweathermap.org/data/2.5/weather?"
}

// Event listener function using keypress(enter-key)
const searchInput=document.getElementById("input-box");
searchInput.addEventListener('keypress',(event)=>{

    if(event.keyCode == 13){
        console.log(searchInput.value);
        getWeatherInfo(searchInput.value);
        document.querySelector('.weather-info').style.display="block"
    }
    
})

// Get weather report function
function getWeatherInfo(city){
    fetch(`${weatherApi.url}q=${city}&appid=${weatherApi.key}&units=metric`)
    .then( weather=>{
        return weather.json();
    })
    .then(showWeather);
}

// Show eather report function
function showWeather(weather){
    console.log(weather);
    let city=document.getElementById("city");
    city.innerText=`${weather.name}, ${weather.sys.country}`

    let temp=document.getElementById('temp')
    temp.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    let min_max=document.getElementById('min-max');
    min_max.innerHTML=`${Math.floor(weather.main.temp_max)}&deg;C(min)/${Math.ceil(weather.main.temp_min)}&deg;C(max)`

    let weatherType=document.getElementById('weather-type');
    weatherType.innerText=`${weather.weather[0].main}`

    let date=document.getElementById('date');
    let todayDate=new Date();
    date.innerText=dateManage(todayDate);

    if(weatherType.textContent== 'Clouds'){
        document.body.style.backgroundImage= "url('img/cloudy.jpg')"
    }
    else if(weatherType.textContent== 'Clear'){
        document.body.style.backgroundImage=  "url('img/clear.jpg')"
    }
    else if(weatherType.textContent== 'Sunny'){
        document.body.style.backgroundImage= "url('img/sunny.jpg')"
    }
    else if(weatherType.textContent== 'Thunderstorm'){
        document.body.style.backgroundImage= "url('img/thunderstorm.jpg')"
    }
    else if(weatherType.textContent== 'Snow'){
        document.body.style.backgroundImage= "url('img/snow.jpg')"
    }
    else if(weatherType.textContent== 'Rain'){
        document.body.style.backgroundImage= "url('img/rain.jpg')"
    }
    else if(weatherType.textContent== 'Haze'){
        document.body.style.backgroundImage= "url('img/haze.jpg')"
    }
}

// Date handling
function dateManage(dateArg){

    let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let date=dateArg.getDate();
    let month=months[dateArg.getMonth()];
    let day=days[dateArg.getDay()];
    let year=dateArg.getFullYear();

    return `${date} ${month} ${day} ${year}`;
}