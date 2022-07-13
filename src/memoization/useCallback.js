import { memo, useCallback, useState } from "react";

const UseCallbackComponent = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = useCallback((value) => {
        setCounter(oldCounter => oldCounter + 1);

        console.log(counter)
        console.log(value)
    }, [])

    return <>
        <h1>useCallback</h1>
        <h2>Times useCallback Changes {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Increase Counter and update counter me!</button>
        <ChildComponent handleClick={handleClick} />
    </>
}

const ChildComponent = memo(({ handleClick }) => {
    const [inputValue, setInputValue] = useState('');
    const handleOnChange = (e) => {
        setInputValue(e.target.value)
    }

    return <div>
        <input type='text' onChange={(e) => handleOnChange(e)} />
        <button onClick={() => handleClick(inputValue)}>Click me!</button>
    </div>
})

export default UseCallbackComponent;