import {useState } from 'react';

function Label(props) {
    console.log('Label rendered');

    return (
        <span> I have been clicked {props.count} times</span>
    )
}

export function Counter() {
    const [count, setCount] = useState(0);
    console.log('rendered');

    const increment = () => {
        console.log('increment')
        setCount(count +1);
    }
    return (
        <div>
            <Label count={count}/>
            <button onClick={increment}>Increase by 1</button>
        </div>
    )
}