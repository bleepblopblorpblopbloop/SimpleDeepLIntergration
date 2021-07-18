import React from 'react'

const submitButton = (props) => {
    const {handleSubmit} = props

    return (
        <div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default submitButton
