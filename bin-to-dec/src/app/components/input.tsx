"use client"

import { useState } from "react"
import Formula from "./formula";



export default function Magic() {
    const [decimal, setDecimal] = useState<number>(0);
    const [binarie, setBinarie] = useState<string>("");
    const [stepByStep, setStepByStep] = useState<string>('');
    const [showFormula, setShowFormula] = useState<boolean>(false);


    const handleChange = (bit: string) => {
        console.log(bit);

        // this solves the bug in where if you tried to select everthing and backspace it, the app would send you the alert to type only 1 and 0, because void is not 1 or 0.

        if (bit === '' || bit === null) {
            setBinarie('')
            return;
        }

        // lastByte é a ultima char da string. ex : 10104, lastByte aqui é o ultimo caracter : 4.

        const lastByte = bit.length - 1
        if (bit[lastByte] !== "0" && bit[lastByte] !== "1") {
            alert('type only 1 or 0');
            return;
        }

            // this solves the bug where when the person try to delete the last binarie, it would type the previous binary twice
            // ex: 101010 <backspace pressed> became 101011 instead of 10101
        if (bit.length < binarie.length) {
            setBinarie(bit)
            return;

            // this solves the bug that if you tried to select the string and replace the element it would repeat the previously bug.
            // ex: 1 <select the byte> <press 0> became 11 instead of 0
        } else if ( bit.length === 1 ) {
            setBinarie(bit);
            return;
        }

        const binarieString = binarie + bit[lastByte]
        setBinarie(binarieString)
        return        
    }

    const BinarieToDecimal = () => {
        if (binarie === '') {
            alert('Type binaries before ask for the result')
            return
        }
        let result = 0;

        const lastByte = binarie.length - 1

        let ZERO = 0

        let stepByStepString: string = '';

        for (let index = lastByte; index >= 0; index -= 1) {
            // logica do for:
            // console.log(`binario : ${Number(binarie[index])}`, `sum: ${Number(binarie[index])} * (2 ** ${ZERO})}`, )
            stepByStepString += (`(2**${ZERO}) * ${Number(binarie[index])} `)
            result += Number(binarie[index]) * (2 ** ZERO)
            ZERO += 1;
        }

        setStepByStep(stepByStepString)
        setDecimal(result);
    }

    const clearProgram = () => {
        setBinarie('');
        setDecimal(0);
    }

    const showFormulaBool = () => {
        setShowFormula(!showFormula)
    }


    return(
        <div className="flex flex-col items-center space-y-4">        
            <div className='flex flex-row items-center space-around items-stretch justify-center'>
                <input 
                    type="text"
                    value={binarie}
                    name="number"
                    onChange={(e) => handleChange(e.target.value)}
                    className="flex flex-col text-center justify-stretch border border-gray-400 rounded shadow py-2 px-4 ml-8"
                />
                {/* <p>Voce esta digitando: {binarie}</p> */}
                <button 
                    type="button" 
                    onClick={() => BinarieToDecimal()}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    >
                        Calculate
                </button>
                <button 
                    type="button" 
                    onClick={() => clearProgram()}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    >
                        Clear
                </button>
            </div>
            {decimal === 0 ? 
                null 
                    :
                <p className="bg-white hover:bg-gray-100 text-3xl text-center rounded shadow">Decimal: {decimal}</p>
             }

                <button 
                    type="button" 
                    onClick={() => showFormulaBool()}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    >
                        ShowFormula
                </button>

            {showFormula === true ? 
                <Formula binary={binarie} formula={stepByStep} /> 
                    :
                null
             }

        </div>
    )
}