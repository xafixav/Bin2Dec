"use client"

interface Results {
    binary: string,
    formula: string 
}

export default function Formula({formula}: Results) {

    return(
        <div className="flex flex-col items-center space-y-4">

            <p className="text-3xl text-center">Formula:</p>
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211220191513/binary.PNG" />   
            
            <p className="text-ellipsis max-w-md">
                {formula}
            </p>     
        </div>
    )
}