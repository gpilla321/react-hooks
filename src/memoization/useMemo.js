import { useMemo, useState } from "react";

const UseMemoComponent = () => {
    const [counter, setCounter] = useState(0);
    const array = new Array(30).fill(5);

    const handleClick = () => setCounter(counter + 1)
    
    const totalMemoized = useMemo(() => 
        array.reduce((a, b) => {
            console.log('Memoized calculation')
            return a + b;
        }), []);

    const totalWithoutMemo = () =>
        array.reduce((a, b) => {
            console.log('No memoized calculation')
            return a + b;
        });

    return <>
        <h1>useMemo</h1>
        <h2>Count {counter}</h2>
        <h3>Memoized calculation: {totalMemoized}</h3>
        <h3>Memoized calculation: {totalWithoutMemo()}</h3>
        <button onClick={handleClick}>Increase Counter</button>
    </>
}

export default UseMemoComponent;