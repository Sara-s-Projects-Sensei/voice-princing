'use server';
/**
 * @fileOverview A Genkit flow for analyzing call transcripts to generate summaries, extract key topics, identify sentiment, and list action items.
 *
 * - summarizeCallContent - A function that handles the call content analysis process.
 * - SummarizeCallContentInput - The input type for the summarizeCallContent function.
 * - SummarizeCallContentOutput - The return type for the summarizeCallContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCallContentInputSchema = z.object({
  transcript: z.string().describe('The full text of the call transcript.'),
});
export type SummarizeCallContentInput = z.infer<
  typeof SummarizeCallContentInputSchema
>;

const SummarizeCallContentOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the conversation.'),
  keyTopics: z
    .array(z.string())
    .describe('A list of key topics discussed in the call.'),
  sentiment: z
    .enum(['positive', 'negative', 'neutral', 'mixed'])
    .describe('The overall sentiment of the conversation.'),
  actionItems: z
    .array(z.string())
    .describe('A list of action items identified from the call.'),
});
export type SummarizeCallContentOutput = z.infer<
  typeof SummarizeCallContentOutputSchema
>;

export async function summarizeCallContent(
  input: SummarizeCallContentInput
): Promise<SummarizeCallContentOutput> {
  return summarizeCallContentFlow(input);
}

const summarizeCallContentPrompt = ai.definePrompt({
  name: 'summarizeCallContentPrompt',
  input: {schema: SummarizeCallContentInputSchema},
  output: {schema: SummarizeCallContentOutputSchema},
  prompt: `You are an expert AI assistant specializing in call analysis.

Given the following call transcript, your task is to:
1. Generate a concise summary of the conversation.
2. Extract the main key topics discussed.
3. Determine the overall sentiment of the call (positive, negative, neutral, or mixed).
4. Identify any clear action items or next steps mentioned.

Transcript:
{{{transcript}}}`,
});

const summarizeCallContentFlow = ai.defineFlow(
  {
    name: 'summarizeCallContentFlow',
    inputSchema: SummarizeCallContentInputSchema,
    outputSchema: SummarizeCallContentOutputSchema,
  },
  async (input) => {
    const {output} = await summarizeCallContentPrompt(input);
    return output!;
  }
);
