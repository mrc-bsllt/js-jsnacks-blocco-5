//jsnack 10
//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
$(document).ready(
  function() {

    // VERSIONE ES5-------------------------------------
    var stringsArray = [
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

    var min = 2;
    var max = 8;

    console.log(arrayFilter(stringsArray, min, max));

  }
);

// FUNZIONI------------------------------------------

// VERSIONE ES5-------------------------------------
function arrayFilter(array, numMin, numMax) {
  var newArray = [];

  for(var i = numMin; i < numMax; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
