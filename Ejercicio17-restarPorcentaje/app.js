function calcularPorcentaje(numero, porcentaje) {
    return (numero * porcentaje) / 100
}

calcularPorcentaje(100, 15) // 15
calcularPorcentaje(10, 50) // 5
calcularPorcentaje(200, 10) // 20

function restarPorcentaje(numero, porcentaje) {
    return numero - calcularPorcentaje(numero, porcentaje)
}

console.log(restarPorcentaje(100, 15)) // 85
console.log(restarPorcentaje(10, 40)) // 6
console.log(restarPorcentaje(200, 10)) // 180