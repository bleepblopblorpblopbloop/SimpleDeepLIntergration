import React from 'react'

const selectField = () => {


    return (
        <div>
            <label htmlFor="languages">Choose a language:</label>
            <select defaultValue="Audi" id="languages">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="vw">VW</option>
                <option value="audi">Audi</option>
            </select> 
        </div>
    )
}

export default selectField
