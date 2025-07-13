import { useState, useEffect } from "react"
// import { useCurrencyInfo } from "../hooks/currencyHooks"

export function CurrencyConverter() {
  function useCurrencyInfo(currency:string) {
      const [data, setData] = useState({})
      // useEffect(()=>{
          fetch(
              `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
          ).then((res)=> res.json())
          .then((res)=>setData(res[currency]))
      // },[currency])
  
      console.log(data);
      
      return data
  }



  const [to, setTo] = useState('INR')
  const [from, setFrom] = useState('USD')
  const [amount, setAmOUNT] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  // const

  const currencyInfo = useCurrencyInfo(to)
  console.log(currencyInfo);
  
  const options = Object.keys(currencyInfo)
  setCurrencyOptions(options)

  // const Convert = ()=>{
  //   setConvertedAmount(amount * currencyInfo[to])
  // }
    return <>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Currency Converter</h1>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                <input 
                  type="text" 
                  value="100" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  onChange={(e)=>{setFrom(e.target.value)}}
                >
                  {/* {currencyInfo.} */}
                  <option selected>{from}</option>
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>JPY</option>
                  <option>CAD</option>
                  {/* {currencyOptions.map((currency)=>(
                    <option value={currency}>{currency.toUpperCase()}</option>
                  ))} */}
                </select>
              </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            onChange={(e)=>{setTo(e.target.value)}}
          >
            <option>USD</option>
            <option selected>{to}</option>
            <option>GBP</option>
            <option>JPY</option>
            <option>CAD</option>
          </select>
        </div>
      </div>
      
      <div className="pt-2">
        <div className="flex justify-between items-center py-3 border-t border-gray-200">
          <span className="text-gray-600">Exchange Rate</span>
          <span className="font-medium">0.85</span>
        </div>
        <div className="flex justify-between items-center py-3 border-t border-gray-200">
          <span className="text-gray-600">Converted Amount</span>
          <span className="font-bold text-lg">85.00 EUR</span>
        </div>
      </div>
      
      <button 
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
      >
        Convert
      </button>
      
      <div className="text-center text-xs text-gray-500 mt-4">
        Rates updated: July 13, 2023
      </div>
    </div>
  </div>
</div>
    </>
}