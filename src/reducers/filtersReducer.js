const defaultFiltersValues = {
  storedBoxValue: "",
  searchBoxValue: "",
  filterTypes: []
};

export default (filters = defaultFiltersValues, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'SEARCH_POKEMONS':
      return {...filters, searchBoxValue: payload};

    case 'FILTER_BY_TYPE':
      return {...filters, filterTypes: payload};

    case 'STORE_SEARCH_BOX':
      return {...filters, storedBoxValue: payload};

    default:
      return filters
  }
}