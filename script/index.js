let getRecipe = [];
//recupère les datas
const fetchRecipe = async () => {
    await fetch('/script/recipes.json')
    .then((res) => res.json())
    .then((promise) => {
        getRecipe = promise
        console.log(getRecipe);
    }
    )
};


//recuparation des datas et affichage des tableaux infos
async function displayGalleryRecipe() {
    await fetchRecipe();
    let dom = document.getElementById('container_recipe');
    dom.innerHTML = `
    <div class="recipe">
        <img src="/assets/pexels-daria-shevtsova-1070880.jpg" alt="">
        <div class="info_recipe">
            <p class="recipe_name"></p>
            <div class="container_time">
            <i class="fa-regular fa-clock clock"></i> <span class="time"> min </span>
            </div>
        </div>
        <div class="liste_ingredient">
            <div class="container_listing">                   
                <ul >
                    <li class="listing"><span class="ingreds">Lait de coco:</span> 400ml</li>
                    <li class="listing"><span class="ingreds">Jus de citron:</span>2</li>
                    <li class="listing"><span class="ingreds">Creme de coco:</span>4 cuillères</li>
                    <li class="listing"><span class="ingreds">Sucre:</span>20g</li>
                    <li class="listing"><span class="ingreds">Glacon:</span>2</li>
                </ul>
            </div>
            <div class="container_consigne">     
                <p class="consigne"></p>
            </div>
        </div>
    </div>`;

}

 displayGalleryRecipe();
 