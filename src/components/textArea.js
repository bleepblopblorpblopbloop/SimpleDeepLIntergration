import React, {useState} from 'react'

// components
import SubmitButton from "./submitButton"

const TextArea = () => {

    const [textToTranslate, setTextToTranslate] = useState("")

    const handleChange = (event) => {
        event.persist();
        setTextToTranslate((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
      };

    return (
        <div>
            <div>
            <textarea onChange={handleChange} name="translate_this" id="text-to-translate" cols="90" rows="20"></textarea>
            </div>
            <div className="submit-button">
                <SubmitButton></SubmitButton>
            </div>
        </div>
    )
}

export default TextArea
