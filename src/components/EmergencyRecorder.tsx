import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Shield, Video, Camera as CameraIcon } from 'lucide-react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

// Declare Cordova types
declare global {
    interface Navigator {
        device?: {
            capture?: {
                captureVideo: (
                    success: (mediaFiles: any[]) => void,
                    error: (error: any) => void,
                    options?: { limit: number; duration?: number }
                ) => void;
            };
        };
    }
    interface Window {
        plugins?: {
            socialsharing?: {
                shareViaWhatsApp: (message: string, file: string | null, url: string | null, success: () => void, error: (err: any) => void) => void;
                shareViaSMS: (message: string, phone: string, success: () => void, error: (err: any) => void) => void;
            };
        };
    }
}

export const EmergencyRecorder = () => {
    const { toast } = useToast();
    const [isRecording, setIsRecording] = useState(false);
    const [showDebug, setShowDebug] = useState(false);
    const [recordingMode, setRecordingMode] = useState<'video' | 'photo'>('video');

    const sendEmergencyAlert = (type: 'video' | 'photo', filePath?: string) => {
        const contactData = localStorage.getItem('emergencyContact');
        if (!contactData) {
            console.log('⚠️ No emergency contact set');
            return;
        }

        const contact = JSON.parse(contactData);
        const message = `🚨 EMERGENCY ALERT from SakhiJi App!\n\nI need help! ${type === 'video' ? 'Video' : 'Photo'} evidence has been captured.\n\nPlease check on me immediately!`;

        console.log('📱 Sending alert to:', contact.name, contact.phone);

        // Try WhatsApp first, then SMS
        if (window.plugins?.socialsharing) {
            window.plugins.socialsharing.shareViaWhatsApp(
                message,
                filePath || null,
                null,
                () => {
                    console.log('✅ WhatsApp message sent');
                    toast({
                        title: "✅ Alert Sent",
                        description: `Emergency alert sent to ${contact.name}`,
                        className: "bg-green-600 text-white border-none"
                    });
                },
                (err) => {
                    console.log('WhatsApp failed, trying SMS:', err);
                    // Fallback to SMS
                    if (window.plugins?.socialsharing) {
                        window.plugins.socialsharing.shareViaSMS(
                            message,
                            contact.phone,
                            () => {
                                console.log('✅ SMS sent');
                                toast({
                                    title: "✅ Alert Sent via SMS",
                                    description: `Emergency SMS sent to ${contact.name}`,
                                    className: "bg-green-600 text-white border-none"
                                });
                            },
                            (smsErr) => {
                                console.error('❌ SMS failed:', smsErr);
                            }
                        );
                    }
                }
            );
        } else {
            console.log('⚠️ Social sharing plugin not available');
            toast({
                title: "Evidence Saved",
                description: "Please manually send to your emergency contact",
                className: "bg-yellow-600 text-white border-none"
            });
        }
    };

    const startVideoRecording = async () => {
        if (isRecording) {
            console.log('⏭️ Already recording');
            return;
        }

        console.log('🚨🚨🚨 EMERGENCY - STARTING VIDEO! 🚨🚨🚨');
        setIsRecording(true);

        if ('vibrate' in navigator) {
            navigator.vibrate([200, 100, 200, 100, 200]);
        }

        toast({
            title: "🚨 EMERGENCY RECORDING",
            description: "Opening camera to record video...",
            variant: "destructive",
            duration: 10000
        });

        try {
            console.log('🎥 Starting video recording with Cordova...');

            if (navigator.device?.capture?.captureVideo) {
                navigator.device.capture.captureVideo(
                    (mediaFiles) => {
                        console.log('✅ Video recorded:', mediaFiles);
                        const filePath = mediaFiles[0]?.fullPath || '';

                        sendEmergencyAlert('video', filePath);

                        toast({
                            title: "✅ Video Evidence Saved",
                            description: `Sending to emergency contact...`,
                            className: "bg-green-600 text-white border-none",
                            duration: 10000
                        });
                        setIsRecording(false);
                    },
                    (error) => {
                        console.error('❌ Video capture error:', error);
                        toast({
                            title: "❌ Video Failed",
                            description: "Switching to photo mode...",
                            variant: "destructive"
                        });
                        startPhotoCapture();
                        setIsRecording(false);
                    },
                    { limit: 1, duration: 60 }
                );
            } else {
                console.log('📸 Video not supported, using photo...');
                await startPhotoCapture();
                setIsRecording(false);
            }

        } catch (err: any) {
            console.error("❌ Video recording failed:", err);
            toast({
                title: "❌ Recording Failed",
                description: "Using photo mode instead",
                variant: "destructive"
            });
            await startPhotoCapture();
            setIsRecording(false);
        }
    };

    const startPhotoCapture = async () => {
        try {
            console.log('📸 Taking photo with Capacitor Camera...');

            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: CameraResultType.Uri,
                source: CameraSource.Camera,
                saveToGallery: true
            });

            console.log('✅ Photo captured:', image.webPath);

            sendEmergencyAlert('photo', image.webPath);

            toast({
                title: "✅ Photo Evidence Saved",
                description: `Sending to emergency contact...`,
                className: "bg-green-600 text-white border-none",
                duration: 10000
            });

        } catch (err: any) {
            console.error("❌ Photo failed:", err);
            toast({
                title: "❌ Camera Failed",
                description: err.message || String(err),
                variant: "destructive"
            });
        }
    };

    const startEmergencyRecording = async () => {
        if (recordingMode === 'video') {
            await startVideoRecording();
        } else {
            setIsRecording(true);
            await startPhotoCapture();
            setIsRecording(false);
        }
    };

    useEffect(() => {
        console.log('🛡️ EmergencyRecorder MOUNTED - Video Mode');
        console.log('Cordova capture available:', !!navigator.device?.capture);

        const handleVolumeEvent = (event: Event) => {
            console.log('🔊 Volume event received!', event);
            startEmergencyRecording();
        };

        window.addEventListener('volume-panic-trigger', handleVolumeEvent);
        console.log('✅ Volume listener registered');

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'e' || e.key === 'E') {
                console.log('⌨️ Emergency triggered via E key');
                startEmergencyRecording();
            }
            if (e.key === 'v' || e.key === 'V') {
                setRecordingMode(prev => prev === 'video' ? 'photo' : 'video');
                console.log('🔄 Switched mode to:', recordingMode === 'video' ? 'photo' : 'video');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        console.log('✅ Keyboard listener registered (E=trigger, V=toggle mode)');

        return () => {
            console.log('🔴 EmergencyRecorder UNMOUNTING');
            window.removeEventListener('volume-panic-trigger', handleVolumeEvent);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [recordingMode]);

    if (!showDebug) return null;

    return (
        <div className="fixed bottom-20 right-4 z-50 flex flex-col gap-2">
            <div className={`px-4 py-3 rounded-2xl backdrop-blur-xl border-2 shadow-2xl transition-all ${isRecording
                ? 'bg-red-500/30 border-red-500 animate-pulse shadow-red-500/50'
                : 'bg-green-500/20 border-green-500 shadow-green-500/30'
                }`}>
                <div className="flex items-center gap-3 text-white">
                    {isRecording ? (
                        <>
                            <Video className="w-5 h-5 animate-pulse" />
                            <div>
                                <div className="font-bold text-sm">RECORDING</div>
                                <div className="text-xs opacity-80">
                                    {recordingMode === 'video' ? 'Video capture...' : 'Taking photo...'}
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Shield className="w-5 h-5" />
                            <div>
                                <div className="font-bold text-sm">Guard Active</div>
                                <div className="text-xs opacity-80">
                                    Mode: {recordingMode === 'video' ? '🎥 Video' : '📸 Photo'}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className="flex gap-2">
                <Button
                    onClick={() => setRecordingMode('video')}
                    variant={recordingMode === 'video' ? 'default' : 'outline'}
                    size="sm"
                    className={recordingMode === 'video' ? 'bg-blue-600 text-white' : 'text-white border-white/30'}
                >
                    <Video className="w-4 h-4 mr-1" />
                    Video
                </Button>
                <Button
                    onClick={() => setRecordingMode('photo')}
                    variant={recordingMode === 'photo' ? 'default' : 'outline'}
                    size="sm"
                    className={recordingMode === 'photo' ? 'bg-blue-600 text-white' : 'text-white border-white/30'}
                >
                    <CameraIcon className="w-4 h-4 mr-1" />
                    Photo
                </Button>
            </div>

            <Button
                onClick={startEmergencyRecording}
                disabled={isRecording}
                className="bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                size="lg"
            >
                🚨 TEST EMERGENCY
            </Button>

            {!isRecording && (
                <div className="text-xs text-white/70 text-center bg-black/40 rounded-lg p-2 backdrop-blur">
                    Press E to trigger • V to toggle mode
                </div>
            )}

            <Button
                onClick={() => setShowDebug(false)}
                variant="ghost"
                size="sm"
                className="text-white/50 hover:text-white/80 text-xs"
            >
                Hide Debug
            </Button>
        </div>
    );
};
