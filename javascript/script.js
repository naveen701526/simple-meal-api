const mealApi = document.getElementById('meal-api');
const button = document.getElementById('btn');

button.addEventListener('click', displayRecipe);

async function displayRecipe() {
    const res = await fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php'
    );

    const data = await res.json();

    const code = data.meals[0].strYoutube.substring(32);
    const recipe = data.meals[0].strInstructions;

    mealApi.innerHTML = `
        <h2>${data.meals[0].strMeal}</h2>
        <p>${recipe.replaceAll('\n', '<br/><br/>')}</p>
        <div class="iframe-container">
        <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/${code}'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen></iframe>;
        </iframe>
        </div>
    `;
}
