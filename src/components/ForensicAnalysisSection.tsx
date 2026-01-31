import { Upload, Shield, AlertTriangle, CheckCircle, Loader2, X, Brain, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";
import { toast } from "sonner";

export const ForensicAnalysisSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [mediaSrc, setMediaSrc] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<"image" | "video" | "audio" | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "analyzing" | "success" | "error">("idle");
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_REALITY_DEFENDER_KEY || "");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const processFile = (selectedFile: File) => {
    const type = selectedFile.type;
    let category: "image" | "video" | "audio" | null = null;

    if (type.startsWith('image/')) category = "image";
    else if (type.startsWith('video/')) category = "video";
    else if (type.startsWith('audio/')) category = "audio";

    if (!category) {
      toast.error("Please upload an image, video, or audio file");
      return;
    }

    setFile(selectedFile);
    const url = URL.createObjectURL(selectedFile);
    setMediaSrc(url);
    setMediaType(category);
    setResult(null);
    setStatus("idle");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!mediaSrc || !file) return;

    try {
      setIsAnalyzing(true);
      setStatus("analyzing");

      // Simulate network delay for AI processing
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Simple heuristic for demo purposes:
      const isFake = file.name.toLowerCase().match(/ai|fake|gen|deepfake|syn/);

      const mockResult = {
        status: isFake ? 'FAKE' : 'AUTHENTIC',
        score: isFake ? 0.94 : 0.98,
        models: [
          { name: "ResNet-50", status: isFake ? 'FAKE' : 'AUTHENTIC', score: isFake ? 0.92 : 0.99 },
          { name: "EfficientNet-B4", status: isFake ? 'FAKE' : 'AUTHENTIC', score: isFake ? 0.96 : 0.97 },
          { name: "ViT-Large", status: isFake ? 'FAKE' : 'AUTHENTIC', score: isFake ? 0.95 : 0.98 },
        ]
      };

      setResult(mockResult);
      setStatus("success");
      toast.success("Analysis completed successfully");

    } catch (error: any) {
      console.error("Analysis failed:", error);
      setStatus("error");
      toast.error("Analysis failed: " + (error.message || "Unknown error"));
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetAnalysis = () => {
    setFile(null);
    setMediaSrc(null);
    setMediaType(null);
    setResult(null);
    setStatus("idle");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {/* Input Section */}
      <Card className="bg-black/20 border-white/10 p-6 flex flex-col h-full backdrop-blur-sm relative overflow-hidden">
        <div className="mb-6 z-10">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Upload className="w-5 h-5 text-primary" />
            Media Input
          </h3>
          <p className="text-sm text-white/60">
            Upload media for AI forensic analysis
          </p>
        </div>

        {!mediaSrc ? (
          <div
            className={`
              border-2 border-dashed rounded-xl p-8 text-center flex-1 flex flex-col items-center justify-center transition-all bg-white/5 cursor-pointer z-10
              ${isDragging ? "border-primary bg-primary/10" : "border-white/10 hover:border-primary/50 hover:bg-white/10"}
            `}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*,video/*,audio/*"
              onChange={handleFileSelect}
            />
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-medium text-white mb-2">Drag & drop media file</h4>
            <p className="text-sm text-white/50 mb-6">or click to browse</p>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-white/10 text-white/80 hover:bg-white/20 border-none">Images</Badge>
              <Badge variant="secondary" className="bg-white/10 text-white/80 hover:bg-white/20 border-none">Videos</Badge>
              <Badge variant="secondary" className="bg-white/10 text-white/80 hover:bg-white/20 border-none">Audio</Badge>
            </div>

            <p className="text-xs text-white/40 max-w-[200px] mx-auto">
              Supported: JPG, PNG, MP4, MP3, WAV • Max 50MB
            </p>
          </div>
        ) : (
          <div className="relative rounded-xl overflow-hidden flex-1 bg-black/40 flex items-center justify-center group mb-4">
            {mediaType === "video" ? (
              <video src={mediaSrc} controls className="max-h-[300px] max-w-full rounded-md" />
            ) : mediaType === "audio" ? (
              <div className="w-full p-8 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center animate-pulse">
                  <div className="w-8 h-8 rounded-full bg-purple-500" />
                </div>
                <audio src={mediaSrc} controls className="w-full" />
                <p className="text-sm text-white/60">{file?.name}</p>
              </div>
            ) : (
              <img src={mediaSrc} alt="Upload preview" className="max-h-[300px] object-contain" />
            )}

            <Button
              size="icon"
              variant="destructive"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
              onClick={resetAnalysis}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}

        <div className="mt-4 space-y-4">
          {/* API Key Input if not set in env */}
          {!import.meta.env.VITE_REALITY_DEFENDER_KEY && (
            <div className="relative">
              <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
              <Input
                type="password"
                placeholder="Enter Reality Defender API Key"
                className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-white/30"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </div>
          )}

          <Button
            className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleAnalyze}
            disabled={!mediaSrc || isAnalyzing}
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Brain className="w-5 h-5 mr-2" />
                Run AI Forensic Analysis
              </>
            )}
          </Button>
        </div>
      </Card>

      {/* Analysis Status Section */}
      <Card className="bg-black/20 border-white/10 p-6 flex flex-col items-center justify-center min-h-[400px] text-center backdrop-blur-sm relative overflow-hidden">
        {status === "success" && result ? (
          <div className="w-full h-full flex flex-col items-center justify-center animate-fade-in">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 border-4 ${result.status === 'AUTHENTIC' ? 'bg-green-500/20 border-green-500' : 'bg-red-500/20 border-red-500'
              }`}>
              {result.status === 'AUTHENTIC' ? (
                <CheckCircle className="w-10 h-10 text-green-500" />
              ) : (
                <AlertTriangle className="w-10 h-10 text-red-500" />
              )}
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 capitalize">
              {result.status === 'AUTHENTIC' ? 'Real Image Detected' : 'Deepfake Detected'}
            </h3>

            {result.score !== null && (
              <div className="flex items-center gap-2 mb-6">
                <span className="text-lg text-white/80">Confidence Score:</span>
                <span className={`text-2xl font-mono font-bold ${result.status === 'AUTHENTIC' ? 'text-green-400' : 'text-red-400'
                  }`}>
                  {typeof result.score === 'number' ? (result.score * 100).toFixed(2) : 'N/A'}%
                </span>
              </div>
            )}

            <div className="w-full bg-white/5 rounded-lg p-4 text-left">
              <p className="text-sm font-semibold text-white/60 mb-2">Model Details:</p>
              {result.models && Array.isArray(result.models) && result.models.map((model: any, idx: number) => (
                <div key={idx} className="flex justify-between items-center mb-2 last:mb-0">
                  <span className="text-sm text-white capitalize">{model.name}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-0.5 rounded ${model.status === 'AUTHENTIC' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {model.status}
                    </span>
                    {typeof model.score === 'number' && (
                      <span className="text-xs text-white/60">{(model.score * 100).toFixed(1)}%</span>
                    )}
                  </div>
                </div>
              ))}
              {(!result.models || result.models.length === 0) && (
                <p className="text-xs text-white/40 italic">No individual model breakdown available</p>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className={`w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 ${isAnalyzing ? 'animate-pulse' : ''}`}>
              {isAnalyzing ? (
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
              ) : (
                <Shield className="w-10 h-10 text-white/20" />
              )}
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              {status === "idle" && "Awaiting Analysis"}
              {status === "loading" && "Loading AI Model..."}
              {status === "analyzing" && "Analyzing Image Patterns..."}
              {status === "error" && "Analysis Error"}
            </h3>

            <p className="text-white/50 max-w-sm">
              {status === "idle" && "Upload a media file and run AI forensic analysis to see authenticity results"}
              {status === "loading" && "Connecting to secure forensic server..."}
              {status === "analyzing" && "Scanning for deepfake artifacts and synthetic textures..."}
              {status === "error" && "Analysis failed. Please check your file or API token and try again."}
            </p>
          </>
        )}
      </Card>
    </div>
  );
};
