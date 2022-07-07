//activer les boutons de recherche
let Btn_ingredients = document.querySelector(".onglet");
let liAppareils = document.querySelector(".btn_appareil_li");
let liUstensils = document.querySelector(".btn_ustensil_li");
let liIngredient = document.querySelector(".btn_ingredient_li");
let btnSearch = document.querySelectorAll(".search");

// ajout des ingredients dans l'onglet ingredients pour la recherche
function ingredientsListArray() {
  ingredientsArray = [];
  ingredientsArray = recipes.map((recipe) => recipe.ingredients).flat();
  ingredientsArray = ingredientsArray.map(
    (ingredient) => ingredient.ingredient
  );
}
ingredientsListArray();

function displayIngredient(ingredients) {
  liIngredient.insertAdjacentHTML(
    "beforeend",
    `<li class="ingredient_tag">${ingredients}</li>`
  );
}
ingredientsArray.forEach((ingredient) => displayIngredient(ingredient));
displayIngredient();

// ////////////////////////////////////de même pour le tableau des APPAREILS////////////////////////////////////////
function appareilsListArray() {
  appareilsArray = [];
  appareilsArray = recipes.map((recipes) => recipes.appliance).flat();
}
appareilsListArray();

function displayAppareil(appliance) {
  liAppareils.insertAdjacentHTML(
    "beforeend",
    `<li class="appareil_tag">${appliance}</li>`
  );
}
appareilsArray.forEach((appliance) => displayAppareil(appliance));
displayAppareil();

//-------------------------------De meme pour les USTENSILS//----------------------------//
function ustensilsListArray() {
  ustensilsArray = [];
  ustensilsArray = recipes.map((recipe) => recipe.ustensils).flat();
}
ustensilsListArray();

function displayUstensil(ustensils) {
  liUstensils.insertAdjacentHTML(
    "beforeend",
    `<li class="ustensil_tag">${ustensils}</li>`
  );
}
ustensilsArray.forEach((ustensil) => displayUstensil(ustensil));
displayUstensil();

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
        //location.reload()
      }
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// //crée les tags
//  function displayTags(){
//    let displayTags = document.getElementById('tags')
//    displayTags.insertAdjacentHTML('beforeend',
//    `<span class="btn_ingredient btn_result"> <img class="close" src="/assets/Vector.png" alt=""/></span>
//    <span  class="btn_appareil btn_result"> <img class="close" src="/assets/Vector.png" alt=""/></span>
//    <span  class="btn_ustensil btn_result"> <img class="close" src="/assets/Vector.png" alt=""/></span>`
//    )
//    displayTags.style.display = "none"
//  };
//displayTags()


//fonction qui ferme le tag
function tagNone(el) {
  el.style.display ='none'
};

//fonction au clic qui va afficher l'élément choisi dans le tag
liIngredient.addEventListener("click", () => {
  const liIngred = document.querySelectorAll(".ingredient_tag");
  liIngred.forEach((ingredient) => {
    let displayTags = document.getElementById("tags");

    displayTags.insertAdjacentHTML(
      "beforeend",
    `<span onclick="tagNone(this)" class="btn_ingredient btn_result">${ingredient.textContent} <img class="close" src="/assets/Vector.png" alt=""/></span>`

    );
    displayTags.target.style.display = "block";
  });
 
});

liAppareils.addEventListener("click", () => {
  const liAppar = document.querySelectorAll(".appareil_tag");
  liAppar.forEach((appareil) => {
    let displayTags = document.getElementById("tags");

    displayTags.insertAdjacentHTML(
      "beforeend",
      `<span onclick="tagNone(this)" class="btn_appareil btn_result">${appareil.textContent} <img class="close" src="/assets/Vector.png" alt=""/></span>`
    );
    displayTags.target.style.display = "block";
  });
});

//Ecoute le clic sur chaque ustensil
liUstensils.addEventListener("click", () => {
  const liUstens = document.querySelectorAll(".ustensil_tag");
  liUstens.forEach((ustensil) => {
    let displayTags = document.getElementById("tags");

    displayTags.insertAdjacentHTML(
      "beforeend",
      `<span onclick="tagNone(this)" class="btn_ustensil btn_result">${ustensil.textContent} <img class="close" src="/assets/Vector.png" alt=""/></span>`
    );
    displayTags.target.style.display = "block";
  });
});
