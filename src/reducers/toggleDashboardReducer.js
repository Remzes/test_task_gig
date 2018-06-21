export default (state = false, action) => {
  const {type} = action;
  switch(type) {
    case 'TOGGLE_DASHBOARD':
      return !state;

    default:
      return state
  }
}