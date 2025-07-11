import { useCallback, useEffect, useRef, useState } from "react"

export function PasswordGenerator() {
    const [passwordLength, setPasswordLength] = useState<number>(6)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [specialCharAllowed, setSpecialCharAllowed] = useState<boolean>(false)
    const [password, setPassword] = useState('')

    const generatePassword =
        useCallback(() => {
            // () => {
            let pass = ''
            let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
            if (numberAllowed) str += "0123456789"
            if (specialCharAllowed) str += "~!@#$%^&*()_+"

            for (let i = 1; i < passwordLength; i++) {
                const char = Math.floor(Math.random() * str.length + 1)
                pass += str.charAt(char)
            }
            setPassword(pass)
            console.log(password);
            // }

        }, [passwordLength, numberAllowed, specialCharAllowed])
    useEffect(() => {
        generatePassword()
    }, [passwordLength, specialCharAllowed, numberAllowed])

    const passwordRef = useRef(null)
    const copyPasswordToClipBoard = () => {
        console.log("clicked");

        window.navigator.clipboard.writeText(password)
        passwordRef.current?.select()
    }
    return <>
        {/* <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> */}
        <div className="max-w-2xl mx-auto ">
            <div className="relative">
                <input
                    type="text"
                    id="generatedPassword"
                    className="w-full p-4 bg-gray-900/50 border border-gray-600 rounded-lg text-white"
                    placeholder="Your password will be displayed here"
                    value={password}
                    ref={passwordRef}
                    readOnly
                />
                <button
                    id="copyBtn"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-white-400 hover:text-white transition-colors"
                    title="Copy to clipboard"
                    onClick={copyPasswordToClipBoard}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-black-200 mb-2">
                        Password Length: <span id="lengthValue" className="text-red-400 font-semibold">{passwordLength}</span>
                    </label>
                    <input
                        type="range"
                        id="lengthSlider"
                        min="4"
                        max="64"
                        value={passwordLength}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                        onChange={(e) => setPasswordLength(Number(e.target.value))}
                    />
                    <div className="flex justify-between text-xs text-black-400 mt-1">
                        <span>4</span>
                        <span>64</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-black mb-3">Include Characters</h3>

                    <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" id="includeLowercase" defaultChecked={specialCharAllowed} className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
                            // value={Boolean(specialCharAllowed)}
                            onChange={() => setSpecialCharAllowed((prev) => !prev)} // we are using this for quick changes in checkbox
                        />
                        <span className="text-black-200">Charecters</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" id="includeNumbers" defaultChecked={numberAllowed} className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
                            onChange={() => setNumberAllowed((prev) => !prev)}
                        />
                        <span className="text-black-200">Numbers (0-9)</span>
                    </label>

                    {/* <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" id="includeSymbols" className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500" />
                        <span className="text-black-200">Symbols (!@#$%^&*)</span>
                    </label> */}
                </div>
            </div>
            {/* </div> */}
        </div>
    </>
}