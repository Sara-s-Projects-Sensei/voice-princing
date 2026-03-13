import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MessageSquare, Tag, CheckCircle2, Loader2 } from "lucide-react";
import { CallRecord } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CallCardProps {
  call: CallRecord;
  onClick: () => void;
  isSelected?: boolean;
}

export function CallCard({ call, onClick, isSelected }: CallCardProps) {
  const sentimentColor = {
    positive: "bg-green-500/10 text-green-400",
    negative: "bg-red-500/10 text-red-400",
    neutral: "bg-blue-500/10 text-blue-400",
    mixed: "bg-orange-500/10 text-orange-400",
  }[call.analysis?.sentiment || 'neutral'];

  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all duration-300 hover:border-primary/50 bg-card/40 border-border group",
        isSelected && "border-primary ring-1 ring-primary/20 bg-card/60"
      )}
      onClick={onClick}
    >
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-sm font-semibold truncate max-w-[180px]">
            {call.title}
          </CardTitle>
          {call.status === 'processing' ? (
            <Loader2 className="w-3 h-3 animate-spin text-primary" />
          ) : (
            <CheckCircle2 className="w-3 h-3 text-primary" />
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-3">
        <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {call.duration}</span>
          <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {call.language}</span>
        </div>
        
        {call.analysis && (
          <div className="flex flex-wrap gap-1">
            {call.analysis.keyTopics.slice(0, 2).map((topic, i) => (
              <Badge key={i} variant="secondary" className="text-[9px] py-0 px-1.5 bg-secondary/50">
                <Tag className="w-2 h-2 mr-1" /> {topic}
              </Badge>
            ))}
            <Badge className={cn("text-[9px] py-0 px-1.5 border-none", sentimentColor)}>
              {call.analysis.sentiment}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
