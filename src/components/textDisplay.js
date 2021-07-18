import React from 'react'

const TextDisplay = (props) => {
    // here we destructure our props
    const {translation} = props

    return (
        <div>
            <label htmlFor="translated-text"></label>
            {/* this text area is used to display the translation returned from DeepL */}
            <textarea name="translated" id="translated-text" defaultValue={translation} ></textarea>
        </div>
    )
}

export default TextDisplay
