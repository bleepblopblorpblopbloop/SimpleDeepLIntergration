import React from 'react'

const selectField = (props) => {
    // here we destructure our props
    const {languages, handleChange} = props

    return (
        <div>
            <label htmlFor="languages">Choose a language: </label>
            {/* the onChange triggers the handleChange function in App.js */}
            <select id="languages" onChange={handleChange}>
                {/* the languages available for translation are mapped here for display in the dropdown menu */}
                {languages.map((el, i) => {
                    return <option  key={i} value={el.language} >{el.language + " " + el.name}</option>
                })}
            </select> 
        </div>
    )
}

export default selectField
