"use client"

import { useState } from "react"

export default function Magic() {
    const [inputClear, setInputClear] = useState<number>(0);
    const [binarie, setBinarie] = useState<string>("");

    const handleChange = (bit: string) => {

        // Este IF Garante que se apagar o texto, nao ocorrera o alert

        if (bit === '' || bit === null) {
            setBinarie('')
            return
        }

        // lastByte é a ultima char da string. ex : 10104, lastByte aqui é o ultimo caracter : 4.

        const lastByte = bit.length - 1
        if (bit[lastByte] !== "0" && bit[lastByte] !== "1") {
            alert('type only 1 or 0');
            return
        }

        const binarieString = binarie + bit[lastByte]
        
        setBinarie(binarieString)
    }

    const BinarieToDecimal = () => {
        if (binarie === '') {
            alert('Type binaries before ask for the result')
            return
        }
        let result = 0;

        const lastByte = binarie.length - 1

        let ZERO = 0

        for (let index = lastByte; index >= 0; index -= 1) {
            // logica do for:
            // console.log(`binario : ${Number(binarie[index])}`, `sum: ${Number(binarie[index])} * (2 ** ${ZERO})}`, )
            result += Number(binarie[index]) * (2 ** ZERO)
            ZERO += 1;
        }
        setInputClear(result);
    }


    return(
        <div className='flex flex-col items-center space-around items-stretch'>
            <input 
                type="text"
                value={binarie}
                name="number"
                onChange={(e) => handleChange(e.target.value)}
                className="flex flex-col text-center justify-stretch"
            />
            {/* <p>Voce esta digitando: {binarie}</p> */}
            {inputClear === 0 ? null : <p className="justify-stretch">result: {inputClear}</p>}
            <button 
            type="button" 
            onClick={() => BinarieToDecimal()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
                Calculate
            </button>
        </div>
    )
}