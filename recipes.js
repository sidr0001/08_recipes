console.log("siden loaded...");
const recipeslist = document.querySelector("#recipes_list");

const cuisine = new URLSearchParams(window.location.search).get("cuisine");

// filter
let allData;
document.querySelectorAll(".buttons button").forEach((btn) => {
  btn.addEventListener("click", filterKlik);
});

function filterKlik(evt) {
  showFiltered(evt.currentTarget.dataset.mealType);
}
function showFiltered(filter) {
  if (filter === "All") {
    showRecipes(allData);
  } else {
    const filteredRecipesArr = allData.filter((recipe) => recipe.mealType.includes(filter));
    // const filteredRecipesArr = allData.filter((recipes) => recipes.mealType === filter);
    showRecipes(filteredRecipesArr);
  }
  console.log("showFiltered", filter);
  console.log(allData.filter((recipes) => recipes.mealType === filter));
}
// filter slut

console.log("cuisine", cuisine);
getData(`https://dummyjson.com/recipes?cuisine=${cuisine}`);

function getData(url) {
  fetch(url).then((res) =>
    res.json().then((data) => {
      allData = data.recipes;
      showRecipes(allData);
    })
  );
}

function showRecipes(recipes) {
  console.log("recipes", recipes);
  recipeslist.innerHTML = "";
  recipes.forEach((recipes) => {
    console.log(recipes.name);

    recipeslist.innerHTML += `
    <a href="specific.html?id=${recipes.id}">
    <section id="recipes_list">
    <article class="blaaboks">
                    <h2>${recipes.name}</h2>
                    <div>
                        <img src="https://cdn.dummyjson.com/recipe-images/${recipes.id}.webp" alt="mad" />
                    </div>
                    <div>
                    <p>Prep time: ${recipes.prepTimeMinutes} min.</p>
                    <p>Cooking time: ${recipes.cookTimeMinutes} min.</p>
                    <p> Difficulty: ${recipes.difficulty}</p>
                    </div>
    </article>
    </section>
    </a> `;
  });
}
