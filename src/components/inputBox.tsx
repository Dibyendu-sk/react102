import { ChevronDown } from 'lucide-react';

type InputProps = {
    label: string,
    amount: number,
    onAmountChange: (value: number) => void
    onCurrencyChange: (value: string) => void
    currencyOptions: string[]
    selectedCurrency: string
    amountDisabled?: boolean

}

export function CustomInputBox(
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions,
        selectedCurrency,
        amountDisabled = false
    }: InputProps
) {
    return <>
        <div className=" p-8 border ">
            {/* <h2 className="text-2xl font-bold text-white mb-6 text-center">Elegant Gradient Style</h2> */}
            <div className="relative max-w-md mx-auto">
                <label className="block text-black/90 font-semibold mb-3 text-lg">{label}</label>
                <div className="relative flex rounded-2xl overflow-hidden shadow-xl border border-purple-400/30">
                    <input
                        type="number"
                        placeholder="Enter amount"
                        disabled={amountDisabled}
                        value={amount}
                        onChange={(e) => onAmountChange(Number(e.target.value))}
                        className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500/20 to-blue-500/20 text-white placeholder-white/60 border-0 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 text-lg font-medium"
                    />
                    <div className="relative">
                        <select
                            className="appearance-none px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-600 text-white border-0 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 cursor-pointer pr-12 font-medium hover:from-blue-700 hover:to-blue-70"
                            value={selectedCurrency}
                            onChange={(e) => onCurrencyChange(e.target.value)}
                        >
                            {currencyOptions.map((currency) => (
                                <option value={currency} key={currency} className="bg-blue-800 text-white">
                                    {currency}
                                </option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                            <ChevronDown className="w-5 h-5 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}