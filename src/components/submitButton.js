import React from 'react'

const submitButton = (props) => {
    // here we destructure our props
    const {handleSubmit} = props

    return (
        <div>
            {/* this button triggers the handleSubmit function in App.js */}
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default submitButton
