// script.js
// This script handles the summarization logic in the browser
  require('dotenv').config();
const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit-button");
const summarizedTextArea = document.getElementById("summary");

submitButton.disabled = true;

textArea.addEventListener("input", verifyTextLength);
submitButton.addEventListener("click", handleSubmit);

function verifyTextLength(e) {
 // The e.target property gives us the HTML element that triggered the event, which in this case is the textarea. We save this to a variable called 'textarea'
  const textarea = e.target;

  // Verify the TextArea value.
  if (textarea.value.length > 20 && textarea.value.length < 100000) {
    // Enable the button when text area has value.
    submitButton.disabled = false;
  } else {
    // Disable the button when text area is empty.
    submitButton.disabled = true;
  }
}

// Function to summarize text using the Hugging Face API
async function summarizeText(text) {
  // Prepare the data to be sent in the API request
  const data = JSON.stringify({
    inputs: text,
    parameters: {
      max_length: 100,
      min_length: 30
    }
  });

const accessToken = process.env.HUGGINGFACE_TOKEN;

// Use `accessToken` in your API call here

  // Prepare the configuration for the fetch request
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
'Authorization': 'Bearer '+ accessToken, // Use the token from your environment variable
       // Replace with your actual API token
    },
    body: data
  };

  try {
    // Make the request to the Hugging Face API
    const response = await fetch('https://api-inference.huggingface.co/models/facebook/bart-large-cnn', config);
    const result = await response.json();
    console.log(result); // Log the response data
    return result[0].summary_text; // Return the summary text
  } catch (err) {
    console.error(err); // Log the error if any
    return 'Error summarizing text.';
  }
}

// Function to handle the submit button click
async function handleSubmit() {
  const textToSummarize = document.getElementById('text_to_summarize').value;
  const summaryElement = document.getElementById('summary');

  if (textToSummarize.length < 200) {
    summaryElement.value = 'Text must be at least 200 characters long.';
    return;
  }

  summaryElement.value = 'Summarizing...';
  const summary = await summarizeText(textToSummarize);
  summaryElement.value = summary;
}