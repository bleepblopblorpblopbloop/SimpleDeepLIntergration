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

  // here we are storing our state
  const [languages, setLanguages] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [textToTranslate, setTextToTranslate] = useState("")
  const [translation, setTranslation] = useState("")

  // this function takes the chosen target language and places it in state
  const handleChange = (event) => {
    event.persist();
    setSelectedLanguage(event.target.value)
  }

  // this function takes the text input by the user and places it in state
  const handleInput = (event) => {
    event.persist();
    setTextToTranslate(event.target.value);
  };

  // this function asynchronously submits the text to be translated to the DeepL api 
  const handleSubmit = (event) => {
    event.preventDefault();

    // here we quickly checked if the required data has been provided
    if (selectedLanguage && textToTranslate) {
      axios // the data is sent to DeepL
        .post(`https://api-free.deepl.com/v2/translate?auth_key=${process.env.REACT_APP_DEEPL_KEY}&text=${textToTranslate}&target_lang=${selectedLanguage}&source_lang=en&tag_handling=xml`)
        .then((res) => { // we wait for the response and use it to set state
          console.log("*** TRANSLATION ***", res)
          if (res.status === 200) {
            setTranslation(res.data.translations[0].text)
          }
        })
        .catch((err) => {
          console.log("Error is: ", err);
        });
    // if the correct data is not provided the user is promptred for mre info
    } else if (selectedLanguage && !textToTranslate) {
        setTranslation("Please input some text to translate.")
    // if the correct data is not provided the user is promptred for mre info
    } else if (!selectedLanguage && textToTranslate) {
        setTranslation("Please choose a language.")
    }
    
  };

  // this useEffect function immediately requests the available languages for translation upon loading the page
  useEffect(() => {
    axios // our request for available languages starts here
      .post(`https://api-free.deepl.com/v2/languages?auth_key=${process.env.REACT_APP_DEEPL_KEY}`)
      .then((res) => {  // here we receive the available languages and save them to state
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
