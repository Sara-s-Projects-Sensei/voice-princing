'use server';
/**
 * @fileOverview A Genkit flow for transcribing audio recordings into text.
 *
 * - transcribeCallRecording - A function that handles the audio transcription process.
 * - TranscribeCallRecordingInput - The input type for the transcribeCallRecording function.
 * - TranscribeCallRecordingOutput - The return type for the transcribeCallRecording function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const TranscribeCallRecordingInputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      "An audio recording, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type TranscribeCallRecordingInput = z.infer<
  typeof TranscribeCallRecordingInputSchema
>;

const TranscribeCallRecordingOutputSchema = z.object({
  transcription: z.string().describe('The transcribed text of the audio recording.').min(1),
});
export type TranscribeCallRecordingOutput = z.infer<
  typeof TranscribeCallRecordingOutputSchema
>;

export async function transcribeCallRecording(
  input: TranscribeCallRecordingInput
): Promise<TranscribeCallRecordingOutput> {
  return transcribeCallRecordingFlow(input);
}

const transcribeCallRecordingPrompt = ai.definePrompt({
  name: 'transcribeCallRecordingPrompt',
  input: { schema: TranscribeCallRecordingInputSchema },
  output: { schema: TranscribeCallRecordingOutputSchema },
  prompt: `Transcribe the following audio recording into text. Provide only the spoken text and nothing else. Output in JSON format.
Audio: {{media url=audioDataUri}}`,
});

const transcribeCallRecordingFlow = ai.defineFlow(
  {
    name: 'transcribeCallRecordingFlow',
    inputSchema: TranscribeCallRecordingInputSchema,
    outputSchema: TranscribeCallRecordingOutputSchema,
  },
  async (input) => {
    const { output } = await transcribeCallRecordingPrompt(input);
    if (!output || !output.transcription) {
      throw new Error('Failed to transcribe audio or transcription is empty.');
    }
    return output;
  }
);
