const form = document.querySelector('#form');
const input = document.querySelector('#input');
const h1 = document.querySelector('.h1');
const weatherWrapper = document.querySelector('.weather-wrapper');

form.addEventListener('submit', event => {
    event.preventDefault();
    axios(`https://api.weatherapi.com/v1/current.json?key=8ef41b56b9ea40aa9d7155732241206&q=${input.value}&aqi=no`)
    .then(res => res.data)
    .then(res => {
        console.log(res);
        let initialTime = res.location.localtime;
        let finalTime = initialTime.slice(11);
        let weatherBefore = weatherWrapper.innerHTML;
        let arr = [];
        arr.push(weatherBefore);
        weatherWrapper.innerHTML = `
        <div class="bg-light weather-card d-flex flex-column justify-content-center align-items-center mx-auto rounded">
            <div class="d-flex time-wrapper justify-content-between align-items-center w-100">
                <h2 style="font-size: 15px;font-family:'Roboto', sans-serif;font-weight: 500;" class="m-0">
                    Last recorded at
                </h2>
                <p style="font-size: 15px;font-family:'Roboto', sans-serif;font-weight: 500;" class="m-0">
                    ${finalTime}
                </p>
            </div>
            <div style="height: 1px;background-color: #d7d1d1;" class="w-100"></div>
            <div class="d-flex main-wrapper">
                <div class="main-wrapper-left">
                    <div class="degree-wrapper">
                        <div>
                            <img class="weather-img" src="https:${res.current.condition.icon}" alt="">
                        </div>
                        <div>
                            <div class="d-flex align-items-baseline">
                                <div class="temperature-main">
                                    ${res.current.temp_c}°
                                </div>
                                <span class="temperature-side">C</span>
                            </div>
                            <div class="real-feel">
                                RealFeel® ${res.current.feelslike_c}°
                            </div>
                        </div>
                    </div>
                    <div>
                        <span class="weather-review">${res.current.condition.text}</span>
                    </div>
                </div>
                <div class="main-wrapper-right">
                    <div class="d-flex justify-content-between weather-details">
                        <span>Name</span>
                        <span class="weather-details-value">${res.location.name}</span>
                    </div>
                    <div class="d-flex justify-content-between weather-details">
                        <span>Region</span>
                        <span class="weather-details-value">${res.location.region}, ${res.location.country}</span>
                    </div>
                    <div class="d-flex justify-content-between weather-details">
                        <span>Wind</span>
                        <span class="weather-details-value">${res.current.wind_kph} KPH</span>
                    </div>
                </div>
            </div>
        </div>
        ` + arr;
    })
    .catch(err=>{
        alert('Probably a spelling mistake or no such city exists.')
    })
})
