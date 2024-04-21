import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        { name: 'Ice-Cream', value: 80 },
        { name: 'Cold-Drinks', value: 120 }
        // Add more items as needed
    ]);

    // Your code starts here
    const totalValue = useMemo(() => {
        let total = 0;
        items.map(info => {
            total = total + info.value;
        })
        console.log("hi");
        return total;
    }, [items])
    // In the above code, the useMemo is invoked only during the initial render for the first time, 
    // because in our case we are not invoking the setItem to change the state.

// IMP :
// 1. useMemo is invoked both during the initial render(frist time rendeing of whole component) and when its dependencies change.
// 2. During the initial render, useMemo calculates the initial memoized value of totalValue.
// 3. On subsequent renders, useMemo will recalculate totalValue if the items array changes.

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value : ${totalValue}</p>
        </div>
    );
};
