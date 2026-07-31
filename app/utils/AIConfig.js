import { ChatGoogle } from "@langchain/google";

export let model = new ChatGoogle({
  apiKey: process.env.Secret_Key,
  model: "gemini-3-flash-preview",
});
