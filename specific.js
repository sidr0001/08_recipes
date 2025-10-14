console.log("siden er loaded...");

const specificContainer = document.querySelector("#specific_container");
const id = new URLSearchParams(window.location.search).get("id");
const recipeUrl = `https://dummyjson.com/recipes/${id}`;

console.log("min url ", recipeUrl);

getData();

function getData() {
  console.log("getData...");
  fetch(recipeUrl).then((res) => res.json().then((specific) => show(specific)));
}

function show(specific) {
  console.log("show data er", specific);

  specificContainer.innerHTML = ` <h1>${specific.name}</h1>
        <div class="img_center">
            <img src="https://cdn.dummyjson.com/recipe-images/${specific.image}.webp" alt="1.webp">
        </div>
        <div class="grid_1-1-1">
            <div class="grid_info info">
                <h3 class="blå_boks_h3">Difficulty: ${specific.difficulty}</h3>
                <h3 class="blå_boks_h3">Servings: ${specific.servings} </h3>
               <h3 class="blå_boks_h3">Preptime: ${specific.prepTimeMinutes} min.</h3>
                <h3 class="blå_boks_h3">Cooktime: ${specific.cookTimeMinutes} min.</h3> 
            </div>
            <div class="Ingridients">
                <h2 class="blå_boks">Ingridients</h2>
                <ul class="blå_boks">
                    <li class="left_margin">${specific.ingredients}</li>
                </ul>
            </div>
            <div class="Instructions">
                <h2 class="blå_boks">Instructions</h2>
                <ol class="blå_boks ">
                    <li class="left_margin"> ${specific.instructions}
                    </li>
                </ol>

                <button class="logo-btn">
                    <img src="img/Heart-kopi.svg" alt="Heart" class="logo">
                    <span>GEM</span> </button>

                <button class="logo-btn">
                    <img src="img/Print-kopi.svg" alt="Print" class="logo">
                    <span>PRINT</span> </button>
            </div>
        </div>`;
}
