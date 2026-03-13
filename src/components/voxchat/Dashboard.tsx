"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CallCard } from "./CallCard";
import { CallDetails } from "./CallDetails";
import { Search, Plus, SlidersHorizontal, Mic, FileAudio, LayoutDashboard, History, Settings, LogOut, Info } from "lucide-react";
import { CallRecord } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import { transcribeCallRecording } from "@/ai/flows/transcribe-call-recording";
import { summarizeCallContent } from "@/ai/flows/summarize-call-content";
import { performSemanticSearch } from "@/ai/flows/perform-semantic-search";

const MOCK_CALLS: CallRecord[] = [
  {
    id: "1",
    title: "Project Alpha Kickoff",
    timestamp: "2 hours ago",
    duration: "45:12",
    language: "English",
    status: "completed",
    transcript: "Welcome everyone to the Project Alpha kickoff. We need to focus on the frontend architecture and the integration with Genkit. David will handle the backend components while Sarah leads the UI design. We should aim for a beta release by end of March.",
    analysis: {
      summary: "Kickoff meeting for Project Alpha focusing on technical stack and initial assignments.",
      keyTopics: ["Frontend", "Genkit", "Architecture"],
      sentiment: "positive",
      actionItems: ["David to prepare backend schema", "Sarah to finalize Figma designs by Friday", "Setup Genkit environment"]
    }
  },
  {
    id: "2",
    title: "Client Review - Q4 Roadmap",
    timestamp: "Yesterday",
    duration: "1:15:00",
    language: "French",
    status: "completed",
    transcript: "Merci à tous d'être ici. Aujourd'hui, nous passons en revue la feuille de route du quatrième trimestre. Le client demande des améliorations majeures sur la sécurité et la performance de l'IA. Nous devons allouer plus de ressources à l'équipe DevOps.",
    analysis: {
      summary: "Review of Q4 roadmap with a focus on security enhancements requested by the client.",
      keyTopics: ["Roadmap", "Security", "DevOps"],
      sentiment: "neutral",
      actionItems: ["Resource allocation for DevOps", "Security audit scheduling", "Client follow-up on performance KPIs"]
    }
  }
];

export function Dashboard() {
  const [calls, setCalls] = useState<CallRecord[]>(MOCK_CALLS);
  const [selectedCallId, setSelectedCallId] = useState<string | null>(calls[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const selectedCall = useMemo(() => 
    calls.find(c => c.id === selectedCallId), 
  [calls, selectedCallId]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setCalls(MOCK_CALLS);
      return;
    }

    try {
      const docs = MOCK_CALLS.map(c => c.transcript);
      const { results } = await performSemanticSearch({
        query: searchQuery,
        documents: docs
      });

      // Simple matching for the demo
      const relevantTranscripts = results.filter(r => r.score > 0.5).map(r => r.document);
      setCalls(MOCK_CALLS.filter(c => relevantTranscripts.includes(c.transcript)));
    } catch (error) {
      toast({
        title: "Search failed",
        description: "Could not perform semantic search at this time.",
        variant: "destructive"
      });
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const newId = (calls.length + 1).toString();
    const newCall: CallRecord = {
      id: newId,
      title: file.name.replace(/\.[^/.]+$/, ""),
      timestamp: "Just now",
      duration: "Calculating...",
      language: "Detecting...",
      status: "processing",
      transcript: ""
    };

    setCalls(prev => [newCall, ...prev]);

    try {
      // For demo purposes, we simulate the base64 conversion and call the AI flow
      // In a real app, you'd read the file as base64
      const mockBase64 = "data:audio/mp3;base64,mockdata"; 
      
      const { transcription } = await transcribeCallRecording({ audioDataUri: mockBase64 });
      const analysis = await summarizeCallContent({ transcript: transcription });

      setCalls(prev => prev.map(c => 
        c.id === newId 
          ? { ...c, status: 'completed', transcript: transcription, analysis, duration: "3:45", language: "English" } 
          : c
      ));
      setSelectedCallId(newId);
      
      toast({
        title: "Success",
        description: "Call processed successfully."
      });
    } catch (err) {
      setCalls(prev => prev.map(c => c.id === newId ? { ...c, status: 'failed' } : c));
      toast({
        title: "Processing failed",
        description: "Could not transcribe the audio file.",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card/20 flex flex-col">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center digital-glow">
            <Mic className="text-background w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">VoxChat AI</span>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-3 bg-primary/10 text-primary hover:bg-primary/20">
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
            <History className="w-4 h-4" /> History
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
            <Settings className="w-4 h-4" /> Settings
          </Button>
          <div className="pt-8 px-2">
            <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
              <h4 className="text-xs font-bold text-primary mb-1">Upgrade Pro</h4>
              <p className="text-[10px] text-muted-foreground mb-3">Unlimited AI transcriptions and advanced reasoning.</p>
              <Button size="sm" className="w-full text-[10px] h-7 bg-accent text-accent-foreground hover:bg-accent/80">Get Started</Button>
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-border space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
            <Info className="w-4 h-4" /> Help Center
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-red-400 hover:text-red-300 hover:bg-red-400/10">
            <LogOut className="w-4 h-4" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border flex items-center justify-between px-8 bg-background/50 backdrop-blur-sm z-10">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <form onSubmit={handleSearch} className="relative flex-1 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Semantic search across transcripts..." 
                className="pl-10 bg-card/40 border-border focus-visible:ring-primary/20 focus-visible:border-primary/50"
              />
            </form>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <SlidersHorizontal className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="file" 
                id="call-upload" 
                className="hidden" 
                accept="audio/*"
                onChange={handleFileUpload}
                disabled={isUploading}
              />
              <label htmlFor="call-upload">
                <Button asChild disabled={isUploading} className="bg-primary text-background hover:bg-primary/90 digital-glow rounded-full px-6 transition-all active:scale-95 cursor-pointer">
                  <span>
                    {isUploading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
                    Upload Call
                  </span>
                </Button>
              </label>
            </div>
            <div className="w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center cursor-pointer hover:bg-accent/10 transition-colors">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          {/* List Area */}
          <div className="w-1/3 min-w-[320px] max-w-[400px] border-r border-border flex flex-col">
            <div className="p-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Recent Activity</h3>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-none">{calls.length} Calls</Badge>
            </div>
            <ScrollArea className="flex-1 px-4 pb-4">
              <div className="space-y-3">
                {calls.map((call) => (
                  <CallCard 
                    key={call.id} 
                    call={call} 
                    isSelected={selectedCallId === call.id}
                    onClick={() => setSelectedCallId(call.id)} 
                  />
                ))}
                {calls.length === 0 && (
                  <div className="text-center py-20 opacity-50 flex flex-col items-center">
                    <FileAudio className="w-12 h-12 mb-4 text-muted-foreground" />
                    <p className="text-sm">No conversations found</p>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>

          {/* Details Area */}
          <div className="flex-1 bg-background p-6 overflow-hidden">
            {selectedCall ? (
              <CallDetails call={selectedCall} />
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground flex-col gap-4 opacity-30">
                <div className="w-24 h-24 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center">
                  <Mic className="w-10 h-10" />
                </div>
                <p>Select a call to see AI analysis</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function Loader2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
