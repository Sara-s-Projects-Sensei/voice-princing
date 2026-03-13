import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileText, BarChart3, ListChecks, Sparkles, Send } from "lucide-react";
import { CallRecord } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CallDetailsProps {
  call: CallRecord;
}

export function CallDetails({ call }: CallDetailsProps) {
  if (!call.analysis) return null;

  return (
    <div className="flex flex-col h-full bg-card/30 rounded-xl border border-white/5 overflow-hidden">
      <div className="p-6 border-b border-border bg-card/50">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold mb-1">{call.title}</h2>
            <p className="text-sm text-muted-foreground">{call.timestamp} • {call.duration} • {call.language}</p>
          </div>
          <Button variant="outline" size="sm" className="gap-2 border-primary/20 hover:border-primary/50 text-primary">
            <Sparkles className="w-4 h-4" /> Share Insight
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {call.analysis.keyTopics.map((topic, i) => (
            <Badge key={i} variant="secondary" className="bg-primary/5 text-primary border-primary/10">
              {topic}
            </Badge>
          ))}
        </div>
      </div>

      <Tabs defaultValue="transcript" className="flex-1 flex flex-col">
        <div className="px-6 border-b border-border">
          <TabsList className="h-12 bg-transparent gap-6 p-0">
            <TabsTrigger value="transcript" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none h-full px-0">
              <FileText className="w-4 h-4 mr-2" /> Transcript
            </TabsTrigger>
            <TabsTrigger value="analysis" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none h-full px-0">
              <BarChart3 className="w-4 h-4 mr-2" /> Summary
            </TabsTrigger>
            <TabsTrigger value="actions" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none h-full px-0">
              <ListChecks className="w-4 h-4 mr-2" /> Action Items
            </TabsTrigger>
            <TabsTrigger value="agent" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none h-full px-0">
              <Sparkles className="w-4 h-4 mr-2" /> AI Assistant
            </TabsTrigger>
          </TabsList>
        </div>

        <ScrollArea className="flex-1 p-6">
          <TabsContent value="transcript" className="m-0 focus-visible:ring-0">
            <div className="space-y-6">
              {call.transcript.split('\n\n').map((para, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 text-xs text-muted-foreground pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    00:{String(i * 15).padStart(2, '0')}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/80">{para}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analysis" className="m-0 focus-visible:ring-0">
            <div className="space-y-8">
              <section>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Executive Summary
                </h3>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-foreground/90 leading-relaxed italic">
                  "{call.analysis.summary}"
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Key Sentiments</h3>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '75%' }}></div>
                  </div>
                  <span className="text-sm font-medium capitalize text-primary">{call.analysis.sentiment}</span>
                </div>
              </section>
            </div>
          </TabsContent>

          <TabsContent value="actions" className="m-0 focus-visible:ring-0">
            <div className="space-y-4">
              {call.analysis.actionItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border group hover:border-primary/30 transition-colors">
                  <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full border border-primary text-[10px] text-primary font-bold group-hover:bg-primary group-hover:text-background transition-all">
                    {i + 1}
                  </div>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="agent" className="m-0 focus-visible:ring-0">
            <div className="space-y-6">
              <div className="bg-primary/5 rounded-xl border border-primary/20 p-5">
                <h4 className="text-sm font-bold text-primary flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4" /> Recommended Responses
                </h4>
                <div className="space-y-3">
                  {call.analysis.actionItems.slice(0, 3).map((item, i) => (
                    <div key={i} className="p-3 bg-card border border-border rounded-md text-xs cursor-pointer hover:bg-secondary transition-colors group relative">
                      <p className="pr-8">"Based on our discussion regarding {item.toLowerCase().split(' ').slice(0, 3).join(' ')}, I would suggest we move forward with..."</p>
                      <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 opacity-0 group-hover:opacity-100 text-primary">
                        <Send className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
}
