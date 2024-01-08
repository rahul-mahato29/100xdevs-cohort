import React, { useEffect } from 'react';

const Effect = () => {

    //useEffect
    useEffect( () => {
        console.log("mounting data")
    }, []);

    return (

        <h3>Hi There, I came here to  help you in useEffect</h3>
    );
}

export default Effect;