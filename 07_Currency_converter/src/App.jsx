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

      <div className='w-full h-screen flex flex-wrap justify-center items-center
      bg-cover bg-no-repeat 'style={{ backgroundImage: `url(https://www.constructionweekonline.com/cloud/2021/07/07/img-worlds-of-adventure.jpg)` }}
      >
        <div className="w-full">
          <div className='w-full max-w-md mx-auto border border-grey-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form onSubmit={(e) => {
              e.preventDefault(); // prevent default form submission
              convert(); // call convert function on form submission
            }}>

              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setAmount(amount)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)} // updating amount state on input change
                />
              </div>

              <div className="relative w-full h-0.5">
                <button type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2  border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}>
                  swap
                </button>
              </div>

              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={ConvertedAmount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={from}
                  amountDisabled={true} // disabling amount input for 'to' currency
                />
              </div>
              <button type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {amount} {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
