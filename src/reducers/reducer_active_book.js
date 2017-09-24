//State argument is not applicable to state, only to the state this reducer is responsible for

export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
    return action.payload
  }

  return state;
}
