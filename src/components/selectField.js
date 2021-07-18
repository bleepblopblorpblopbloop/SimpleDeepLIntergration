import React from 'react'

const selectField = (props) => {
    const {languages, handleChange} = props

    return (
        <div>
            <label htmlFor="languages">Choose a language: </label>
            <select id="languages" onChange={handleChange}>
                {languages.map((el, i) => {
                    return <option  key={i} value={el.language} >{el.language + " " + el.name}</option>
                })}
            </select> 
        </div>
    )
}

export default selectField
