var input = document.querySelector('#input_text')
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

/*faz o botão mudar de cor quando o cursor esta sobre ele*/
button.addEventListener('mouseover', function(){
    button.style.backgroundColor = '#0e182c'
})
/*faz o botão mudar para cor original quando o cursor sai dele*/
button.addEventListener('mouseout', function(){
    button.style.backgroundColor = '#13213d'
})

button.addEventListener('click', function (name) {
    /*faz o botão mudar de cor quando se clica nele*/
    button.style.backgroundColor = '#080e1a'

    /*fiz isso pq estava demorando mto para exibir as informações, e caso o user tiver um erro e depois achar a cidade certa , o erro aparecia por um tempo ainda(assim ele limpa rapido)*/
    desc.innerHTML = ''
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
            /*eu gosto de usar o placeholder ao inves de concatenar assim->`Umidade: ${umidadeValue} %` (sempre com crase)*/
            /*Adicionei a tag strong para ficar em negrito  os <br> pra ficar melhor nos celulares*/
            desc.innerHTML = '<strong>Condição metereológica: ' + descValue + '</strong>'
            temp.innerHTML = 'Temperatura: <strong>' + tempValue + '°C</strong>'
            feels_like.innerHTML = 'Sensação térmica: <strong>' + feels_likeValue + '°C</strong>'
            temp_min.innerHTML = 'Temp. mínima: <strong>' + temp_minValue + '°C</strong>'
            temp_max.innerHTML = 'Temp. máxima: <strong>' + temp_maxValue + '°C</strong>'
            pressao.innerHTML = 'Pressão atmosférica: <strong>' + pressaoValue + ' hPa</strong>'
            umidade.innerHTML = 'Umidade: <strong>' + umidadeValue + '%</strong>'
            wind.innerHTML = 'Velocidade do vento: <strong>' + windValue + ' m/s</strong>'
            clouds.innerHTML = 'Nebulosidade: <strong>' + clooudsValue + '%</strong>'
            input.value = ""
             /*assim q essa função for executada o foco vai pro input(pto usuario não precisar levar o mouse até lá)*/
            input.focus()
        })
        /*acho melhor escrever na tela, sempre achei q o alert assusta os usuarios*/
        /*usei a area de descrição para mostrar o erro*/
        .catch(err => desc.innerHTML = '<strong>A cidade não encontrada!</strong>')/*não consegui mostrar oq foi digitado*/
        input.value = ""
        /*Pra limpar a area na ocorrencia de um erro*/
        main.innerHTML = ''
        temp.innerHTML = ''
        feels_like.innerHTML = ''
        temp_min.innerHTML = ''
        temp_max.innerHTML = ''
        pressao.innerHTML = ''
        umidade.innerHTML = ''
        wind.innerHTML = ''
        clouds.innerHTML = ''
        /*assim q essa função for executada o foco vai pro input(pto usuario não precisar levar o mouse até lá)*/
        input.focus()
})