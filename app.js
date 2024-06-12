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
        // console.log(res.current.condition.icon);
        // console.log(res.current.temp_c);
        // h1.innerHTML = `${res.current.temp_c} C`
        weatherWrapper.innerHTML += `
        <div style="width: fit-content;" class="bg-light d-flex justify-content-evenly align-items-center mx-auto p-4 rounded">
            <div>
                <img width="100px" src="${res.current.condition.icon}" alt="">
            </div>
            <div class="w-50">
                <div>
                    <h1>
                        ${res.current.temp_c}
                    </h1>
                </div>
                <div>
                    <p>
                    ${res.current.condition.text}
                    </p>
                </div>
            </div>
        </div>
        `
    })
    .catch(err=>{
        console.log(err);
    })
})
