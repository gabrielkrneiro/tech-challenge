import React, { memo } from 'react'
import { findDuplicated } from './helpers'

const Question1 = memo(() => {

  const [duplicated, setDuplicated] = React.useState<unknown[]>([])
  const [input, setInput] = React.useState<string>('')

  const onClick = () => {
    try {
      const duplicates = findDuplicated(JSON.parse(input))
      setDuplicated(duplicates)
    } catch (error) {
      console.error('Invalid input:', error)
      setDuplicated([])
    }
  }

  return (
    <section>
      <h2>Question 1</h2>
      <p>Description: Write a javascript function that finds the duplicate items in any given array.</p>

      <div>
        <input type="text" name='input' className='input' value={input} onChange={(event) => setInput(event.target.value)} />
        <button onClick={onClick}>Find duplicated!</button>
        <p>duplicated values: {JSON.stringify(duplicated)}</p>
      </div>
    </section>
  )
})

export default Question1