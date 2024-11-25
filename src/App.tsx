import React from 'react'
import './App.css'
import Question1 from './questions/question1/Question1'
import { Question2 } from './questions/question2/Question2'
import Question3 from './questions/question3'
import { Question4 } from './questions/question4/Question4'


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

      <div className="card">
        <Question3 />
      </div>

      <div className="card">
        <Question4 />
      </div>
    </div>
  )
}

export default App
