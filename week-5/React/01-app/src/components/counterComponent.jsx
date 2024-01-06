import React, {useState} from 'react';

const CounterComponent = () => {  
    const [count, setCount] = useState(0);

    function check(num){
        if(num % 2 == 0){
           return <span>Even🙂</span>;
        }else{
           return <span>Odd😐</span>;
        }
    }

    return (
        <div>
        <h3>Count : {count}</h3>
        <h2>I am {check(count)}</h2>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
        </div>
    );
}

export default CounterComponent;