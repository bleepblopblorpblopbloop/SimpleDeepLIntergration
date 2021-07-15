import React, {useEffect} from 'react'
import axios from "axios";

// components
import TextArea from "./components/textArea"
import SelectField from "./components/selectField"
import SubmitButton from "./components/submitButton"

// styling
import './App.css';

const App = () => {

  useEffect(() => {
    axios
      .post(`https://api-free.deepl.com/v2/languages?auth_key=${process.env.REACT_APP_DEEPL_KEY}`)
      .then((res) => {
        console.log("*** LANGUAGES ***", res);
      })
      .catch((err) => {
        console.log("Error is: ", err);
      });
  })

  return (
    <div className="App">
      <div>
        <h3>Simple DeepL API Integration</h3>
      </div>
      <div className="text-area">
        <TextArea></TextArea>
      </div>
      <div className="select-field">
        <SelectField></SelectField>
      </div>
      <div className="submit-button">
        <SubmitButton></SubmitButton>
      </div>
    </div>
  );
}

export default App;
