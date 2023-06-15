let recipes = [];

const recipe = {
  id: Date.now(),
  name: "nom",
  ingredients: "parrabellum",
  preparation: "parrabellum",
  time: 12,
  people: 12,
};

const nomInput = document.querySelector("#reciepe");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const ingredients = document.querySelector("#ingredients").value;
  const preparation = document.querySelector("#preparation").value;
  const people = document.querySelector("#people").value;
  const time = document.querySelector("#time").value;

  if (!name || !ingredients || !preparation || !people || !time) {
    return;
  }

  const recipe = {
    id: Date.now(),
    name: nom,
    ingredients: ingredients,
    preparation: preparation,
    time: time,
    people: people,
  };

  recipe.unshift(recipe);

  const recipeHTML = document.createElement(div);

  const titleHTML = document.createElement(h2);
  titleHTML.textContent = name;

  const peopleHTML = document.createElement(p);
  peopleHTML.innerHTML = "Nombre de personnes : <strong>${people}</strong>";

  const ingredientsHTML = document.createElement(p);
  ingredientsHTML.textContent = "Ingredients ";

  const timeHTML = document.createElement(p);
  timesHTML.textContent = "Temps de préparation ";

  const dleteHTML = document.createElement(a);
  deleteHTML.textContent = " Supprimer la recette";
});

// const IngredientInput = document.querySelector("#Ingredients");
// IngredientsInput.value = localStorage.getItem("textarea");

// const preparationInput = document.querySelector("#Ingredients");
// preparationInput.value = localStorage.getItem("textarea");

// const tempspreparationInput = document.querySelector("#Ingredients");
// tempspreparationInput.value = localStorage.getItem("input");

// const nbrpersonnesInput = document.querySelector("#Ingredients");
// nbrpersonnesInput.value = localStorage.getItem("input");

// const IngredientsValue = InhgredientsInput.value;

// taskInput.addEventListener("input", function (e) {
//   e.preventDefault();

//   localStorage.setItem("input", taskInput.value);
// });

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   // Récupération des valeurs saisient par l'utilisateur
//   const recetteValue = recetteInput.value;
//   const IngredientsValue = IngredientsInput.value;
//   const preparationValue = preparationInput.value;
//   const tempspreparationValue = tempspreparationInput.value;
//   const nbrpersonnesValue = nbrpersonnesInput.value;

//   //Vérifier que le champ ne soit pas vide
//   //   if (!taskValue.trim()) {
//   //     displayErrorNotification("Erreur, champ manquant");
//   //     return;
//   //   }

//   // Ajouter la tâche dans la liste de tâches
//   let task = {
//     content: taskValue,
//     done: false,
//     id: Date.now(),
//   };

//   tasks.push(task);

//   // Vider l'input de saisie
//   taskInput.value = "";
//   taskInput.focus();

//   localStorage.setItem("input", "");
// });
