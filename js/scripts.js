
//---------------------------------------------------------------------------------------------------------------------

let pokemonRepository = (function()//Pokemon Repository...
{
        let pokemonList = [];
        let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
        let closeButton;

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

        function addListItem(pokemon)//adds and appends the html elements, the main list
        {
                let pokeItem = document.createElement('li');
                let pokeButton = document.createElement('button');
                pokeButton.innerText = pokemon.name;
                pokeButton.classList.add('pokeButton');
                pokeItem.appendChild(pokeButton);
                htmlPokeList.appendChild(pokeItem);
                pokeButton.addEventListener('click',function(event)//the button that shows the pokemon details
                {
                    showDetails(pokemon);
                 
                })
        }
    
        function showDetails(pokemon) //the showdetails function, assigned to the pokeButton element
        {
            loadDetails(pokemon).then(function () {
              console.log(pokemon);
           

            let modalContainer = document.getElementById('modalContainer');
            modalContainer.classList.add('isVisible');
            modalContainer.classList.remove('isHidden');
            closeButton = document.getElementById('closeButton');
            closeButton.addEventListener('click',closeModal);

           let pokeName = document.getElementById('pokeName');
           let pokeHeight = document.getElementById('pokeHeight');
            let pokeImg = document.getElementById('pokeImg');

           pokeName.innerText = pokemon.name;
           pokeHeight.innerText = 'Height: '+ pokemon.height.toString();
        //    alert(pokemon.height.toString());
            pokeImg.imageUrl = pokemon.imageUrl.sprites;
            let image = document.getElementById('pImage');
            image.setAttribute('src',pokemon.imageUrl);
            // pokeImg.appendChild(image);
            
            window.addEventListener('keydown',(e)=>
            {
                if(e.key==='Escape')
                {
                    closeModal();
                    
                }
            });
            

            modalContainer.addEventListener('click', (e) => {
               
                let target = e.target;
                if (target ===modalContainer) {
                  closeModal();
                }
              });
            });
           }

        function closeModal()
        {
            // modalContainer.classList.add('isHidden');
            modalContainer.classList.remove('isVisible');
            // pokeImg.removeChild();
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
                    height:item.height,
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







