
/*
    function addListItem(pokemon)
    {
            let pokeItem = document.createElement('li');
            let pokeButton = document.createElement('button');
            pokeButton.innerText = pokemon.name;
            pokeButton.classList.add('pokeButton');
            pokeItem.appendChild(pokeButton);
            htmlPokeList.appendChild(pokeItem);
            pokeButton.addEventListener('click',function(event)
            {
                showDetails(pokemon);
                
            })
    }

    function showDetails(pokemon)
    {
        console.log(pokemon);
    }
    let pokemonList = pokemonRepository.getAll();
    let htmlPokeList = document.querySelector('ul');

    pokemonList.forEach(function(pokemon)
    {
        addListItem(pokemon);
      
    })
*/
//---------------------------------------------------------------------------------------------------------------------

let pokemonRepository = (function()//Pokemon Repository...
{
        let pokemonList = [];
        let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


        function addPokemon(pokemon)
        {
            if(pokemon instanceof Object)
            {
            pokemonList.push(pokemon);
            }
            else {
                alert('Pokemon only!');
            }
        }

        function getAllPokemon()
        {
            return pokemonList;
        }

        function addListItem(pokemon)
        {
                let pokeItem = document.createElement('li');
                let pokeButton = document.createElement('button');
                pokeButton.innerText = pokemon.name;
                pokeButton.classList.add('pokeButton');
                pokeItem.appendChild(pokeButton);
                htmlPokeList.appendChild(pokeItem);
                pokeButton.addEventListener('click',function(event)
                {
                    showDetails(pokemon);
                 
                })
        }
    
        function showDetails(pokemon)
        {
            console.log(pokemon);
        }

        // pokemonList = pokemonRepository.getAll();
        let htmlPokeList = document.querySelector('ul');
    

        function loadList()
        {
            
            return fetch(apiUrl).then(function (response) {
                return response.json();
            }).then(function (json) {
                json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                });
            }).catch(function (e) {
                console.error(e);
            })
            
        }

        function loadDetails()
        {

        }

     return{
        add:addPokemon,
        getAll:getAllPokemon,
        addListItem:addListItem,
        loadList:loadList
        
    }
})();



pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
    pokemonList.addListItem(pokemon);
    });
  });


//  listPokeMonWithIIFE();
console.log(pokemonList);




