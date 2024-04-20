import { useMemo } from "react";
import { useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(1);
    const [test, setTest] = useState(false);

    // Your solution starts here
    const expensiveValue = useMemo(() => {
        console.log("Only recomputed when the input changes");
        let result = 1;
        for (let i = 1; i <= input; i++) {
            result = result * i;
        }
        return result;
    }, [input]);  //here this input is indicating, useMemo will only compute when there is any change in the input field

    return (
        <div>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
            />
            <p>Calculated Value: {expensiveValue}</p>
            {/* The change in the below "TEST" state will not trigger the re-rendering of expensiveValue, because we are using useMemo */}
            <button onClick={() => setTest(!test)}>Click me the change the another state</button> 
            <p>{test ? "successful" : "failed"}</p>
        </div>
    );
}