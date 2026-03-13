import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-call-content.ts';
import '@/ai/flows/transcribe-call-recording.ts';
import '@/ai/flows/perform-semantic-search.ts';