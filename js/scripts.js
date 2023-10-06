let pokemonList=[];
let types = ['Electric','Water','Fire','Ground','Rock','Normal','Grass','Bug','Flying','Poison','Fairy','Fighting','Pyschic','Steel','ghost'];

let Pikachu = {name:'Pikachu',type:types[0],height:0.4};
let Charmander = {name:'Charmander',type:types[2],height:0.6};
let Squirtle = {name:'Squirtle',type:types[1],height:0.5};
let Ditto = {name:'Ditto',type:types[5],height:0.3};
let Diglett = {name:'Diglett',type:types[3],height:0.2};

pokemonList.push(Pikachu);
pokemonList.push(Charmander);
pokemonList.push(Squirtle);
pokemonList.push(Diglett);
pokemonList.push(Ditto);

for(let i=0;i<pokemonList.length;i++)
{
    document.write("Name: " + pokemonList[i].name + ", Type: " + pokemonList[i].type + ", Height: " + pokemonList[i].height +'M' + '<br>');
}

