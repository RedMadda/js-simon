// alert espone 5 num random;
var timesNum = 5;

var numeriRandom = getNumsRandom(1, 100);
console.log(numeriRandom);

alert("Attenzione! Devi memorizzare i 5 numeri che compariranno! Pronto?");

alert("memorizza: " + numeriRandom);


// creo il countdown di 30 sec
var secMancanti = 1;
var stampa = document.getElementById("print");

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (secMancanti == -1) {
    clearTimeout(timerId);
    document.getElementById("print").innerHTML = "Inizio gioco, pronto? Vediamo quanto sei abile!";
    closingAlert();
  } else {
    stampa.innerHTML = secMancanti + " secondi rimanenti.";
    secMancanti--;
  }
}

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
var numeriUtente = [];
var indovinati = [];
console.log(indovinati);
// delay prompt
// var time = 1000;
// setTimeout(takePushNumUtente(time){
//   secMancanti.SpawnCounter();
// }, time);

setTimeout(takePushNumUtente, 5000);

// visualizzo quanti e in caso quali numeri sono stati indovinati

// FUNZIONI

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getNumsRandom(min, max){
  var numbersRandom = [];
  for (var i = 0; numbersRandom.length < timesNum; i++) {
    var numRandom = getRndInteger(min, max);
    if (!numbersRandom.includes(numRandom)) {
      numbersRandom.push(numRandom);
    } else {
      var numRandom = getRndInteger(min, max);
    }
  }
  return numbersRandom;
}

function closingAlert(){
  alert("Tempo scauto, chiudi la finestra e... buona fortuna!");
}

function takePushNumUtente(){

  while ( numeriUtente.length < timesNum){

    var numUtente = parseInt(prompt("Inserisci un numero fra 0 e 100. Attenzione a non ripetere."));

    while (numUtente == isNaN || numUtente < 0 || numUtente > 100 || numeriUtente.includes(numUtente) ){

      var numUtente = parseInt(prompt("Inserisci un numero fra 0 e 100, in cifre. Stare attenti che non sia già stato utilizzato."));
    }
    if(!numeriUtente.includes(numUtente)){
      numeriUtente.push(numUtente);
    } else if (!numeriUtente.includes(numRandom)){
      indovinati.push(numUtente);
    }
  }
}