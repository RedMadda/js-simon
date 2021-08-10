/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

function memoGame(){
  let numsPc = [];

  let i = 0;
  while(numsPc.length < 5){
    var numPc = Math.floor(Math.random() * 100) + 1;
    if(!numsPc.includes(numPc)){
      numsPc.push(numPc);
    } 
    i++;
  }
  numsPc = numsPc.join(" ") + ";";
  // alert con numeri da memorizzare;
  alert("I numeri da memorizzare sono: " + numsPc);

  const numsUtente = [];
  setTimeout(function(){
    let i = 0;
    while(numsUtente.length < 5){
      let numUtente = prompt("Inserisci un numero che ricordi. Attenzione: non si possono ripetere!!");
      if(!numsUtente.includes(numUtente)){
        numsUtente.push(numUtente);
      }
      i++;
    }
    return numsUtente;
  }, 30000);
  

  let counter;
  let numsOk = [];

  // console.log(numsUtente);
  setTimeout(function(){
    if(numsUtente.length == 5){
    
      for(let i = 0; i < numsUtente.length; i++){
        if(numsPc.includes(numsUtente[i])){
          numsOk.push(numsUtente[i]);
        }
      }
      document.getElementById("print").innerHTML = "Hai indovinato " + numsOk.length + " numeri: " + numsOk.join(" ") + ";";
    }
  }, 31000)

}

