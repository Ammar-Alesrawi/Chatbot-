const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const app = express();
const { OpenAI } = require("openai");

app.use(express.static("public"));
app.use(express.json()); 

const openai = new OpenAI({
  apiKey: process.env.APIKEY,
});
app.post("/chat", async (req, res) => {
  try {
     const question = req.body.question;
     if (!question) {
       return res.status(400).json({ message: "No question provided" });
     }
    const resp = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    });    
    res.status(200).json({ message: resp.choices[0].message.content });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});
app.listen(5000, () => {
  console.log("Server is active");
});
