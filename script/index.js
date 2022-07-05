// fonction qui crée une carte "recette" en parcourant la recette et les ingrédients en les simplifiant

function displayGalleryRecipe(recipe) {
  //console.log(recipe.ingredients);
  let contentHtml = document.getElementById("container_recipe").insertAdjacentHTML(
      "afterbegin",
      `   <div class="card_recipe">
            <img class="img_recipe" src="/assets/pexels-daria-shevtsova-1070880.jpg" alt="">
            <div class="info_recipe">
                <p class="recipe_name">${recipe.name}</p>
                <div class="container_time">
                    <i class="fa-regular fa-clock clock"></i> <span class="time"> ${recipe.time}min </span>
                </div>
            </div>
            <div class="liste_ingredient">
                <div class="container_listing">                   
                    <ul id="ingredients_list"></ul>
                </div>
                <div class="container_consigne">     
                    <p class="consigne">${recipe.description}</p>
                </div>
            </div>
        </div>`
);
                    
  const listingIngredient = document.getElementById("ingredients_list");

  //fonction pour afficher les ingredients
  
  function createListIngredient(ingredient) {
      if (ingredient.quantity) {
      if (ingredient.unit) {
          switch (ingredient.unit) {
            case "grammes":
                listingIngredient.insertAdjacentHTML(
                    "beforeend",
                    `<li>${ingredient.ingredient} : ${ingredient.quantity} g</li>`
              );
              break;
              case "cuillères à soupe":
                  listingIngredient.insertAdjacentHTML(
                      "beforeend",
                      `<li>${ingredient.ingredient} : ${ingredient.quantity} cuillères</li>`
              );
              break;
              case "cuillère à soupe":
                  listingIngredient.insertAdjacentHTML(
              "beforeend",
              `<li>${ingredient.ingredient} : ${ingredient.quantity} cuillère</li>`
            );
            break;
            case "cuillère à café":
                listingIngredient.insertAdjacentHTML(
              "beforeend",
              `<li>${ingredient.ingredient} : ${ingredient.quantity} cuillère</li>`
              );
              break;
          case "cuillères à café":
            listingIngredient.insertAdjacentHTML(
              "beforeend",
              `<li>${ingredient.ingredient} : ${ingredient.quantity} cuillères</li>`
            );
            break;
          default:
              listingIngredient.insertAdjacentHTML(
                  "beforeend",
                  `<li>${ingredient.ingredient} : ${ingredient.quantity} ${ingredient.unit}</li>`
                  );
                }
            } else {
                listingIngredient.insertAdjacentHTML(
            "beforeend",
            `<li>${ingredient.ingredient} : ${ingredient.quantity}</li>`
            );
        }
    } else {
        listingIngredient.insertAdjacentHTML(
            "beforeend",
            `<li>${ingredient.ingredient}</li>`
            );
        }
    };
    
    
    recipe.ingredients.map((ingredient) => createListIngredient(ingredient));
}


// FONCTION PRINCIPALE INIT QUI LANCE LES TACHES A EFFECTUER pour fabriquer la page
async function init() {
    galleryBuilder(recipes);
}

// lancement !!!!
init();

function galleryBuilder(recipes) {
    recipes.map((recipe) => displayGalleryRecipe(recipe));
}
