import React, { useState } from 'react'

function Example(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <p style={count%2==0?{color:'purple'}:{color:'green',fontSize:'17px'}}>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me plus one
            </button>

            <button onClick={() => setCount(count -1)}>
                Click me Less one
        </button>
        </div>
    );
}


export default Example