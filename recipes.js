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
    const filteredRecipesArr = allData.filter((recipes) => recipes.mealType === filter);
    showRecipes(filteredRecipesArr);
  }
  console.log("showFiltered", filter);
  console.log(allData.filter((recipes) => recipes.mealType === filter));
}
// filter slut
