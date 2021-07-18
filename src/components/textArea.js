import React from 'react'

const TextArea = (props) => {
    const{handleInput} = props

    return (
        <div>
            <div>
            <label htmlFor="text-to-translate"></label>
            <textarea onChange={handleInput} name="translate_this" id="text-to-translate"></textarea>
            </div>
        </div>
    )
}

export default TextArea
