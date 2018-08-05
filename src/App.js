import React from 'react';
import { initStore } from 'react-waterfall'

const store = {
  initialState: { count: 0 },
  actions: {
    increment: ({ count }) => ({ count: count + 1 }),
  },
}

const { Provider, connect } = initStore(store)

let Count = ({ count, actions }) => (
  <div>
    {count}
    <button onClick={actions.increment}>+</button>
  </div>
)

Count = connect(state => ({ ...state }))(Count)

const App = () => (
  <Provider>
    <Count />
  </Provider>
)

export default App;