function calcularFPS(fps, minutos) {
    return fps * (minutos * 60)
}

console.log(calcularFPS(1, 1)) // 60
console.log(calcularFPS(10, 2)) // 1200
console.log(calcularFPS(2, 3)) // 360