# Chatbot using OpenAI GPT-3.5-turbo

This is a simple Node.js application that uses OpenAI's GPT-3.5-turbo model to create a chatbot.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/Ammar-Alesrawi/Chatbot-.git

2.
Navigate to the project directory:

cd Chatbot-

3.
Install the required dependencies:

npm install

Configuration
1.
Create a .env file in the root of your project directory.
2.
Add your OpenAI API key to the .env file:

APIKEY=your-openai-api-key

Usage
1.
Start the server:

npm start

2.
The server will start on port 5000. You can test the chatbot by sending a POST request to http://localhost:5000 with a JSON body containing the user's question:

{
  "question": "What is the capital of France?"
}

The server will respond with a JSON object containing the chatbot's response:
{
  "message": "The capital of France is Paris."
}

Limitations
Please note that using the OpenAI GPT-3.5-turbo model with a free API key may have limitations. If you encounter the following error:
429 You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.

It means that you have exceeded your current quota for the free tier. To overcome this limitation, you can:

Upgrade to a paid plan: OpenAI offers various paid plans that provide higher quotas and better performance. You can find the available plans and pricing on their website: https://openai.com/pricing/.
```
