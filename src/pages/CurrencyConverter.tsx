import { useState, useEffect } from "react"
import { useCurrencyInfo } from "../hooks/currencyHooks"
import { CustomInputBox } from "../components/inputBox"
export function CurrencyConverter() {
  //   function useCurrencyInfo(currency: string) {
  //     const [data, setData] = useState({})
  //     // useEffect(()=>{
  //     fetch(
  //       `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
  //     ).then((res) => res.json())
  //       .then((res) => setData(res[currency]))
  //     // },[currency])

  //     console.log(data);

  //     return data
  //   }



  const [to, setTo] = useState<string>('INR')
  const [from, setFrom] = useState('USD')
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  // const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  // // const

  const currencyInfo: Record<string, number> = useCurrencyInfo(from)
  console.log(currencyInfo);

  const options: string[] = Object.keys(currencyInfo)
  // setCurrencyOptions(options)

  const Convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return <>
    (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            Convert()
          }}>
            <div className='w-full mb-1'>
              <CustomInputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            {/* <div className='relative w-full h-0.5'>
              <button
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >Swap</button>
            </div> */}
            <div className='w-full mb-1'>
              <CustomInputBox
                label="to"
                currencyOptions={options}
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>

    </div>
    )
  </>
}