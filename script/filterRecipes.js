//activer les boutons de recherche
let Btn_ingredients = document.querySelector(".onglet");
let ulAppareils = document.querySelector(".btn_appareil_li");
let ulUstensils = document.querySelector(".btn_ustensil_li");
let ulIngredient = document.querySelector(".btn_ingredient_li");
let btnSearch = document.querySelectorAll(".search");
let containerRecipe = document.querySelector(".container_recipe");
let liIngredients;
let liAppareils;
let liUstensils;

// ajout des ingredients dans l'onglet ingredients pour la recherche
let ingredientsArray = [];
function ingredientsListArray() {
  ingredientsArray = recipes.map((recipe) => recipe.ingredients).flat();
  ingredientsArray = ingredientsArray.map(
    (ingredient) => ingredient.ingredient
  );
}
ingredientsListArray();
//tableau sans doublon
let newIngredientArray = [...new Set(ingredientsArray)];

/************************************affiche les ingredient dans l'input */
function displayIngredient(ingredient) {
  ulIngredient.insertAdjacentHTML(
    "beforeend",
    `<li class="ingredient_tag">${ingredient}</li>`
  );
}

// ////////////////////////////////////de même pour le tableau des APPAREILS////////////////////////////////////////
let appareilsArray = [];
function appareilsListArray() {
  appareilsArray = recipes.map((recipes) => recipes.appliance).flat();
}
appareilsListArray();
let newAppareilsArray = [...new Set(appareilsArray)]; //evite le dedoublement

function displayAppareil(appliance) {
  ulAppareils.insertAdjacentHTML(
    "beforeend",
    `<li class="appareil_tag">${appliance}</li>`
  );
}
//-------------------------------De meme pour les USTENSILS//----------------------------//
let ustensilsArray = [];
function ustensilsListArray() {
  ustensilsArray = recipes.map((recipe) => recipe.ustensils).flat();
}
ustensilsListArray();
let newUstensilsArray = [...new Set(ustensilsArray)]; //evite le dedoublement

function displayUstensil(ustensils) {
  ulUstensils.insertAdjacentHTML(
    "beforeend",
    `<li class="ustensil_tag">${ustensils}</li>`
  );
}

//-------------------Algo de recherche bar de recherche-----------------////////////
const searchBar = document.querySelector(".search_bar");

searchBar.addEventListener("keyup", (e) => {
  const searchLetter = e.target.value;
  const card = document.querySelectorAll(".card_recipe");
  filterElements(searchLetter, card);
});

function filterElements(lettres, recipesCard) {
  if (lettres.length > 2) {
    for (let i = 0; i < recipesCard.length; i++) {
      if (recipesCard[i].textContent.toLowerCase().includes(lettres)) {
        recipesCard[i].style.display = "block";
      } else {
        recipesCard[i].style.display = "none";
        //window.location.reload()
        //location.reload()
      }
    }
  }
}

//fonction qui ferme le tag
function tagNone(el) {
  el.style.display = "none";
}

/****************************************************creer le tag**************************************************************/
let arrayResult = [];
newIngredientArray.forEach((ingredient) => displayIngredient(ingredient));
liIngredients = document.querySelectorAll(".ingredient_tag");
liIngredients.forEach((liIngredient) =>
  liIngredient.addEventListener("click", (e) => createIngredientsTag(e))
);
function createIngredientsTag(e) {
  let displayTags = document.getElementById("tags");
  displayTags.insertAdjacentHTML(
    "beforeend",
    `<span onclick="tagNone(this)" class="btn_ingredient btn_result">${e.target.textContent} <img class="close" src="/assets/Vector.png" alt=""/></span>`
  );
  //afficher les cartes selon le tag
  // const resultTag = recipes.filter(recipes.includes(e.target.textContent))
  arrayResult.push(e.target.textContent);

  const tagIngredient = recipes
    .map((ele) => ele.ingredients)
    .map((x) => x.map((y) => y.ingredient));
  console.log(tagIngredient);
  // console.log(tagIngredient);
  //   console.log(tagIngredient.map(x => x.ingredients).map(e => e.ingredient));
  //  let newTag = tagIngredient.map(ele => ele.ingredient)
  //  console.log(newTag);
}

/*****************************************************************************Ecoute chaque appareil**************************** */

newAppareilsArray.forEach((appareil) => displayAppareil(appareil));
liAppareils = document.querySelectorAll(".appareil_tag");
liAppareils.forEach((liAppareil) =>
  liAppareil.addEventListener("click", (ele) => createAppareilsTag(ele))
);
function createAppareilsTag(ele) {
  let displayTags = document.getElementById("tags");

  displayTags.insertAdjacentHTML(
    "beforeend",
    `<span onclick="tagNone(this)" class="btn_appareil btn_result">${ele.target.textContent} <img class="close" src="/assets/Vector.png" alt=""/></span>`
  );
  const tagAppliance = recipes
    .map((ele) => ele.appliance)
    console.log(tagAppliance);
}

/*****************************************************************************Ecoute chaque ustensil**************************** */
newUstensilsArray.forEach((ustensil) => displayUstensil(ustensil));
liUstensils = document.querySelectorAll(".ustensil_tag");
liUstensils.forEach((liUstensil) =>
  liUstensil.addEventListener("click", (ele) => createUstensilsTag(ele))
);
function createUstensilsTag(ele) {
  let displayTags = document.getElementById("tags");

  displayTags.insertAdjacentHTML(
    "beforeend",
    `<span onclick="tagNone(this)" class="btn_ustensil btn_result">${ele.target.textContent} <img class="close" src="/assets/Vector.png" alt=""/></span>`
  );
  const tagUstensil = recipes
    .map((ele) => ele.ustensils)
    //.map((x) => x.map((y) => y.ingredient));
    console.log(tagUstensil);
}
