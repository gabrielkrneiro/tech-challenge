import React, { useMemo } from 'react'
import { isValidBrackets } from './helpers'

export const Question4 = () => {
    const [input, setInput] = React.useState<string>('')
    const [output, setOutput] = React.useState<boolean | undefined>()


    const onClick = () => {
        setOutput(isValidBrackets(input))
    }

    const result = useMemo(() => `${input} => ${output}`, [input, output])

    return (
        <section>
            <h2>Question 4</h2>
            <p>Description: {`Write an efficient method that tells us whether or not an input string brackets ("{", "}",
                "(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,
                “{([)]}” => false`}</p>

            <div>
                <input type="text" name='input' className='input' value={input} onChange={(event) => setInput(event.target.value)} />
                <button onClick={onClick}>Write items</button>
                {output !== undefined && <p>Result: {result}</p>}
            </div>
        </section>
    )
}
