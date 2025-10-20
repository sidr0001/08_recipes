console.log("Forside loaded...");

const kategory_container = document.querySelector(".kategory_scroll");

getData("https://dummyjson.com/recipes/");

function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //få opskrifter
      let recipes = data.recipes;
      let cuisine = [];
      let filteredRecipes = [];
      //Kun unikke cuisine
      recipes.forEach((recipe) => {
        if (cuisine.includes(recipe.cuisine)) {
        } else {
          cuisine.push(recipe.cuisine);
          filteredRecipes.push(recipe);
        }
      });

      showCategories(filteredRecipes);
    });
}

function showCategories(categories) {
  console.log("showCategories", categories);

  categories.forEach((category) => {
    console.log("loopet", category);

    kategory_container.innerHTML += `
    <div>
      <a href="recipes.html?cuisine=${category.cuisine}">
        <img src="${category.image}" alt="${category.cuisine}" />
        <h2>${category.cuisine}</h2>
      </a>
    </div>`;
  });
}
