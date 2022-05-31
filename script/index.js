function galleryBuilder(recipes) {
  recipes.map((recipe) => displayGalleryRecipe(recipe));
}
// fonction qui crée une carte "recette" en parcourant la recette et les ingrédients en les simplifiant

function displayGalleryRecipe(recipe) {
  document.getElementById("container_recipe").insertAdjacentHTML("afterbegin", `
        <div class="recipe" ${recipe.id}>
            <img src="/assets/pexels-daria-shevtsova-1070880.jpg" alt="">
            <div class="info_recipe">
                <p class="recipe_name">${recipe.name}</p>
                <div class="container_time">
                    <i class="fa-regular fa-clock clock"></i> <span class="time"> ${recipe.time}min </span>
                </div>
            </div>
            <div class="liste_ingredient">
                <div class="container_listing">                   
                    <ul id="ingredients_list_${recipe.ingredients}">
                    </ul>
                </div>
                <div class="container_consigne">     
                    <p class="consigne">${recipe.description}</p>
                </div>
            </div>
        </div>`);
}

// FONCTION PRINCIPALE INIT QUI LANCE LES TACHES A EFFECTUER pour fabriquer la page
async function init() {
  galleryBuilder(recipes);
}

// lancement !!!!
init();

