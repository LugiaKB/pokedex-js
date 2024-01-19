const pokemonDetailsContainer = document.getElementById('pokemonDetails');

// Obtenha o índice do Pokémon da URL
const urlParams = new URLSearchParams(window.location.search);
const pokemonIndex = urlParams.get('index');

// Carregue detalhes do Pokémon e exiba na página
pokeApi.getPokemonDetail({ url: `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/` })
    .then((pokemon) => {
        const detailsHtml = `
            <div class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </div>
        `;

        pokemonDetailsContainer.innerHTML = detailsHtml;
    });
