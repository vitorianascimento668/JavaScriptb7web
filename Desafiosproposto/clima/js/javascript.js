let botao = document.querySelector('.botao_busca')
let conversaoKevin = 0
let nome = ''
let pais = ''

var clicou = async () =>{
    document.querySelector('.contaier-resposta').style.display = 'block'

    let input = document.querySelector('input').value
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=297c8e1c49b86f7d3cd75ffb4de43966
    `
    let dados_url = await fetch(url) 
    let dados_url_json = await dados_url.json()
    console.log(dados_url_json , 'dados da url_json')
    fazerConversao(dados_url_json)

   
}
function fazerConversao (dadosdaURL) {
     dadosdaURL.map((parametro)=>{
        let lat = parametro.lat
        let lon = parametro.lon
        nome = parametro.name 
        pais = parametro.country
       pegarTemperatura(lat,lon)


    })
}


var pegarTemperatura = async (lat,lon)=>{
    let url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=297c8e1c49b86f7d3cd75ffb4de43966   `
    var r = await fetch(url2)
    var resultado = await r.json()
    mostrarTemperatura(resultado)
}

let mostrarTemperatura = async (res) =>{
        conversaoKevin = res.main.temp - 273.15
        document.querySelector('.nome-estado').innerHTML = `${nome} - ${pais}`
        document.querySelector('.valor-vento').innerHTML = `${res.wind.speed}<small> km/h</small>`
        document.querySelector('.valor-temperatura').innerHTML = `${conversaoKevin.toFixed(2)} <small>°C</small>`

        
        console.log(res ,'res')
    
}
botao.addEventListener('click',clicou)

