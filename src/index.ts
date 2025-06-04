// index.ts

import OpenAI from "openai";
import 'dotenv/config';

async function main() {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // set this in your environment
  });

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: "Hello, OpenAI!" }]
  });

  console.log(response.choices[0].message.content);
}

main().catch(console.error);