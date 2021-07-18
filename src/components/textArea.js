import React from 'react'

// components
import SubmitButton from "./submitButton"

const TextArea = (props) => {
    const{handleInput} = props

    return (
        <div>
            <div>
            <textarea onChange={handleInput} name="translate_this" id="text-to-translate" cols="90" rows="20"></textarea>
            </div>
            <div className="submit-button">
                <SubmitButton></SubmitButton>
            </div>
        </div>
    )
}

export default TextArea
