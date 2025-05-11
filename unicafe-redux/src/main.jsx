import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
const initialState = {
  good:0,
  ok:0,
  bad:0

}
const counterReducer = (state = initialState, action) => {
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
//crea un store
const store = createStore(counterReducer)

const App = () => {
  return (
    <div>
      //el método dispatch envía una acción al store
      <button onClick={() => store.dispatch({ type: 'GOOD' })}>good</button> 
      <button onClick={() => store.dispatch({ type: 'OK' })}>ok</button> 
      <button onClick={() => store.dispatch({ type: 'BAD' })}>bad</button>
      <button onClick={() => store.dispatch({ type: 'ZERO' })}>reset stats</button>
      //el método getState muestra el estado del store
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
