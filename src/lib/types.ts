export type Sentiment = 'positive' | 'negative' | 'neutral' | 'mixed';

export interface CallAnalysis {
  summary: string;
  keyTopics: string[];
  sentiment: Sentiment;
  actionItems: string[];
}

export interface CallRecord {
  id: string;
  title: string;
  timestamp: string;
  duration: string;
  language: string;
  transcript: string;
  analysis?: CallAnalysis;
  audioUrl?: string;
  status: 'processing' | 'completed' | 'failed';
}
