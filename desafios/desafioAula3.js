/*
1: Crea una función que calcule el índice de masa corporal (IMC) de una persona 
a partir de su altura en metros y peso en kilogramos, que se recibirán como 
parámetros.
*/
function calculateImc(height, weight) {
    return weight / (height * 100);
}

/*
2: Crea una función que calcule el valor del factorial de un número pasado como 
parámetro.
*/

function calculateFactorial(number) {
    if (number == 1 || number == 0) {
        return 1;
    } else {
        return number * calculateFactorial(number - 1); // recursive
    }

}

/*
3: Crea una función que convierta un valor en dólares, pasado como parámetro, y 
devuelva el valor equivalente en reales(moneda brasileña, si deseas puedes 
hacerlo con el valor del dólar en tu país). Para esto, considera la cotización 
del dólar igual a R$4,80.
*/

function convertToReals(dollarAmount) {
    const exchangeRate = 4.80;
    return dollarAmount * exchangeRate;
}

/*
4: Crea una función que muestre en pantalla el área y el perímetro de una sala 
rectangular, utilizando la altura y la anchura que se proporcionarán como 
parámetros.
*/

function calculateAreaPerimeterRectangle(length, width) {
    let perimeter = 2 * (length + width);
    let area = length * width;

    console.log(`Perimeter: ${perimeter}`);
    console.log(`Area: ${area}`);
}

/*
5: Crea una función que muestre en pantalla el área y el perímetro de una sala 
circular, utilizando su radio que se proporcionará como parámetro. 
Considera Pi = 3,14.
*/

function calculateAreaPerimeterCircle(radius) {
    let pi = 3.14;
    let perimeter = 2 * pi * radius;
    let area = pi * (radius ^ 2);

    console.log(`Perimeter: ${perimeter}`);
    console.log(`Area: ${area}`);
}


/*
6: Crea una función que muestre en pantalla la tabla de multiplicar de un 
número dado como parámetro.
*/

function getTimetable(number) {
    let multiplier = 1;
    while (multiplier <= 10) {
        let result = number * multiplier;
        console.log(`${number} * ${multiplier} = ${result}`);
        multiplier++;
    }
}