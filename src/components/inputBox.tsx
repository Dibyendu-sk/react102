export function CustomInputBox(
    label: any = "from",
    amount: any = 100,
    onAmountChange,
    onCurrencyChange,
    currencyOptions: any = [],
    selectedCurrency: any = "usd",
    amountDisabled: any = false
) {
    return <>
        <div className="relative max-w-md mx-auto mt-8">
            <div className="relative flex">
                {/* <!-- Input field --> */}
                <label htmlFor="">{label}</label>
                <input
                    type="number"
                    placeholder="amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => { onAmountChange && onAmountChange(Number(e.target.value)) }}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                />
                {/* <!-- Select dropdown --> */}
                <div className="relative">
                    <p className="text-black/40 mb-2 w-full">Currency Type</p>
                    <select className="appearance-none px-4 py-3 bg-blue-900 text-white border border-blue-500 rounded-r-lg hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 cursor-pointer pr-10"
                        value={selectedCurrency}
                        onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
                    >
                        {/* <option value="option1" selected>{selectedCurrency}</option> */}
                        {/* <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="special">Special Option</option> */}
                        {/* {currencyOptions.map((currency) => (
                            <option value={currency} key={currency}"></option>
                        ))}} */}
                        {currencyOptions.map((currency)=>(
                            <option value={currency} key={currency}>{currency}</option>
                        ))}
                    </select>

                    {/* <!-- Custom dropdown arrow --> */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </>
}