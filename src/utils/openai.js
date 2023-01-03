import dotenv from 'dotenv';
dotenv.config();

import { Configuration, OpenAIApi } from 'openai';

const openai_config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(openai_config);

export default openai;
