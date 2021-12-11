const reducer = (state = 78, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    case 'RND':
      return state + action.payload
     case 'RST':
      return state = 0
    default:
      return state
  }
}

export default reducer;
