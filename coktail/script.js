//jquery
function getIngredients(drink) {
  let ingredients = "";
  //Creating a string of ingredients
  for (let i = 1; i < 16; i++) {
    let key = "strIngredient" + i;
    if (drink[key] != null) {
      ingredients += drink[key] + ", ";
    } else if (drink[key] == null) {
      //Delete the last comma at the end of ingredients + dot
      ingredients = ingredients.slice(0, -2);
      ingredients += ".";
      break;
    }
  }
  return ingredients;
}

$(document).ready(() => {
  list = "";
  $.get(
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
    (data) => {
      data.drinks.forEach((drink) => {
        list += `<option>${drink.strIngredient1}</option>`;
      });
      $("#select").append(list);
    }
  );

  $("#ingredientBtn").click((e) => {
    e.preventDefault();
    let ingredient = $("#select").val();
    let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    $.get(url, (data) => {
      let drinks = "";
      data.drinks.forEach((drink) => {
        drinks += ` <div class="card">
            <img height="100" src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
            <div class="cardContent">
              <div>             
              <h2>${drink.strDrink}</h2>
              </div>                   
            </div>
          </div>`;
      });
      $("#cocktailList").html(drinks);
    });
  });

  $("#searchBtn").click((e) => {
    e.preventDefault();
    value = $("#cocktailInput").val();
    if (value == "") {
      alert("Entrez un nom de cocktail");
    } else {
      $.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + value,
        (data) => {
          if (data.drinks == null) {
            alert("Aucun cocktail trouvé");
          } else {
            $("#cocktailList").empty();

            data.drinks.forEach((drink) => {
              let ingredients = getIngredients(drink);

              $("#cocktailList").append(
                ` <div class="card">
                      <img height="100" src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                      <div class="cardContent">
                        <div>             
                        <h2>${drink.strDrink}</h2>
                        <p class="list">${ingredients}</p> 
                        </div>                   
                      </div>
                    </div>`
              );
            });
          }
        }
      );
    }
  });
});
