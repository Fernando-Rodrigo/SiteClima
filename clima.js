var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var pressao = document.querySelector('.pressao')
var umidade = document.querySelector('.umidade')
var button = document.querySelector('.submit');


button.addEventListener('click', function(name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=metric&appid=9a4afdb555b5bbbe28fbdd8df81ecccc&lang=pt')
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];
            var pressaoValue = data['main']['pressure']
            var umidadeValue = data['main']['humidity']

            main.innerHTML = nameValue;
            desc.innerHTML = "Nebulosidade: " + descValue;
            temp.innerHTML = "Temperatura: " + tempValue + '°C';
            pressao.innerHTML = 'Pressão atmosférica: ' + pressaoValue + ' hPa'
            umidade.innerHTML = 'Umidade: ' + umidadeValue + '%'
            input.value = "";

        })

    .catch(err => alert("Nome errado da cidade!"));
})