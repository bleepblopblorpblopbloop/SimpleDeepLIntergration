import React, {useEffect, useState} from 'react'
import axios from "axios";
// import { retrieveLanguages, sendInput } from './deeplAxios';

// components
import TextArea from "./components/textArea"
import SelectField from "./components/selectField"
import SubmitButton from "./components/submitButton"

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

  // console.log("*** SELECTED LANGUAGE ***", selectedLanguage)
  // console.log("*** INPUT TEXT ***", textToTranslate)

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedLanguage && textToTranslate) {
      axios
        .post(`https://api-free.deepl.com/v2/translate?auth_key=${process.env.REACT_APP_DEEPL_KEY}&text=${textToTranslate}&target_lang=${selectedLanguage}&source_lang=en`)
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

  console.log("*** FINAL TRANSLATION ***", translation)

  useEffect(() => {
    // retrieveLanguages()
    // .then((res) => {
    //     const languages = res.data
    //     console.log("*** LANGUAGES ***", languages)
    //     setLanguages(languages)
    // })
    // .catch((err) => {
    //   console.log("Error is: ", err);
    // });
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
  }, []);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
