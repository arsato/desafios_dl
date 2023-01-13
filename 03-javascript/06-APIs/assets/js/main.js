const montoInput = document.getElementById("monto")
const monedasSelect = document.getElementById("monedas")
const calcularButton= document.getElementById("calcular")
const resultado = document.getElementById("resultado")
const chartContainer = document.getElementById("chartContainer")
const apiURL = "https://mindicador.cl/api/"

async function getMonedas(){
    try{
    const res = await fetch(`${apiURL}${monedasSelect.value}`)
    const moneda = await res.json()
    return moneda
    }
    catch (e) {
        alert(e.message)
    }
}

async function renderMonedas() {
    const moneda = await getMonedas()
    let val = moneda.serie[0].valor
    montoCLP = montoInput.value
    let total = (montoCLP/val).toFixed(2)
    resultado.innerText = `Resultado: ${total}`
}

function configParaGrafica(moneda){
    const tipoGrafica = "line"
    const titulo = "Historial ultimos 10 dias"
    const colorLinea = "red"
    let fechas = []
    for (let i = 0; i < 10; i++)
    {
        fechas.unshift(moneda.serie[i].fecha.substring(0,10))
    }
    let valores = []
    for (let i = 0; i < 10; i++)
    {
        valores.unshift(moneda.serie[i].valor)
    }
    const config = {
        type: tipoGrafica,
        data: {
            labels: fechas,
            datasets: [
                {
                    label: titulo,
                    backgroundColor: colorLinea,
                    data: valores
                }
            ]
        }
    }
    return config
}

async function renderGrafica() {
    const moneda = await getMonedas()
    const config = configParaGrafica(moneda)
    chartContainer.innerHTML = '<canvas id="myChart" class="bg-light"></canvas>'
    myChart = document.getElementById("myChart")
    new Chart(myChart, config)
}

calcularButton.addEventListener('click', function() {
    if(montoInput.value != ""){
        renderMonedas()
        renderGrafica()
    }
    else{
        alert("Falta ingresa un monto")
    }
})