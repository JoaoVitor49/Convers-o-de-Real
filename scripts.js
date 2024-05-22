const button = document.getElementById('botao-converter')
const select = document.getElementById('moeda-select')
const dolar = 5.15
const euro = 5.58

const convertValores = () => {
    const valor = document.getElementById('input-valor').value
    const realText = document.getElementById('valor-real')
    const moedaText = document.getElementById('valor-moeda-destino')
    realText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }).format(valor)
    
    if(select.value === 'US$ Dólar americano'){
        moedaText.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }).format(valor / dolar)
    }

    if(select.value === '€ Euro'){
        moedaText.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'EUR' }).format(valor / euro)
    }  

}

changeMoedas = () =>{
    const nameMoeda = document.getElementById('nome-moeda-destino')
    const img = document.getElementById('img-moeda-destino')
    if(select.value === '€ Euro'){
        nameMoeda.innerHTML = 'Euro'
        img.src = "./img/euro.png"     
    }
    if(select.value === 'US$ Dólar americano'){
        nameMoeda.innerHTML = 'Dólar americano'
        img.src = "./img/eua.png"       
    }

    convertValores()
}

button.addEventListener('click', convertValores)
select.addEventListener('change', changeMoedas)