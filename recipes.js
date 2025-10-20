console.log("siden loaded...");
const recipeslist = document.querySelector("#recipes_list");

const cuisine = new URLSearchParams(window.location.search).get("cuisine");

// filter
let allData;

// filter slut
getData(`https://dummyjson.com/recipes`);

function getData(url) {
  fetch(url).then((res) =>
    res.json().then((data) => {
      recipes = data.recipes;
      let filteredRecipes = [];

      //Filteret
      recipes.forEach((recipe) => {
        if (recipe.cuisine === cuisine) {
          filteredRecipes.push(recipe);
        }
      });

      allData = filteredRecipes;
      showRecipes(allData);
    })
  );
}

function showRecipes(recipes) {
  recipeslist.innerHTML = "";
  recipes.forEach((recipes) => {
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

document.querySelectorAll(".buttons button").forEach((btn) => {
  btn.addEventListener("click", filterKlik);
});

function filterKlik(evt) {
  showFiltered(evt.currentTarget.dataset.mealtype);
}

function showFiltered(filter) {
  console.log("filter", filter);
  if (filter === "All") {
    showRecipes(allData);
  } else {
    const filteredRecipesArr = allData.filter((recipe) => recipe.mealType.includes(filter));
    // const filteredRecipesArr = allData.filter((recipes) => recipes.mealType === filter);
    showRecipes(filteredRecipesArr);
  }
  console.log("showFiltered", filter);
  console.log(allData.filter((recipes) => recipes.mealType[0] === filter));
}
