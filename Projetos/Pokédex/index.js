var quantidade = document.getElementById('quantidade');
quantidade.addEventListener('keyup',()=>{
    pegaPokemons(quantidade.value);
})

pegaPokemons(1);
function pegaPokemons(quantidade) {
    if (!isNaN(quantidade)) {
        url = 'https://pokeapi.co/api/v2/pokemon?limit='+quantidade
    } else {
        url = 'https://pokeapi.co/api/v2/pokemon/'+quantidade
    }
    fetch(url)
    .then(response => response.json())
    .then(allpokemon => {
        var pokemons = [];
        if (!allpokemon['results']) {
            onePokemon = allpokemon['forms']
            allpokemon = {'results': [{'name' : allpokemon['forms'][0]['name'], 'url' : url + '/'}]}
            quantidade = 1
        }
        
        allpokemon.results.map((val)=>{
                        
        fetch(val.url)
        .then(response => response.json())
        .then(pokemonSingle => {
            pokemons.push({nome:val.name,imagem:pokemonSingle.sprites.front_default});
            if(pokemons.length == quantidade){
                               
                var pokemonBoxes = document.querySelector('.pokemon-boxes');
                pokemonBoxes.innerHTML = "";
                pokemons.map(function(val) {
                    pokemonBoxes.innerHTML += `        
                        <div class="pokemon-box">
                            <img src="`+val.imagem+`" />
                            <p>`+val.nome+`</p>
                        </div> `
                    })
                }
            })
        })
    }).catch(function(error) {
        var pokemonBoxes = document.querySelector('.pokemon-boxes')
        pokemonBoxes.innerHTML = `Nenhum Pokémon encontrado`
    })
}
