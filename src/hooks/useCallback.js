import { memo, useCallback, useState } from "react";

const UseCallbackComponent = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = useCallback(() => {
        setCounter(oldCounter => oldCounter + 1);
    }, [])

    const handleClickWithotuCallback = () => {
        setCounter(counter + 1);
    };

    return <>
        <h1>useCallback</h1>
        <h2>Times useCallback Changes {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Increase Counter and update counter me!</button>
        <ChildComponent handleClick={handleClick} text={'Click with useCallback'}/>
        <ChildComponent handleClick={handleClickWithotuCallback} text='Click without useCallback'/>
    </>
}

const ChildComponent = memo(({ handleClick, text}) => {
    console.log('click ha: ', text);

    return <div>
        <button onClick={() => handleClick()}>{text ?? 'Click me!'}</button>
    </div>
})

export default UseCallbackComponent;