function Converter() {
    var celsius = 'Celsius'
    var fahrenheit = 'Fahrenheit'
    var kelvin = 'Kelvin'

    var elementValue = document.getElementById('converter')
    var value = parseFloat(elementValue.value)

    var elementP = document.getElementById('paragrafo')
    elementP.innerHTML = 'O resultado da conversão é: '

    var elementUnidade1 = document.getElementById('unidade1')
    var valueUnidade1 = parseFloat(elementUnidade1)

    var elementUnidade2 = document.getElementById('unidade2')
    var valueUnidade1 = parseFloat(elementUnidade2)

    if (Object.is(celsius, fahrenheit) )

    var elementH2 = document.getElementById('resultado')
    elementH2.innerHTML = value
}