import { useState } from "react";

export function Home() {
    // return <>
    //     <h1>Home</h1>
    // </>
    const [counter, setCounter] = useState(15)
    const addValue = (number: number) => {
        setCounter(counter + number)
        console.log(counter);
    }
    const extractValue = (number: number) => {
        setCounter(counter - number)
        console.log(counter);
    }
    return <>
        <h1>Home</h1>
        <h2>Counter Value : {counter}</h2>
        <button onClick={() => addValue(1)}>Add Value</button>{" "}
        <button onClick={() => extractValue(1)}>Extract Value</button>
    </>
}