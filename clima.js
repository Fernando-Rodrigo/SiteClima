var input = document.querySelector('.input_text')
var main = document.querySelector('#name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var feels_like = document.querySelector('.feels_like')
var temp_min = document.querySelector('.temp_min')
var temp_max = document.querySelector('.temp_max')
var pressao = document.querySelector('.pressao')
var umidade = document.querySelector('.umidade')
var wind = document.querySelector('.wind')
var clouds = document.querySelector('.clouds')
var button = document.querySelector('.submit')


button.addEventListener('click', function (name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=metric&appid=9a4afdb555b5bbbe28fbdd8df81ecccc&lang=pt')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name']
            var tempValue = data['main']['temp']
            var feels_likeValue = data['main']['feels_like']
            var temp_minValue = data['main']['temp_min']
            var temp_maxValue = data['main']['temp_max']
            var descValue = data['weather'][0]['description']
            var pressaoValue = data['main']['pressure']
            var umidadeValue = data['main']['humidity']
            var windValue = data['wind']['speed']
            var clooudsValue = data['clouds']['all']

            main.innerHTML = nameValue;
            desc.innerHTML = 'Condição metereológica: ' + descValue
            temp.innerHTML = 'Temperatura: ' + tempValue + '°C'
            feels_like.innerHTML = "Sensação térmica: " + feels_likeValue + '°C'
            temp_min.innerHTML = 'Temperatura mínima: ' + temp_minValue + '°C'
            temp_max.innerHTML = 'Temperatura máxima: ' + temp_maxValue + '°C'
            pressao.innerHTML = 'Pressão atmosférica: ' + pressaoValue + ' hPa'
            umidade.innerHTML = 'Umidade: ' + umidadeValue + '%'
            wind.innerHTML = 'Velocidade do vento: ' + windValue + 'm/s'
            clouds.innerHTML = 'Nebulosidade: ' + clooudsValue + '%'
            input.value = ""

        })

        .catch(err => alert("Nome errado da cidade!"))
})