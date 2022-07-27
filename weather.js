let weather={
    apikey:"730c4ec0a1c4030c79ff647fb251b23b",
    fetchWeather:function(city){
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" 
            + city + 
            "&units=metric&appid=" 
            + this.apikey
        )
        .then((response) => response.json())
        .then((data)=> this.dispayWeather(data));
    },
    dispayWeather: function(data){
        const {name}=data;
        const{icon,description}=data.weather[0];
        const{temp,humidity}=data.main;
        const{speed}=data.wind;
document.querySelector(".city").innerText="Weather in " + name;
document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon  +".png"
document.querySelector(".description").innerText = description;
document.querySelector(".temp").innerText = temp + "°C";
document.querySelector(".humidity").innerText="Humidity:" + humidity + "%";
document.querySelector(".wind").innerText="Wind Speed:" + speed + "km/h";
document.querySelector(".weather").classList.remove("loading");
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document
.querySelector(".search button")
.addEventListener("click",function(){
    weather.search();
});

document.querySelector(" .search-bar").addEventListener("keyup",function(event){
if(event.key=="Enter"){
    weather.search();
}
});

weather.fetchWeather("New Delhi");
