console.log(recipesArray);
//recuparation et affichage des tableaux infos
class RecipesCard {
    constructor(recipe) {
        this.id = recipe.id;
        this.name = recipe.name;
        this.servings = recipe.servings;
        this.ingredients = recipe.ingredients;
        this.time = recipe.time;
        this.description = recipe.description;
    }
    displayGalleryRecipe()  {
        let dom = document.getElementById('container_recipe')
        dom.innerHTML = `
        <div class="recipe">
        <img src="/assets/pexels-daria-shevtsova-1070880.jpg" alt="">
        <div class="info_recipe">
        <p class="recipe_name">${this.name}</p>
                <div class="container_time">
                <i class="fa-regular fa-clock clock"></i> <span class="time">${this.time} min </span>
                </div>
        </div>
        <div class="liste_ingredient">
        <div class="container_listing">                   
        <ul>
        <li class="listing"><span class="ingreds">Lait de coco:</span> 400ml</li>
        <li class="listing"><span class="ingreds">Jus de citron:</span>2</li>
                    <li class="listing"><span class="ingreds">Creme de coco:</span>4 cuillères</li>
                    <li class="listing"><span class="ingreds">Sucre:</span>20g</li>
                    <li class="listing"><span class="ingreds">Glacon:</span>2</li>
                    </ul>
            </div>
            <div class="container_consigne">     
            <p class="consigne">${this.description}</p>
            </div>
            </div>
            </div>`
            
        }
};