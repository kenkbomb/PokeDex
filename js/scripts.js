
//---------------------------------------------------------------------------------------------------------------------

let pokemonRepository = (function()//Pokemon Repository...
{
        let pokemonList = [];
        let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
        let modal = document.getElementById('modal');
        //-----------------------------------------------------------------------------------------
        let htmlPokeList = document.querySelector('ul');
        let sortByName = false;
       
        let results = [];
        let searchInputValue = document.getElementById("search").value;
        let searchInput = document.getElementById("search");
        let clearButton  = document.getElementById("clearButton");
        clearButton.innerText = "Search";
        let sortNameBtn = document.getElementById("sortBtnName");
        let pcount = document.getElementById("pcount");

        sortNameBtn.addEventListener("click",function(event){
        sortByName = !sortByName;
          
        console.log("sortByname is " + sortByName);

          if(sortByName)
            {
              sortNameBtn.innerText = "Sort by #";
            }
            else{
              sortNameBtn.innerText = "Sort by Name";
            }
          htmlPokeList.replaceChildren();
          getAllPokemon();
          
          for(let i=0;i<results.length;i++)
            {
              addListItem(results[i]);
            }
          })

          

        searchInput.onchange = ()=>{
          searchInputValue = document.getElementById("search").value;
          console.log(searchInputValue);
        }

        searchInput.focus();
        
        searchInput.addEventListener("input",function(event){
          searchInputValue = document.getElementById("search").value
          console.log(searchInputValue);
          htmlPokeList.replaceChildren();
          getAllPokemon();
          for(let i=0;i<results.length;i++)
            {
              addListItem(results[i]);
            }
          if(searchInputValue==="")
            {
              clearButton.innerText = "Search";
            }
            else{
              clearButton.innerText = "Clear";
            }
          
        })
        
        clearButton.addEventListener("click",function(event){
         
          searchInput.value = "";
          console.log("search input value set to empty string");
          htmlPokeList.replaceChildren();
          getAllPokemon();
          for(let i=0;i<pokemonList.length;i++)
            {
              addListItem(pokemonList[i]);
            }
        })
       
        

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
          results = pokemonList.filter(filter)
          pcount.innerText = "Results: "+ results.length;
          if(sortByName===true){
         
            results.sort((a,b)=>a.name.localeCompare(b.name));
          }
          
          return results;
            //return pokemonList;
         
        }
       
        function filter(pokemon)
              {
                if(searchInputValue!="")
                  {
                if(pokemon.name[0].includes(searchInputValue[0]))
                  {
                    
                    return pokemon;
                  }
                }
                else {return pokemon;}
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
                pokeButton.style.backgroundColor = 'coral';
                pokeButton.title = 'click for more info on this Pokemon'
                pokeItem.appendChild(pokeButton);
                htmlPokeList.appendChild(pokeItem);
                pokeButton.addEventListener('click',function(event)//the button that shows the pokemon details
                {
                     showDetails(pokemon);
                 
                })
            }
           
               
        
        
        function getTypes(pokemon)//not used
        {
          loadDetails(pokemon).then(function() {
           
            console.log(pokemon.types[0].type.name);
            pt = pokemon.types[0].type.name;
            console.log(pt);
          });
        }

        function showDetails(pokemon) //the showdetails function, assigned to the pokeButton element
        {
            loadDetails(pokemon).then(function () {
              console.log(pokemon);
            let  pTypeModalColor = pokemon.types[0].type.name;
            //let modalText = document.getElementById('modal-body');
            modal = document.getElementById('modalbg');

           let pokeName = document.getElementById('pokeName');
           let pokeHeight = document.getElementById('pokeHeight');
            let pokeImg = document.getElementById('pokeImg');
            let pType = document.getElementById('ptype');
            let pokeWeight = document.getElementById('pokeWeight');

           pokeName.innerText = pokemon.name;
           pokeHeight.innerText = 'Height: '+ pokemon.height.toString();
           pokeWeight.innerText = 'Weight: '+ pokemon.weight.toString();
           pType.innerText = 'Type: ' + pokemon.types[0].type.name;
        
            pokeImg.imageUrl = pokemon.imageUrl.sprites;
            let image = document.getElementById('pImage');
            image.setAttribute('src',pokemon.imageUrl);
           
              console.log(pokemon.weight.toString());
            console.log(pokemon.types[0].type.name);
            
                 
               if(pTypeModalColor==='water'||pTypeModalColor==='ice')
               {
                    modal.style.backgroundColor = 'aqua';
                    modal.style.border = '4px solid blue';
                    modal.style.color = 'blue';
               }
               if(pTypeModalColor==='bug'||pTypeModalColor==='grass')
               {
                
                modal.style.backgroundColor = 'rgb(10, 197, 82) ';
                modal.style.border = '4px solid green';
                modal.style.color = 'green';
               }
               if(pTypeModalColor==='fire')
               {
                modal.style.backgroundColor = 'darkgoldenrod';
                modal.style.border = '4px solid red';
                modal.style.color = 'red';
               }
               if(pTypeModalColor==='electric')
               {
                modal.style.backgroundColor = 'gold';
                modal.style.border = '4px solid yellow';
                modal.style.color = 'darkgold';
               }
               if(pTypeModalColor==='poison')
               {
                modal.style.backgroundColor = 'purple';
                modal.style.border = '4px solid black';
                modal.style.color = 'black';
               }
               if(pTypeModalColor==='ground')
               {
                modal.style.backgroundColor = 'lightbrown';
                modal.style.border = ' 4px solid brown';
                modal.style.color = 'brown';
               }
               if(pTypeModalColor==='fighting')
               {
                modal.style.backgroundColor = 'lightbrown';
                modal.style.border = '4px solid black';
                modal.style.color = 'black';
               }
               if(pTypeModalColor==='normal')
               {
                modal.style.backgroundColor = 'lightbrown';
                modal.style.border = '4px solid silver';
                modal.style.color = 'silver';
               }
               if(pTypeModalColor==='ghost'||pTypeModalColor==='rock')
               {
                modal.style.backgroundColor = 'grey';
                modal.style.border = '4px solid darkgrey';
                modal.style.color = 'darkgrey';
               }

               console.log(pTypeModalColor);

             
            });
        }

    

        function loadList()//gets the main list from the api
        {
            
            return fetch(apiURL).then(function (response) {
                return response.json();
            }).then(function (json) {
                json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    height:item.height,
                   
                    detailsUrl: item.url,
                   
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
      item.weight = details.weight;
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







