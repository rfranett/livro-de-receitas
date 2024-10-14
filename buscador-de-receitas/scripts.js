// Seleciona os elementos do formulário, da lista de receitas e dos detalhes das receitas
const form = document.querySelector('.search-form');
const recipeList = document.querySelector('.recipe-list');
const recipeDetails = document.querySelector('.recipe-details');

// Adiciona um evento ao formulário para lidar com o envio do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página
    const inputValue = event.target[0].value.trim(); // Pega o valor do campo de busca e remove espaços em branco

    if (inputValue === '') { // Verifica se o campo está vazio
        recipeList.innerHTML = `<p>Por favor, insira um ingrediente válido.</p>`; // Exibe uma mensagem de erro
        return; // Para a execução se o campo estiver vazio
    }

    searchRecipes(inputValue); // Chama a função que vai buscar as receitas com o valor digitado
});

// Função assíncrona que busca receitas com base no ingrediente inserido
async function searchRecipes(ingredient) {
    recipeList.innerHTML = `<p>Carregando Receitas ...</p>`; // Exibe uma mensagem de carregamento enquanto busca as receitas

    try {
        // Faz a requisição à API TheMealDB para buscar receitas que contenham o ingrediente
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json(); // Converte a resposta da API para um objeto JSON

        // Se encontrar receitas, exibe elas na tela
        showRecipes(data.meals);
    } catch (error) {
        // Se der algum erro, exibe uma mensagem informando que nenhuma receita foi encontrada
        recipeList.innerHTML = `<p>Nenhuma receita encontrada</p>`;
    }
}

// Função que exibe as receitas encontradas
function showRecipes(recipes) {
    // Mapeia as receitas encontradas e cria o HTML para exibi-las
    recipeList.innerHTML = recipes.map(item => `
        <div class="recipe-card" onclick="getRecipesDetails(${item.idMeal})">
            <img src="${item.strMealThumb}" alt="receita-foto">
            <h3>${item.strMeal}</h3>
        </div>
        `).join(''); // Usa .join('') para concatenar todos os itens em uma única string HTML
}

// Função assíncrona que busca os detalhes de uma receita com base no ID da receita
async function getRecipesDetails(id) {
    // Faz a requisição à API TheMealDB para buscar os detalhes da receita
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json(); // Converte a resposta para JSON
    const recipe = data.meals[0]; // Pega a primeira (e única) receita da resposta

    console.log(recipe); // Exibe a receita completa no console (para depuração)

    let ingredients = ''; // Variável que vai armazenar a lista de ingredientes

    // Loop que percorre até 20 possíveis ingredientes da receita
    for (let i = 1; i <= 20; i++) {
        // Verifica se o ingrediente existe e se está preenchido
        if (recipe[`strIngredient${i}`]) {
            ingredients += `<li>${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}</li>`; // Adiciona o ingrediente e a medida à lista
        } else {
            break; // Se não houver mais ingredientes, interrompe o loop
        }
    }

    // Exibe os detalhes da receita na div de detalhes
    recipeDetails.innerHTML = `
        <h2>${recipe.strMeal}</h2>
        <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" class="recipe-img">
        <h3>Categoria: ${recipe.strCategory}</h3>
        <h3>Origem: ${recipe.strArea}</h3>
        <h3>Ingredientes:</h3>
        <ul>${ingredients}</ul>
        <h3>Instruções:</h3>
        <p>${recipe.strInstructions}</p>
        <p>Tags: ${recipe.strTags}</p>
        <p>Vídeo: <a href="${recipe.strYoutube}" target="_blank">Assista no Youtube</a></p>
    `;
}
