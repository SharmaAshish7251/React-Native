import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0)
    return (
        <>
            <h5>Counter</h5>
            {/* use callback function to avoid inifite loop */}
            <button onClick={() => setCount(count + 1)}>➕</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}>➖</button>
        </>
    )
}

export default Counter;