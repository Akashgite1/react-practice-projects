import { useEffect, useState } from "react"; // importing react hooks in custom hook
import axios from "axios"; // importing axios for API calls


function useCurrencyInfo(curreny) {
    const [data, setData] = useState({}); // state to hold currency data

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency.toLowerCase()}.min.json`)
        .then((response) => response.json())
        .then((response) => setData(response[curreny]))
    },[curreny])
    console.log(data);;
    return data; // returning the currency data
    
}

export default useCurrencyInfo; // exporting the custom hook for use in components