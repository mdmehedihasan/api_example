const searchFood = () => {
    const searchInput = document.getElementById('input-search');
    const searchValue = searchInput.value;

    searchInput.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
    //fetch url
    fetch(url)
        .then(response => response.json())
        .then(data => displaySearch(data.meals));
    //console.log(data);
}
const displaySearch = (meals) => {
    // console.log(meals);
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
                <img  src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">
                    ${meal.strInstructions.slice(0, 200)}
                    </p>
                </div>
        `;
        searchResult.appendChild(div);
    });
}