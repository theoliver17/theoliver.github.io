searchField = document.querySelector("#search");
sendBtn = document.querySelector("#send");
resultsDiv = document.querySelector(".results");
autoCompleteDiv = document.querySelector(".autoComplete");
closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  autoCompleteDiv.innerHTML = "";
  searchField.value = "";
  closeBtn.style.display = "none";
});

function search() {
  searchValue = searchField.value;

  resultsDiv.innerHTML = "";
  if (searchValue === "") {
    errorMsg = document.createElement("div");
    errorMsg.classList.add("error");
    errorMsg.innerHTML = "Ecrivez le nom d’une ville";
    resultsDiv.appendChild(errorMsg);
    return 0;
  }

  fetch(
    `https://geo.api.gouv.fr/communes?nom=${searchValue}&fields=code,codesPostaux,
    nom,region,surface,departement,population,departement&boost=population&limit=10`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.length === 0) {
        errorMsg = document.createElement("div");
        errorMsg.classList.add("error");
        errorMsg.innerHTML = "No results found";
        resultsDiv.appendChild(errorMsg);
      } else {
        data.forEach((ville) => {
          cardVille = document.createElement("div");
          cardVille.classList.add("cardVille");
          villeHeadText = document.createElement("div");
          villeHeadText.classList.add("villeHeadText");
          villeHeadText.innerHTML = `<div id="flex"><h2>${ville.nom} </h2> <p>•</p> <p>${ville.code}</p></div><p>${ville.departement.nom} (${ville.departement.code})</p>`;
          villeRegion = document.createElement("p");
          villeRegion.classList.add("villeRegion");
          villeRegion.innerHTML = ville.region.nom;
          villePopulation = document.createElement("p");
          villePopulation.innerHTML =
            "<b>Population: </b>" +
            ville.population.toLocaleString() +
            " habitants";
          villeSurface = document.createElement("p");
          villeSurface.innerHTML = "<b>Surface: </b>" + ville.surface + " km²";

          villeCodesPostaux = document.createElement("p");

          villeCodesPostaux.innerHTML =
            "<b>Codes postaux: </b>" + ville.codesPostaux.join(", ");

          cardVille.append(
            villeHeadText,
            villeRegion,
            villePopulation,
            villeSurface,
            villeCodesPostaux
          );

          resultsDiv.appendChild(cardVille);
        });
      }
    });
}

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  search();
});
