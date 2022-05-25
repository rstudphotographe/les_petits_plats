//import { recipesArray } from "/Les_petits_plats_P7/script/recipes.js";


//recuparation et affichage des tableaux infos
 function displayGalleryRecipe(recipe)  {
     let dom = document.getElementById('container_recipe')
     console.log(recipe)
     dom.innerHTML = `
<div class="recipe">
            <img src="/Les_petits_plats_P7/assets/pexels-daria-shevtsova-1070880.jpg" alt="">
            <div class="info_recipe">
                <p class="recipe_name">Limonade de Coco</p>
                <div class="container_time">
                    <i class="fa-regular fa-clock clock"></i> <span class="time">10 min </span>
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
                    <p class="consigne">Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée</p>
                </div>
            </div>
        </div>`
    
 };

displayGalleryRecipe();