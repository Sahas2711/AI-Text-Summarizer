# AI-Text-Summarizer

This repository contains a simple **AI-powered Text Summarization Tool** that allows users to input a large body of text and receive a concise summary, all powered by Hugging Face's pre-trained models.

## Features

- **Text Summarization**: Summarizes long text into a concise version while retaining the main ideas.
- **AI-powered**: Utilizes Hugging Face's state-of-the-art pre-trained models for summarization.
- **Frontend Interface**: Simple and user-friendly interface built with HTML, CSS, and JavaScript.
- **No Backend Server Required**: The summarization is done directly in the browser using Hugging Face's hosted API.

## Technologies Used

- **HTML**: For structuring the webpage.
- **CSS**: For styling the webpage.
- **JavaScript**: For handling user interactions and integrating with Hugging Face's API.
- **Hugging Face API**: Provides pre-trained models for text summarization (no Python backend is required).

## See Live
https://summarytextapp.netlify.app/


## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sahas2711/AI-Text-Summarizer.git
   cd AI-Text-Summarizer
Install dependencies:
Since this project runs entirely in the browser, no backend or server setup is needed. Just open the index.html file in your preferred browser.

Usage
Open the index.html file in your browser.

Enter a large block of text into the provided input field.

Press the Summarize button.

The tool will generate a concise summary of the input text using the Hugging Face model and display it below.

How It Works
The user enters the text to be summarized in the input field.

Upon submitting the form, the summarize.js file sends the text to Hugging Face's API.

The API processes the text and returns a summary.

The summary is then displayed to the user in the browser.

Hugging Face API Integration
The summarization is powered by Hugging Face's facebook/bart-large-cnn model, which is specifically designed for summarization tasks. The API key is required for authentication, which can be obtained from Hugging Face.

API Key

To use Hugging Face's API, you need to replace the placeholder API_KEY in the summarize.js file with your personal Hugging Face API key.

Go to your Hugging Face account settings to generate a token.

Replace 'your_hugging_face_api_key' with your actual API key in the summarize.js file.

Contributing
We welcome contributions! If you'd like to contribute to this project:

Fork the repository.

Create a new branch (git checkout -b feature-branch).

Make your changes.

Commit your changes (git commit -am 'Add new feature').

Push to the branch (git push origin feature-branch).

Create a new pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Hugging Face: For providing pre-trained models for text summarization.

OpenAI: For the inspiration and tools to help build AI-driven applications.

Browser-side JS: For enabling easy integration without requiring a backend server.
