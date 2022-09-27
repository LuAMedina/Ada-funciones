function calcularPorcentaje(numero, porcentaje) {
    return (numero * porcentaje) / 100
}

calcularPorcentaje(100, 15) // 15
calcularPorcentaje(10, 50) // 5
calcularPorcentaje(200, 10) // 20

function sumarPorcentaje(numero, porcentaje) {
    return numero + calcularPorcentaje(numero, porcentaje)
}

console.log(sumarPorcentaje(100, 15)) // 115
console.log(sumarPorcentaje(10, 50)) // 15
console.log(sumarPorcentaje(200, 10)) // 220