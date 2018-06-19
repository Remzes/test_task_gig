const defaultFiltersValues = {
    searchBoxValue: ""
};

export default (filters = defaultFiltersValues, action) => {
    const {type, payload} = action;

    switch(type) {
        case 'SEARCH_POKEMONS':
            return {...filters, searchBoxValue: payload};

        default:
            return filters
    }
}