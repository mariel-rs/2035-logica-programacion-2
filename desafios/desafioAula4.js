/*
1: Crea una lista vacía llamada "listaGenerica".
*/
let listaGenerica = [];

/*
2: Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion" 
con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
*/

let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

/*
3: Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 
'Java', 'Ruby' y 'GoLang'.
*/

lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

/*
4: Crea una función que muestre en la consola todos los elementos de la lista
lenguagesDeProgramacion.
*/
function displayListElements(list) {
    list.forEach(element => {
        console.log(element);
    });
}

/*
5: Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion en orden inverso.
*/
function displayListElementsReverse(list) {

    element = list.length - 1

    while (element >= 0) {
        console.log(`List element: ${list[element]}`);
        element--;
    }
}

/*
6: Crea una función que calcule el promedio de los elementos en una lista de 
números.
*/

function calculateAverage(list) {
    let listSize = list.length;

    let sum = list.reduce((acc, currValue) => acc + currValue, 0);

    return sum / listSize;
}

/*
7: Crea una función que muestre en la consola el número más grande y el número 
más pequeño en una lista.
*/
function findHighestLowestNumber(list) {
    let lowestNumber = list[0];
    let highestNumber = list[0];

    for (let i = 0; i <= list.length; i++) {
        if (lowestNumber > list[i]) {
            lowestNumber = list[i];
        } 
        
        if (highestNumber < list[i]) {
            highestNumber = list[i];
        }
    }

    console.log(`Highest number: ${highestNumber}`);
    console.log(`Lowest number: ${lowestNumber}`);
}


/*
8: Crea una función que devuelva la suma de todos los elementos en una lista.
*/

function calculateSumValues(list) {
    let sum = list.reduce((acc, currValue) => acc + currValue, 0);

    return sum;
}

/*
9: Crea una función que devuelva la posición en la lista donde se encuentra un 
elemento pasado como parámetro, o -1 si no existe en la lista.
*/

function findElementIndex(list, element) {
    let idx = -1;

    for (let i = 0; i <= list.length; i++) {
        if (element === list[i]) {
            idx = i;
        }
    }

    return idx;
}

/*
10: Crea una función que reciba dos listas de números del mismo tamaño y 
devuelva una nueva lista con la suma de los elementos uno a uno.
*/

function sumElementbyElementinLists(list1, list2) {
    let combinedList = [];

    for(let i = 0; i <= list1.length; i++) {
        let newElement = list1[i] + list2[i];
        combinedList.push(newElement);
    }

    return combinedList;
}

/*
11: Crea una función que reciba una lista de números y devuelva una nueva lista 
con el cuadrado de cada número.
*/
function squareElementsInList(list) {
    let squaredList = [];

    list.forEach(el => {
        squaredList.push(el*el);   
    })

    return squaredList;
}