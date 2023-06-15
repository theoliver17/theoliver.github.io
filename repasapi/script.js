function getIngredients(meal) {
  let ingredients = "";

  for (let i = 1; i < 16; i++) {
    let key = "strIngredient" + i;
    if (meal[key] != null) {
      ingredients += meal[key] + ", ";
    } else if (meal[key] == null) {
      ingredients = ingredients.slice(0, -2);
      ingredients += ".";
      break;
    }
  }
  return ingredients;
}

// we create a function that will return the ingredients of the meal
// we create a variable ingredients that will contain the ingredients of the meal
// we create a loop that will go through the 15 ingredients of the meal
// we create a variable key that will contain the name of the ingredient
// we create a condition that will check if the ingredient is not null
// if it is not null, we add the ingredient to the variable ingredients
// if it is null, we remove the last 2 characters of the variable ingredients
// we add a point at the end of the variable ingredients
// we return the variable ingredients

$(document).ready(() => {
  listingredient = "";
  listcategory = "";
  listarea = "";
  $.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list", (data) => {
    data.meals.forEach((meal) => {
      listingredient += `<option>${meal.strIngredient}</option>`;
    });
    $("#select").append(listingredient);
  });

  $.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list", (data) => {
    data.meals.forEach((meal) => {
      listcategory += `<option>${meal.strCategory}</option>`;
    });
    $("#selectCategory").append(listcategory);
  });

  $.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list", (data) => {
    data.meals.forEach((meal) => {
      listarea += `<option>${meal.strArea}</option>`;
    });
    $("#selectArea").append(listarea);
  });

  $("#searchBtn").click((e) => {
    e.preventDefault();
    $("#mealList").empty();
    value = $("#mealInput").val();
    if (value == "") {
      alert("Please enter a meal");
    } else {
      $.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + value,
        (data) => {
          if (data.meals == null) {
            alert("No meal found");
          } else {
            $("#mealList").empty();

            data.meals.forEach((meal) => {
              let ingredients = getIngredients(meal);

              $("#mealList").append(
                ` <div class="card">
                        <img height="100" src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        <div class="cardContent">
                        <div>
                        <h2> Title : </h2> <p> ${meal.strMeal}</p>
                        <h2> Category : </h2> <p> ${meal.strCategory}</p>
                        <h2> Area : </h2> <p> ${meal.strArea}</p>
                        <h2 class="list"> Ingredients :</h2> <p>   ${meal.strIngredient1} ${meal.strMeasure}, ${meal.strIngredient2} ${meal.strMeasure}, ${meal.strIngredient3} ${meal.strMeasure}, ${meal.strIngredient4}, ${meal.strIngredient5}, ${meal.strIngredient6}, ${meal.strIngredient7}, ${meal.strIngredient8}, ${meal.strIngredient9}, ${meal.strIngredient10}, ${meal.strIngredient11}, ${meal.strIngredient12}, ${meal.strIngredient13}, ${meal.strIngredient14}, ${meal.strIngredient15}...</p>
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

  $("#ingredientBtn").click((e) => {
    e.preventDefault();
    $("#mealList").empty();
    let ingredient = $("#select").val();
    console.log(ingredient);
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    $.get(url, (data) => {
      let meal = "";
      console.log(data.meals);
      data.meals.forEach((meal) => {
        $("#mealList").append(` <div class="card">
              <img height="100" src="${meal.strMealThumb}" alt="${meal.strMeal}">
              <div class="cardContent">
                <div>
                <h2> Title : </h2> <p> ${meal.strMeal}</p>
                <h2> Category : </h2> <p> ${meal.strCategory}</p>
                <h2> Area : </h2> <p> ${meal.strArea}</p>
                <h2 class="list"> Ingredients :</h2> <p>   ${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}, ${meal.strIngredient4}, ${meal.strIngredient5}...</p>
                </div>
                </div>
                </div>`);
      });
    });
  });

  $("#categoryBtn").click((e) => {
    e.preventDefault();
    $("#mealList").empty();
    let Category = $("#selectCategory").val();
    console.log(Category);
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category}`;
    $.get(url, (data) => {
      let meal = "";
      data.meals.forEach((meal) => {
        $("#mealList").append(` <div class="card">
              <img height="100" src="${meal.strMealThumb}" alt="${meal.strMeal}">
              <div class="cardContent">
                <div>
                <h2> Title : </h2> <p> ${meal.strMeal}</p>
                <h2> Category : </h2> <p> ${meal.strCategory}</p>
                <h2> Area : </h2> <p> ${meal.strArea}</p>
                <h2 class="list"> Ingredients :</h2> <p>   ${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}, ${meal.strIngredient4}, ${meal.strIngredient5}...</p>
                </div>
                </div>
                </div>`);
      });
    });
  });

  $("#areabtn").click((e) => {
    e.preventDefault();
    $("#mealList").empty();
    let Area = $("#selectArea").val();

    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`;
    $.get(url, (data) => {
      let meal = "";
      console.log(data.meals);
      data.meals.forEach((meal) => {
        $("#mealList").append(` <div class="card">
              <img height="100" src="${meal.strMealThumb}" alt="${meal.strMeal}">
              <div class="cardContent">
                <div>
                <h2> Title : </h2> <p> ${meal.strMeal}</p>
                <h2> Category : </h2> <p> ${meal.strCategory}</p>
                <h2> Area : </h2> <p> ${meal.strArea}</p>
                <h2 class="list"> Ingredients :</h2> <p>   ${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}, ${meal.strIngredient4}, ${meal.strIngredient5}...</p>
                </div>
                </div>
                </div>`);
      });
    });
  });

  $("#randombtn").click((e) => {
    e.preventDefault();
    $("#mealList").empty();
    $.get("https://www.themealdb.com/api/json/v1/1/random.php", (data) => {
      let meal = data.meals[0];
      console.log(meal);
      let ingredients = getIngredients(meal);

      $("#mealList").append(
        ` <div class="card">
                  <img height="100" src="${meal.strMealThumb}" alt="${meal.strMeal}">
                  <div class="cardContent">
                  <div>
                  <h2> Title : </h2> <p> ${meal.strMeal}</p>
                  <h2> Category : </h2> <p> ${meal.strCategory}</p>
                  <h2> Area : </h2> <p> ${meal.strArea}</p>
                  <h2 class="list"> Ingredients :</h2> <p>   ${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}, ${meal.strIngredient4}, ${meal.strIngredient5}, ${meal.strIngredient6}, ${meal.strIngredient7}, ${meal.strIngredient8}, ${meal.strIngredient9}, ${meal.strIngredient10}, ${meal.strIngredient11}, ${meal.strIngredient12}, ${meal.strIngredient13}, ${meal.strIngredient14}, ${meal.strIngredient15}...</p>
                  </div> 
                  </div>
                  </div>`
      );
    });
  });
});
