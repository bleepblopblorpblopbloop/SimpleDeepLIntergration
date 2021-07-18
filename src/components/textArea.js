import React from 'react'

const TextArea = (props) => {
    const{handleInput} = props

    return (
        <div>
            <div>
            <textarea onChange={handleInput} name="translate_this" id="text-to-translate" cols="90" rows="20"></textarea>
            </div>
        </div>
    )
}

export default TextArea
