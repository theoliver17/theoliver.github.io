let recipes = [];

const recipesHTML = document.querySelector("#recipes");

if (localStorage.getItem("recipes")) {
  recipes = JSON.parse(localStorage.getItem("recipes"));

  for (recipe of recipes) {
    createRecipeHTML(recipe);
  }
}

function createRecipeHTML(recipe) {
  const recipeHTML = document.createElement("div");
  recipeHTML.id = recipe.id;

  const titleHTML = document.createElement("h2");
  titleHTML.textContent = recipe.name;

  const peopleHTml = document.createElement("p");
  peopleHTml.innerHTML = `👥 Nombre de personnes : <strong>${recipe.people}</strong>`;

  const timeHTml = document.createElement("p");
  timeHTml.innerHTML = `⏱ Temps de préparation : <strong>${recipe.time}</strong> min.`;

  const ingredientsHTml = document.createElement("p");
  ingredientsHTml.textContent = recipe.ingredients;

  const preparationHTml = document.createElement("p");
  preparationHTml.textContent = recipe.preparation;

  const deleteHTML = document.createElement("a");
  deleteHTML.textContent = "Supprimer la recette";
  deleteHTML.addEventListener("click", function (e) {
    e.preventDefault();

    recipes = recipes.filter((r) => {
      return r.id != recipe.id;
    });

    localStorage.setItem("recipes", JSON.stringify(recipes));

    document.getElementById(recipe.id).remove();
  });

  recipeHTML.append(
    titleHTML,
    peopleHTml,
    timeHTml,
    ingredientsHTml,
    preparationHTml,
    deleteHTML
  );

  recipesHTML.append(recipeHTML);
}

const form = document.querySelector("#recipe");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const id = Date.now();
  const name = document.querySelector("#name").value;
  const ingredients = document.querySelector("#ingredients").value;
  const preparation = document.querySelector("#preparation").value;
  const people = document.querySelector("#people").value;
  const time = document.querySelector("#time").value;

  if (!name || !ingredients || !preparation || !people || !time) {
    return;
  }

  const recipe = {
    id: id,
    name: name,
    ingredients: ingredients,
    preparation: preparation,
    time: time,
    people: people,
  };

  recipes.unshift(recipe);

  localStorage.setItem("recipes", JSON.stringify(recipes));

  createRecipeHTML(recipe);

  // Reset des champs du formulaire
  document.querySelector("#name").value = "";
  document.querySelector("#preparation").value = "";
  document.querySelector("#ingredients").value = "";
  document.querySelector("#people").value = "";
  document.querySelector("#time").value = "";
});
