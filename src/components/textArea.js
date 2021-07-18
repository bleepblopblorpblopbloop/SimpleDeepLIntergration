import React from 'react'

const TextArea = (props) => {
    // here we destructure our props
    const {handleInput} = props

    return (
        <div>
            <div>
            <label htmlFor="text-to-translate"></label>
            {/* this text area is for user inputted text that requires translation */}
            {/* the onChange triggers the handleInput function located in App.js */}
            <textarea onChange={handleInput} name="translate_this" id="text-to-translate"></textarea>
            </div>
        </div>
    )
}

export default TextArea
