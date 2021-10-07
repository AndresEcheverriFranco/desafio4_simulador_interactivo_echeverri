let monto = Number(prompt("Ingrese cantidad que desea financiar"));

function calcularInteres(e) {
    return e / 12 * 0.5
};

let totalInteres;

totalInteres = calcularInteres(monto);
console.log("el interes mensual por año que debe pagar es " + totalInteres);