import React from 'react'
import { eggDrop } from './helpers'

export const Question5 = () => {
    const [input, setInput] = React.useState<string>('')
    const [output, setOutput] = React.useState<{ highestSafeFloor: number, totalDrops: number } | undefined>()


    const onClick = () => {
        if (!input || isNaN(parseInt(input))) {
            setOutput(undefined)
            return
        }
        setOutput(eggDrop(parseInt(input)))
    }


    return (
        <section>
            <h2>Question 5</h2>
            <p>Description: A building has 100 floors. One of the floors is the highest floor an egg can be dropped
                from without breaking. If an egg is dropped from above that floor, it will break. If it is
                dropped from that floor or below, it will be completely undamaged and you can drop the
                egg again. Given two eggs, find the highest floor an egg can be dropped from without
                breaking, with as few drops as possible in the worst-case scenario.</p>

            <div>
                <label htmlFor="input">Number of Floors</label>
                <input type="text" name='input' className='input' value={input} onChange={(event) => setInput(event.target.value)} />
                <button onClick={onClick}>Write items</button>
                {output && <p>
                    {`Highest safe floor: ${output?.highestSafeFloor}, Total drops: ${output?.totalDrops}`}
                </p>}
            </div>
        </section>
    )
}
