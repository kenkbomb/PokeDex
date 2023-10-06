let pokemonList=[
{name:'Pikachu',types: ['Electric'],height:0.4},
{name:'Charmander',types:['Fire'],height:0.6},
{name:'Blastoise',types:'Water',height:1.6},
{name:'Squirtle',types:['Water'],height:0.5},
{name:'Charizord',types:['Flying','Fire'],height:1.7},
{name:'Diglett',types:['Ground'],height:0.2}
];

for(let i=0;i<pokemonList.length;i++)
{
    document.write('Name: ' + pokemonList[i].name + ', Types: ('+ pokemonList[i].types + '), Height: '+ pokemonList[i].height);

    if(pokemonList[i].height>1.6)
    {
        document.write('   ...WOW! that is big!');
    }
    
    document.write('<br>');
}

