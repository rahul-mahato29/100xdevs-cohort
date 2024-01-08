import React, { useEffect , useState} from 'react';

const Effect = () => {

    const [count, setCount] = useState(0);

    //useEffect during mounting of data
    useEffect( () => {
        console.log("mounting data")
    }, []);

    //useEffect during updation of data
    useEffect( () => {
        console.log("mounting data")
    }, [count]);

    return (
        <div>
            <h3>Hi There, I came here to  help you in useEffect</h3>
            <h3>Count : {count}</h3>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
        </div>
    );
}

export default Effect;