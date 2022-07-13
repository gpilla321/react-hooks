
import { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return { ...state, count: state.count + 1, error: null }
        case 'zero':
            return { ...state, count: 0, error: null }
        case 'remove':
            return { ...state, count: state.count - 1, error: null }
        default:
            return { ...state, error: 'Error! Action not found' }
    }
}


const UseReducerComponent = () => {

    const initialState = { count: 5 };
    const [state, dispatch] = useReducer(reducer, initialState);

    return <>
        <h1>Using UseReducer</h1>
        <h2>Counter: {state?.count}</h2>
        <h3>Error Message: {state?.error ?? 'No error message'}</h3>
        <button onClick={() => dispatch({ type: 'add' })}>ADD</button>
        <br />
        <button onClick={() => dispatch({ type: 'remove' })}>REMOVE</button>
        <br />
        <button onClick={() => dispatch({ type: 'zero' })}>ZERO</button>
        <br />
        <button onClick={() => dispatch({ type: 'notExists' })}>Triggr non existant action</button>
    </>
}

export default UseReducerComponent;