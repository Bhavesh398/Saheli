import { X, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ReelsViewerProps {
    open: boolean;
    onClose: () => void;
}

const VIDEOS = [
    "/reels/reel1.mp4",
    "/reels/reel2.mp4",
    "/reels/reel3.mp4",
    "/reels/reel4.mp4",
    "/reels/reel5.mp4",
    "/reels/reel6.mp4",
];

export function ReelsViewer({ open, onClose }: ReelsViewerProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [open]);

    const handleScroll = () => {
        if (!containerRef.current) return;
        const { scrollTop, clientHeight } = containerRef.current;
        const index = Math.round(scrollTop / clientHeight);
        if (index !== activeIndex) {
            setActiveIndex(index);
        }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center animate-in fade-in duration-300">
            <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
                onClick={onClose}
            >
                <X className="w-6 h-6" />
            </Button>

            <div
                ref={containerRef}
                className="w-full h-full md:max-w-md bg-black overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
                onScroll={handleScroll}
                style={{ scrollBehavior: "smooth" }}
            >
                {VIDEOS.map((src, index) => (
                    <VideoSlide
                        key={index}
                        src={src}
                        isActive={index === activeIndex}
                    />
                ))}
            </div>
        </div>
    );
}

function VideoSlide({ src, isActive }: { src: string; isActive: boolean }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        if (isActive) {
            videoRef.current?.play().catch(() => {
                // Autoplay might be blocked
                setIsMuted(true);
                videoRef.current?.play();
            });
            setIsPlaying(true);
        } else {
            videoRef.current?.pause();
            videoRef.current!.currentTime = 0;
            setIsPlaying(false);
        }
    }, [isActive]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="relative w-full h-full snap-start shrink-0 flex items-center justify-center bg-zinc-900 border-b border-zinc-800/50">
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full object-cover md:object-contain"
                loop
                muted={isMuted}
                playsInline
                onClick={togglePlay}
            />

            {/* Controls Overlay */}
            <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ opacity: isPlaying ? 0 : 1 }}
            >
                <div className="bg-black/40 p-4 rounded-full backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white fill-white" />
                </div>
            </div>

            <div className="absolute bottom-20 right-4 flex flex-col gap-4 z-10">
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm"
                    onClick={toggleMute}
                >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </Button>
            </div>

            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none p-6 flex flex-col justify-end">
                <h3 className="text-white font-semibold text-lg drop-shadow-md">Legal Rights Awareness</h3>
                <p className="text-white/80 text-sm drop-shadow-md">Learn about your rights in simple steps.</p>
            </div>
        </div>
    );
}
