
//---------------------------------------------------------------------------------------------------------------------

let pokemonRepository = (function()//Pokemon Repository...
{
        let pokemonList = [];
        let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
        let closeButton;
        let pTypeModalColor;
        let modal = document.getElementById('modal');

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
                pokeButton.classList.add('btn_btn-primary');
                pokeButton.setAttribute('type','button');
                pokeButton.setAttribute('data-toggle','modal');
                pokeButton.setAttribute('data-target','#modalContainer');
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
           

           // let modalContainer = document.getElementById('modalContainer');
            //modalContainer.classList.add('isVisible');
            //modalContainer.classList.remove('isHidden');
           

           let pokeName = document.getElementById('pokeName');
           let pokeHeight = document.getElementById('pokeHeight');
            let pokeImg = document.getElementById('pokeImg');
            let pType = document.getElementById('ptype');

           pokeName.innerText = pokemon.name;
           pokeHeight.innerText = 'Height: '+ pokemon.height.toString();
           pType.innerText = 'Type: ' + pokemon.types[0].type.name;
        
            pokeImg.imageUrl = pokemon.imageUrl.sprites;
            let image = document.getElementById('pImage');
            image.setAttribute('src',pokemon.imageUrl);
           
                
            console.log(pokemon.types[0].type.name);
            pTypeModalColor = pokemon.types[0].type.name;
                 modal = document.getElementById('modalbg');
               if(pTypeModalColor==='water'||pTypeModalColor==='ice')
               {
                    modal.style.backgroundColor = 'aqua';
               }
               if(pTypeModalColor==='bug'||pTypeModalColor==='grass')
               {
                
                modal.style.backgroundColor = 'rgb(10, 197, 82) ';
               }
               if(pTypeModalColor==='fire')
               {
                modal.style.backgroundColor = 'darkgoldenrod';
               }
               if(pTypeModalColor==='electric')
               {
                modal.style.backgroundColor = 'darkyellow';
               }
               if(pTypeModalColor==='poison')
               {
                modal.style.backgroundColor = 'purple';
               }
               if(pTypeModalColor==='ground')
               {
                modal.style.backgroundColor = 'lightbrown';
               }
               if(pTypeModalColor==='fighting')
               {
                modal.style.backgroundColor = 'lightbrown';
               }
               if(pTypeModalColor==='normal')
               {
                modal.style.backgroundColor = 'lightbrown';
               }
               if(pTypeModalColor==='ghost'||pTypeModalColor==='rock')
               {
                modal.style.backgroundColor = 'grey';
               }

               console.log(pTypeModalColor);

               /*
             window.addEventListener('keydown',(e)=>
            {
                if(e.key==='Escape')
                {
                   // closeModal();
                    
                }
            });
            

            modalContainer.addEventListener('click', (e) => {
               
                let target = e.target;
                if (target ===modalContainer) {
                 // closeModal();
                }
              });*/
            });
        }

       /* function closeModal()
        {
            
           // modalContainer.classList.remove('isVisible');
           
        }*/
       

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
                    detailsUrl: item.url,
                    types:item.types
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







