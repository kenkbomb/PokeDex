/*let pokemonList=[
{name:'Pikachu',types: ['Electric'],height:0.4},
{name:'Charmander',types:['Fire'],height:0.6},
{name:'Blastoise',types:'Water',height:1.6},
{name:'Squirtle',types:['Water'],height:0.5},
{name:'Charizord',types:['Flying','Fire'],height:1.7},
{name:'Diglett',types:['Ground'],height:0.2}
];

function listPokeMonWithFor(){
    for(let i=0;i<pokemonList.length;i++)
    {
        document.write('<p>' + 'Name: ' + pokemonList[i].name + ', Types: ('+ pokemonList[i].types + '), Height: '+ pokemonList[i].height);

        if(pokemonList[i].height>1.6)
        {
            document.write('   ...WOW! that is big!');
        }
        
        document.write('<br> </p>');
    }
}

function listPokeMonWithForEach()
{
    pokemonList.forEach(function(pokemon)
    {
        document.write('<p>' + 'Name: ' + pokemon.name + ', Types: ('+ pokemon.types + '), Height: '+ pokemon.height);

    if(pokemon.height>1.6)
    {
        document.write('   ...WOW! that is big!');
    }
    
    document.write('<br> </p>');
    })
}
*/
function listPokeMonWithIIFE()
{
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
                // alert(pokemon.name+ " " + pokemon.types+ " " + pokemon.height);
            })
    }

    function showDetails(pokemon)
    {
        console.log(pokemon);
    }
    let pokelist = pokeIIFe.getAll();
    let htmlPokeList = document.querySelector('ul');

    pokelist.forEach(function(pokemon)
    {
        addListItem(pokemon);


      /*  document.write('<p>' + 'Name: ' + pokemon.name + ', Types: ('+ pokemon.types + '), Height: '+ pokemon.height);

    if(pokemon.height>1.6)
    {
        document.write('   ...WOW! that is big!');
    }
    
    document.write('<br> </p>');*/
    })
}

let pokeIIFe = (function()
{


    let pokemonList=[
        {name:'Pikachu',types: ['Electric'],height:0.4},
        {name:'Charmander',types:['Fire'],height:0.6},
        {name:'Blastoise',types:'Water',height:1.6},
        {name:'Squirtle',types:['Water'],height:0.5},
        {name:'Charizord',types:['Flying','Fire'],height:1.7},
        {name:'Diglett',types:['Ground'],height:0.2},
       { name:'Metapod',types:['bug'],height:0.7}

        ];

     return{
        add:function(pokemon)
        {
            if(pokemon instanceof Object)
            {
            pokemonList.push(pokemon);
            }
            else {
                alert('Pokemon only!');
            }
        },
        getAll:function()
        {
            return pokemonList;
        }
    }


})();

// listPokeMonWithForEach();
/*let pokemon  = {
    name:'Metapod',types:['bug'],height:0.7
}
pokeIIFe.add(pokemon);
pokeIIFe.add(6);*/
listPokeMonWithIIFE();




