import { useState } from "react"

export function ColorChange() {
    const [bgColor, setBgColor] = useState("white")
    return <>
    <body style={{backgroundColor:bgColor}}>
        <div className="bg-white" style={{padding:50, borderRadius:20}}>
        <button className="text-white font-bold" style={{backgroundColor:"#C5172E"}} onClick={()=>setBgColor("#C5172E")}>Red</button>
        <button className="text-white font-bold" style={{backgroundColor:"#0065F8"}} onClick={()=>setBgColor("#0065F8")}>Blue</button>
        <button className="text-white font-bold" style={{backgroundColor:"#FF9D23"}} onClick={()=>setBgColor("#FF9D23")}>Yellow</button>
    </div>
    </body>
    
</>
    
}