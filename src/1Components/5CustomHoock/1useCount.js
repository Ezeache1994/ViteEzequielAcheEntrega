import { useState } from "react";

export default function useCount(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(count + 1000);
    };

    const decrement = () => {
        setCount(count - 1000);
    };

    const reset = () => {
        setCount(initialValue);
    };

    return { count, increment, decrement, reset };
}
