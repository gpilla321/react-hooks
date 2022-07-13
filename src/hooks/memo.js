
import { React, memo, useState, useEffect } from "react";

const MemoComponent = () => {
    const [products, setProduct] = useState([
        { title: 'this is a title', description: 'this is a description' },
        { title: 'this is a title', description: 'this is a description' },
        { title: 'this is a title', description: 'this is a description' },
        { title: 'this is a title', description: 'this is a description' },
        { title: 'this is a title', description: 'this is a description' },
        { title: 'this is a title', description: 'this is a description' },
        { title: 'this is a title', description: 'this is a description' },
        { title: 'this is a title', description: 'this is a description' },
        { title: 'this is a title', description: 'this is a description' },
        { title: 'this is a title', description: 'this is a description' }
    ]);

    const [counter, setCounter] = useState(0);

    const handleCounter = () => {
        setCounter(counter + 1);
    }

    return <>
        <header><button onClick={() => handleCounter()}>Click me</button>Increase Counter: {counter}</header>
        <h2>When you trigger the click look into console</h2>
        <h1>Good practice component</h1>
        {products.map((product) => <>
            <GoodComponent product={product} />
        </>)}

        <h1>Bad practice component</h1>
        {products.map((product) => <>
            <BadComponent product={product} />
        </>)}
    </>
};

const GoodComponent = memo((prop) => {
    const { product } = prop;

    console.log('Good Component Rerender');

    return <div className="card">
        <span>{product.title}</span>
        <span>{product.description}</span>
    </div>
});

const BadComponent = (prop) => {
    const { product } = prop;

    console.log('Bad Component Rerender');

    return <div className="card">
        <span>{product.title}</span>
        <span>{product.description}</span>
    </div>
};


export default MemoComponent;