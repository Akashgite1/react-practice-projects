import { useState } from 'react'
import './App.css'
import { InputBox } from './components' // importing InputBox component from components folder
import useCurrencyInfo from './hooks/useCurrencyInfo' // importing custom hook for currency info

function App() {
  const [amount, setAmount] = useState(0); // state to hold amount
  const [from, setFrom] = useState("usd"); // state to hold currency type
  const [to, setTo] = useState("inr"); // state to hold currency type
  const [ConvertedAmount, setConvertedAmount] = useState(0); // state to hold result of conversion

  //use custom hook to get currency info
  const currencyInfo = useCurrencyInfo(from); // using custom hook to get currency info for 'from' currency

  const options = Object.keys(currencyInfo); // getting currency options from the currency info

  // swap two variables [currency1, currency2] = [currency2, currency1]
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(ConvertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to] / currencyInfo[from]); // converting amount from one currency to another
  }

  return (
    <>
      
      <div className='w-full h-screen flex'></div>

    </>
  )
}

export default App
