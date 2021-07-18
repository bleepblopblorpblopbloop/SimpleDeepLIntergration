// import axios from "axios";

// const retrieveLanguages = (setLanguages) => {
//     return axios
//       .post(`https://api-free.deepl.com/v2/languages?auth_key=${process.env.REACT_APP_DEEPL_KEY}`)
//       .then((res) => {
//           return res.data
//       })
//       .catch((err) => {
//         console.log("Error is: ", err);
//       });

// }

// const sendInput = (selectedLanguage, textToTranslate) => {
//     return axios
//             .post(`https://api-free.deepl.com/v2/translate?auth_key=${process.env.REACT_APP_DEEPL_KEY}&text=${textToTranslate}&target_lang=${selectedLanguage}&source_lang=en`)
//             .then((res) => {
      
//               console.log("*** TRANSLATION RESPONSE ***", res);
//             })
//             .catch((err) => {
//               console.log("Error is: ", err);
//             });
     
// }

// export { retrieveLanguages, sendInput };