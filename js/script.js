//jsnack 10
//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
$(document).ready(
  function() {

    // VERSIONE ES5-------------------------------------
    const stringsArray = [
      "primo",
      "secondo",
      "terzo",
      "quarto",
      "quinto",
      "sesto",
      "settimo",
      "ottavo",
      "nono",
      "decimo",
    ];
    console.log(stringsArray);

    let min = randomNumber(0, 9);
    let max = itMustBeBigger(min);

    console.log(
      `
      Valore minimo: ${min}
      Valore massimo: ${max}
      `
    );

    console.log(arrayFilter(stringsArray, min, max));

  }
);


// FUNZIONI VERSIONE ES5-------------------------------------

// function arrayFilter(array, numMin, numMax) {
//   var newArray = [];
//
//   for(var i = numMin; i < numMax; i++) {
//     newArray.push(array[i]);
//   }
//   return newArray;
// }

// FUNZIONI VERSIONE ES6-------------------------------------

const arrayFilter = (array, numMin, numMax) => {
  var newArray = [];

  for(let i = numMin; i <= numMax; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const itMustBeBigger = (minValue) => {
  var validNumber = randomNumber(0, 10);

  while (validNumber <= minValue) {
    validNumber = randomNumber(0, 10);
  }

  return validNumber;
}
