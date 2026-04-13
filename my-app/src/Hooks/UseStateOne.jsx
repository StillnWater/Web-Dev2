import React from "react";
const UsestateOne = () => {
    const [count, setCount] = React.useState(0);
    console.log("count", count);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
    setCount(count - 1);
    }
    return (
        <>
            <div>
                <p>Count: {count}</p>
                <button onClick={increase}>Increase</button>
                <button onClick={decrease}>Decrease</button>
            </div>
        </>
    );
}





export default UsestateOne;