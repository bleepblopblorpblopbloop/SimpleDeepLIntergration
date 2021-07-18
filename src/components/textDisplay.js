import React from 'react'

const TextDisplay = (props) => {
    const {translation} = props

    return (
        <div>
            <label htmlFor="translated-text"></label>
            <textarea name="translated" id="translated-text" defaultValue={translation} ></textarea>
        </div>
    )
}

export default TextDisplay
