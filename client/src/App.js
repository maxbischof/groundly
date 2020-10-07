import React from 'react'
import Arrivals from './Arrivals'
import { Route } from 'react-router-dom'
import Communication from './Communication'

function App() {
  return (
    <>
      <Route exact path="/">
        <Arrivals />
      </Route>
      <Route path="/communications/:id">
        <Communication />
      </Route>
    </>
  )
}

export default App
