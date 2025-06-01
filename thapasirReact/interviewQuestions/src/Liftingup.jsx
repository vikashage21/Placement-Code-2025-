import React, { useState } from 'react'

function Liftingup() {
    let [inputValue, setInputValue] = useState("")
    return (
        <div>
            <InputValueContainer inputValue={inputValue} setInputValue={setInputValue} />
            <DispalyComponent inputValue={inputValue} />
        </div>
    )
}

export default Liftingup



// creating two child and passing the props

export const InputValueContainer = ({ inputValue, setInputValue }) => {

    const handelInputValue = (e) => {
        setInputValue(e.target.value)

    }

    return (
        <>



            <input type="text" placeholder='Enter text here' onChange={handelInputValue} value={inputValue} />

        </>
    )
}

export const DispalyComponent = ({ inputValue }) => {
    return (

        <>
            <h1>
                displaying the text here :{inputValue}
            </h1>

        </>
    )

}
