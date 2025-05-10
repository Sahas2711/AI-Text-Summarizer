// Load environment variables from .env file
require('dotenv').config();

// Import axios to make the API call
const axios = require('axios');

// This function sends the text to Hugging Face API and gets the summary
async function summarizeText(text) {
   // Prepare the data to be sent in the API request
   let data = JSON.stringify({
      "inputs": text,
      "parameters": {
         "max_length": 100,
         "min_length": 30
      }
   });
   console.log(data);  // Log the data to be sent
   // Prepare the configuration for the axios request
   let config = {
      method: 'post',
      url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + process.env.ACCESS_TOKEN // Use the token from the .env file
      },
      data: data
   };

   // Try making the request and return the summary or log any errors
   try {
      // Log the config to be used
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));  // Log the response datas
      return response.data[0].summary_text;  // Return the summary text
   } catch (err) {
      console.log(err);  // Log the error if any
   }
}

// Export summarizeText function to use it in other files
module.exports = summarizeText;
