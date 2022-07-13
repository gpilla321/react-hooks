import { createContext, useContext, useState, useCallback, memo } from 'react';


const ExampleContext = createContext();

const ExampleContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    const increaseCounter = useCallback(() => setCounter(oldCounter => oldCounter + 1), []);

    return <ExampleContext.Provider value={{ increaseCounter, counter }}>
        {children}
    </ExampleContext.Provider>
}

const UseContextComponent = memo(() => {
    const { counter, increaseCounter} = useContext(ExampleContext);

    return <>
        <h1>Use Context: {counter}</h1>
        <div className='grid'>
            <BadChildrenComponent />
            <GoodChildrenComponent increaseCounter={increaseCounter} />
        </div>
    </>
})

const BadChildrenComponent = memo(() => {
    const { increaseCounter } = useContext(ExampleContext);

    console.log('rerender Bad children component');

    return <button onClick={() => increaseCounter()}>I am a bad button component!</button>
})


const GoodChildrenComponent = memo(({ increaseCounter }) => {
    console.log('rerender Good children component');

    return <button onClick={() => increaseCounter()}>I am a good button component!</button>
})


export { UseContextComponent, ExampleContextProvider };