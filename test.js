const summarizeText = require('./summarize.js');

// Example usage
async function getSummary() {
  const textToSummarize = "This is a test text that needs to be summarized. It contains multiple sentences and should be long enough to test the summarization functionality.";
  const summary = await summarizeText(textToSummarize);
  console.log("Summary: ", summary);
}

getSummary();
