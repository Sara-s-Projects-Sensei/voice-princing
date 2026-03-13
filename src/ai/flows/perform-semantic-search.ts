'use server';
/**
 * @fileOverview A Genkit flow for performing semantic search across text documents.
 *
 * - performSemanticSearch - A function that handles the semantic search process.
 * - PerformSemanticSearchInput - The input type for the performSemanticSearch function.
 * - PerformSemanticSearchOutput - The return type for the performSemanticSearch function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

// Define input schema for the semantic search flow.
const PerformSemanticSearchInputSchema = z.object({
  query: z.string().describe('The natural language search query.'),
  documents: z.array(z.string()).describe('An array of text documents (transcripts or summaries) to search through.'),
});
export type PerformSemanticSearchInput = z.infer<typeof PerformSemanticSearchInputSchema>;

// Define output schema for the semantic search flow.
const PerformSemanticSearchOutputSchema = z.object({
  results: z.array(
    z.object({
      document: z.string().describe('The content of the semantically relevant document.'),
      score: z.number().describe('The relevance score of the document to the query (higher is more relevant).'),
    })
  ).describe('An array of documents found to be semantically relevant to the query, sorted by relevance score.'),
});
export type PerformSemanticSearchOutput = z.infer<typeof PerformSemanticSearchOutputSchema>;

/**
 * Calculates the cosine similarity between two given vectors.
 * @param vec1 The first vector.
 * @param vec2 The second vector.
 * @returns The cosine similarity between the two vectors, or 0 if magnitudes are zero.
 */
function cosineSimilarity(vec1: number[], vec2: number[]): number {
  if (vec1.length !== vec2.length) {
    throw new Error('Vectors must be of the same dimension');
  }
  let dotProduct = 0;
  let magnitude1 = 0;
  let magnitude2 = 0;
  for (let i = 0; i < vec1.length; i++) {
    dotProduct += vec1[i] * vec2[i];
    magnitude1 += vec1[i] * vec1[i];
    magnitude2 += vec2[i] * vec2[i];
  }
  magnitude1 = Math.sqrt(magnitude1);
  magnitude2 = Math.sqrt(magnitude2);
  if (magnitude1 === 0 || magnitude2 === 0) {
    return 0; // Avoid division by zero
  }
  return dotProduct / (magnitude1 * magnitude2);
}

// Define the Genkit flow for semantic search.
const performSemanticSearchFlow = ai.defineFlow(
  {
    name: 'performSemanticSearchFlow',
    inputSchema: PerformSemanticSearchInputSchema,
    outputSchema: PerformSemanticSearchOutputSchema,
  },
  async (input) => {
    const { query, documents } = input;

    if (!documents || documents.length === 0) {
      return { results: [] };
    }

    // Get embedding for the query using the text-embedding-004 model.
    const queryEmbeddingResponse = await ai.embed({
      model: googleAI.model('text-embedding-004'),
      text: query,
    });
    const queryEmbedding = queryEmbeddingResponse.embedding;

    if (!queryEmbedding) {
      throw new Error('Failed to generate embedding for the query.');
    }

    // Get embeddings for all provided documents in parallel.
    const documentEmbeddingsPromises = documents.map(async (doc) => {
      const docEmbeddingResponse = await ai.embed({
        model: googleAI.model('text-embedding-004'),
        text: doc,
      });
      const embedding = docEmbeddingResponse.embedding;
      if (!embedding) {
        throw new Error(`Failed to generate embedding for document: ${doc}`);
      }
      return { document: doc, embedding };
    });

    const documentEmbeddings = await Promise.all(documentEmbeddingsPromises);

    // Calculate cosine similarity scores between the query and each document.
    const resultsWithScores = documentEmbeddings.map(({ document, embedding }) => {
      const score = cosineSimilarity(queryEmbedding, embedding);
      return { document, score };
    });

    // Sort the documents by relevance score in descending order.
    resultsWithScores.sort((a, b) => b.score - a.score);

    return { results: resultsWithScores };
  }
);

/**
 * Initiates a semantic search across a collection of text documents using a natural language query.
 * @param input The search query and the documents to search through.
 * @returns A promise that resolves to an object containing the semantically relevant results.
 */
export async function performSemanticSearch(
  input: PerformSemanticSearchInput
): Promise<PerformSemanticSearchOutput> {
  return performSemanticSearchFlow(input);
}
