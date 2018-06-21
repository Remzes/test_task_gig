export default (state = false, action) => {
  const {type} = action;
  console.log(type)
  switch(type) {
    case 'TOGGLE_DASHBOARD':
      return !state;

    default:
      return state
  }
}