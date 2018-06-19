export function pokemonsFilter({pokemons, filters}) {
    const {searchBoxValue} = filters;
    const filteredPokemons = pokemons.data.filter(pokemon => pokemon.name.includes(searchBoxValue));
    return {...pokemons, data: filteredPokemons}
}