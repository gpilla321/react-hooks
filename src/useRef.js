
import { useRef} from 'react';

const UseRefComponent= () => {
    const inputElement = useRef(null);

    const handleClick = () => {
        inputElement.current.focus();
        inputElement.current.value = 'This value is generated on click';
    }

    return <>
        <h1>Using useRef</h1>
        <ChildrenComponent inputElement={inputElement} handleClick={handleClick}/>
    </>
}

const ChildrenComponent = ({inputElement, handleClick}) => {
    return <>
        <input type='text' ref={inputElement} style={{width: '500px'}}/>
        <button onClick={() => handleClick()}>Click me</button>
    </>
}

export default UseRefComponent;