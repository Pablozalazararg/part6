const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  let newGoodState;
  switch (action.type) {
    case 'GOOD':
      newGoodState = {...state, good: state.good + 1}
      return newGoodState
    case 'OK':
      newGoodState = {...state, ok: state.ok + 1}
      return newGoodState
    case 'BAD':
      newGoodState = {...state, bad: state.bad + 1}
      return newGoodState
      
    case 'ZERO':
      newGoodState = {ok:0, good: 0, bad:0}
      return newGoodState
      
    default: return state
  }
  
}

export default counterReducer