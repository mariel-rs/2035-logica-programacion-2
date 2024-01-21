/* 
1: Crear una función que muestre "¡Hola, mundo!" en la consola.
*/
function helloWorld() {
    console.log("Hola, mundo!");
}

/* 
2: Crear una función que reciba un nombre como parámetro y muestre 
"¡Hola, [nombre]!" en la consola.
*/
function sayHelloToSomeone(name) {
    console.log(`Hola, ${name}!`);
}

/*
3: Crear una función que reciba un número como parámetro y devuelva el doble 
de ese número.
*/
function returnDouble(number) {
    return number * 2;
}

/* 
4: Crear una función que reciba tres números como parámetros y devuelva su 
promedio.
*/
function calculateAverage(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

/* 
5: Crear una función que reciba dos números como parámetros y devuelva el 
mayor de ellos.
*/
function getHighestNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

/* 
6: Crear una función que reciba un número como parámetro y devuelva el 
resultado de multiplicar ese número por sí mismo.
*/
function squareNumber(num) {
    return num * num ;
}