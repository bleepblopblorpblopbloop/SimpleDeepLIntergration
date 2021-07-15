import React from 'react'

const selectField = (props) => {
    const {languages} = props

    return (
        <div>
            <label htmlFor="languages">Choose a language: </label>
            <select id="languages">
                {languages.map((el) => {
                    return <option value="language">{el.language + " " + el.name}</option>
                })}
            </select> 
        </div>
    )
}

export default selectField
