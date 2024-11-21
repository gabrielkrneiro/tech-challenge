import React from 'react'
import { writeItems } from './helpers'

export const Question2 = () => {
    const [input, setInput] = React.useState<string>('')
    const [output, setOutput] = React.useState<unknown[]>([])


    const onClick = () => {
        setOutput([])
        console.log(JSON.parse(input))

        const items = JSON.parse(input)

        writeItems(items, output, setOutput)
    }

    return (
        <section>
            <h2>Question 2</h2>
            <p>Description: Write an async javascript function that writes every item in any given array with 1, 2, 4, 8, etc., seconds apart.</p>

            <div>
                <input type="text" name='input' className='input' value={input} onChange={(event) => setInput(event.target.value)} />
                <button onClick={onClick}>Write items</button>
                <p>result: {JSON.stringify(output[0])}</p>
            </div>
        </section>
    )
}
