import React from 'react'
import InputTile from './InputTile';
import '../styles/main.scss'
const App = (props) => {
  return(
    <>
      <h1 className="welcome-message">PIP Calculator</h1>
      <InputTile />
    </>
  )
}

export default App;
