import React, {useEffect, useState} from 'react'
import axios from "axios";

// components
import TextArea from "./components/textArea"
import SelectField from "./components/selectField"
import SubmitButton from "./components/submitButton"
import TextDisplay from "./components/textDisplay"

// styling
import './App.css';

const App = () => {

  const [languages, setLanguages] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [textToTranslate, setTextToTranslate] = useState("")
  const [translation, setTranslation] = useState("")

  const handleChange = (event) => {
    event.persist();
    setSelectedLanguage(event.target.value)
  }

  const handleInput = (event) => {
    event.persist();
    setTextToTranslate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedLanguage && textToTranslate) {
      axios
        .post(`https://api-free.deepl.com/v2/translate?auth_key=${process.env.REACT_APP_DEEPL_KEY}&text=${textToTranslate}&target_lang=${selectedLanguage}&source_lang=en&tag_handling=xml`)
        .then((res) => {
          console.log("*** TRANSLATION ***", res)
          if (res.status === 200) {
            setTranslation(res.data.translations[0].text)
          }
        })
        .catch((err) => {
          console.log("Error is: ", err);
        });
    } else if (selectedLanguage && !textToTranslate) {
        setTranslation("Please input some text to translate.")
    } else if (!selectedLanguage && textToTranslate) {
        setTranslation("Please choose a language.")
    }
    
  };

  useEffect(() => {
    axios
      .post(`https://api-free.deepl.com/v2/languages?auth_key=${process.env.REACT_APP_DEEPL_KEY}`)
      .then((res) => {
        const languages = res.data
        setLanguages(languages)
      })
      .catch((err) => {
        console.log("Error is: ", err);
      });
  }, []);

  return (
    <div className="app">
      <div>
        <h3>Simple DeepL API Integration</h3>
      </div>
      <div className="select-field">
        <SelectField handleChange={handleChange} languages={languages}></SelectField>
      </div>
      <div className="text-area">
        <TextArea handleInput={handleInput}></TextArea>
      </div>
      <div className="submit-button">
        <SubmitButton handleSubmit={handleSubmit}></SubmitButton>
      </div>
      <div>
        <TextDisplay translation={translation}></TextDisplay>
      </div>
    </div>
  );
}

export default App;
