import React from 'react'
import './App.css'
import Question1 from './questions/question1/Question1'
import { Question2 } from './questions/question2/Question2'


function App() {

  return (
    <div>
      <h1>Metrobi Questions</h1>
      <div className="card">
        <Question1 />
      </div>

      <div className="card">
        <Question2 />

      </div>
    </div>
  )
}

export default App
