
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
    
        function showDetails(pokemon) {
            loadDetails(pokemon).then(function () {
              console.log(pokemon);
            });
          }

        
        let htmlPokeList = document.querySelector('ul');
    

        function loadList()
        {
            
            return fetch(apiURL).then(function (response) {
                return response.json();
            }).then(function (json) {
                json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                pokemonRepository.add(pokemon);
                });
            }).catch(function (e) {
                console.error(e);
            })
            
        }

       

  function loadDetails(item) {//item is a pokemon...
    let url = item.detailsUrl;//url taken from the pokemons detailsURL, given from loadlist above...
    return fetch(url).then(function (response) {//fetch the data from the URL, as a response and turn it into json data...
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  

     return{
        add:addPokemon,
        getAll:getAllPokemon,
        addListItem:addListItem,
        loadList:loadList,
        loadDetails:loadDetails
        
    }
})();



pokemonRepository.loadList().then(function() {
    
    pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
    });
  });







