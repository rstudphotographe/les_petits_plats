console.log('lop');
//activer les boutons de recherche
    let Btn_ingredients = document.querySelector (".onglet");
    let liAppareils = document.querySelector (".btn_appareil_li");
    let liUstensils = document.querySelector (".btn_ustensil_li");
    let liIngredient = document.querySelector(".btn_ingredient_li")
    let btnSearch = document.querySelectorAll('.search')


    // ajout des ingredients dans l'onglet ingredients pour la recherche
function ingredientsListArray() {
    ingredientsArray = [];
    ingredientsArray = recipes.map((recipe) => recipe.ingredients).flat();
    ingredientsArray = ingredientsArray.map((ingredient) => ingredient.ingredient);
  
  }
ingredientsListArray();

function displayIngredient(ingredients){
  liIngredient.insertAdjacentHTML("beforeend",`<li>${ingredients}</li>`);
}
  ingredientsArray.forEach((ingredient) => displayIngredient(ingredient));
  displayIngredient()


// de même pour le tableau des APPAREILS-------------------------------------------------////////////////////////////////////////
function appareilsListArray() {
  appareilsArray = [];
  appareilsArray = recipes.map((recipes) => recipes.appliance).flat();
  //appareilsArray = appareilsArray.map((recipes) => recipes.appliance);
}
appareilsListArray();

function displayAppareil (appliance) {
  liAppareils.insertAdjacentHTML("beforeend", `<li>${appliance}</li>`);
}
appareilsArray.forEach((appliance) => displayAppareil(appliance));
displayAppareil()


//De meme pour les USTENSILS//----------------------------//
function ustensilsListArray () {
  ustensilsArray = [];
  ustensilsArray = recipes.map((recipe) => recipe.ustensils).flat();
  //ustensilsArray = ustensilsArray.map((ustensil) => ustensil.ustensils);
  console.log(recipes);
}
ustensilsListArray();

function displayUstensil (ustensils) {
  liUstensils.insertAdjacentHTML("beforeend", `<li>${ustensils}</li>`);
}
ustensilsArray.forEach((ustensil) => displayUstensil(ustensil));
displayUstensil();