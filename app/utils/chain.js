import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { model } from "./AIConfig";

let prompt = ChatPromptTemplate.fromTemplate(
  `you are a helpful assistant which can help a students  to choose their career according to their interest
  Question:
{question}
`,
);

const parser = new StringOutputParser();

export const chain = prompt.pipe(model).pipe(parser);
