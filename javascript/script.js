const mealApi = document.getElementById('meal-api');
const button = document.getElementById('btn');

button.addEventListener('click', displayRecipe);

function displayRecipe() {
    const res = await fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php'
    );

    const data = await res.json();

    const code = data.meals[0].strYoutube.substring(32);
    const recipe = data.meals[0].strInstructions;
}
