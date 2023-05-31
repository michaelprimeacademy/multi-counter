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

    const decreaseFive = () => {
            console.log('decrement 5')
            setCount(count -5);
    }
    const incrementFive = () => {
                console.log('increment 5')
                setCount(count +5);
    }

  
    return (
        <div>
            <Label count={count}/>
            <button onClick={increment}>Increase by 1</button>
            <button onClick={incrementFive}>Increase by 5</button>
            <button onClick={decreaseFive}>Decrease by 5</button>
        </div>
    )
}