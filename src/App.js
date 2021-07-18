import React, {useEffect, useState} from 'react'
import axios from "axios";

// components
import TextArea from "./components/textArea"
import SelectField from "./components/selectField"

// styling
import './App.css';

const App = () => {

  const [languages, setLanguages] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useState("")

  const handleChange = (event) => {
    event.persist();
    setSelectedLanguage(event.target.value)
  }

  useEffect(() => {
    axios
      .post(`https://api-free.deepl.com/v2/languages?auth_key=${process.env.REACT_APP_DEEPL_KEY}`)
      .then((res) => {
        const languages = res.data
        setLanguages(languages)

        console.log("*** LANGUAGES ***", languages);
      })
      .catch((err) => {
        console.log("Error is: ", err);
      });
  }, [])

  return (
    <div className="App">
      <div>
        <h3>Simple DeepL API Integration</h3>
      </div>
      <div className="select-field">
        <SelectField handleChange={handleChange} languages={languages}></SelectField>
      </div>
      <div className="text-area">
        <TextArea></TextArea>
      </div>
    </div>
  );
}

export default App;
