const form = document.querySelector('#form');
const input = document.querySelector('#input');

form.addEventListener('submit', event => {
    event.preventDefault();
    axios(`https://api.weatherapi.com/v1/current.json?key=8ef41b56b9ea40aa9d7155732241206&q=${input.value}&aqi=no`)
    .then(res => res.data)
    .then(res => {
        console.log(res.current.temp_c);
    })
    .catch(err=>{
        console.log(err);
    })
})
