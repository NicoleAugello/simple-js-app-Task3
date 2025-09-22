let pokemonList = [
    { name: 'Jigglypuff', height: 5, types:  ['poision', 'bug']},
    { name: 'Charmeleon', height: 11, types:  ['ground', 'steel']},
    { name: 'Raichu', height: 8, types:  ['fire', 'flying']}
];

for (let i = 0; i < pokemonList.length; i++) {
    document.write(`<h1>${pokemonList[i].name} (Height: ${pokemonList[i].height})</h1>`);
}