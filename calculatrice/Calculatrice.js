const resultsHTML = document.querySelector("#results");

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const numberOne = document.querySelector("#nombre1");
    const numberOneValues = numberOne.value;
    const nbrOne = parseFloat(numberOneValues);

    const numberTwo = document.querySelector("#nombre2");
    const numberTwoValue = numberTwo.value;
    const nbrTwo = parseFloat(numberTwoValue);

    const operateur = document.querySelector("#operation");
    const operateurSigne = operateur.value;

    const affiiche = document.querySelector("#results");



    

    const erreur = document.querySelector("#error");
    if( numberOneValues == "" || numberTwoValue=="" || isNaN(nbrOne) || isNaN(nbrTwo) ) {

      erreur.innerHTML = "Erreur d'entree";
      affiiche.innerHTML = "";
    }
    else {
      if(operateurSigne == "/"  &&  nbrTwo== 0)
      {
        erreur.innerHTML = "Erreur la divion par 0 n'est pas possible";
        affiiche.innerHTML= "";
      }
      else{
        var calcul12 = calcul (nbrOne, nbrTwo, operateurSigne);
        affiiche.innerHTML = calcul12;
        erreur.innerHTML="";
      }

  }

    const renitialiser12 = document.querySelector("#renitialiser");

    renitialiser12.addEventListener("click", function(event) {
      event.preventDefault();

      document.querySelector("#nombre1").value = "";
      document.querySelector("#nombre2").value = "";
      document.querySelector("#results").innerHTML = "";
      document.querySelector("#error").innerHTML = "";


    }
    
    );

  
});


function calcul(nbr1, nbr2, opr) {

  var result=0;

  if(opr== "+") {
    result = nbr1 + nbr2;
    return result;
  }


  else if (opr== "-") {
     result = nbr1 - nbr2;
     return result;
  }

  else if( opr== "*")  {
      result = nbr1 * nbr2;
      return result;
  }
  else {
     result = nbr1 / nbr2;
    return result;
  }



}



























