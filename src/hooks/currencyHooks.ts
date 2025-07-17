import { useState, useEffect } from "react";

export function useCurrencyInfo(currency: string): Record<string, number> {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        ).then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency])

    console.log(String(data));

    return data
}