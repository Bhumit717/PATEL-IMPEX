
import { useState, useRef, useEffect } from "react";

const OpeningAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setVideoEnded(true);
      // Add a small delay before hiding to ensure smooth transition
      setTimeout(() => {
        onComplete();
      }, 300);
    };

    const handleVideoError = (e: Event) => {
      console.error('Video failed to load:', e);
      // If video fails to load, skip to main content after a short delay
      setTimeout(() => {
        onComplete();
      }, 1500);
    };

    const handleLoadedData = () => {
      // Set playback rate to make video complete in exactly 3 seconds
      const targetDuration = 3; // 3 seconds
      if (video.duration > targetDuration) {
        video.playbackRate = video.duration / targetDuration;
      }
    };

    // Optimize video loading
    const handleCanPlayThrough = () => {
      // Video is ready to play through without buffering
      video.play().catch(error => {
        console.error('Video autoplay failed:', error);
        setTimeout(() => {
          onComplete();
        }, 1500);
      });
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('error', handleVideoError);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplaythrough', handleCanPlayThrough);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('error', handleVideoError);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 ${
        videoEnded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#0c0d0f' }}
      role="dialog"
      aria-label="Company introduction video"
      aria-modal="true"
    >
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        muted
        playsInline
        preload="metadata"
        style={{
          maxWidth: '100vw',
          maxHeight: '100vh'
        }}
        aria-label="Patel Impex company introduction video"
      >
        <source 
          src="https://files.catbox.moe/g5jvux.mp4" 
          type="video/mp4" 
        />
        <track 
          kind="captions" 
          src="/captions/intro-en.vtt" 
          srcLang="en" 
          label="English captions"
          default
        />
        <p>Your browser does not support the video tag. Please upgrade to a modern browser to view our introduction video.</p>
      </video>
    </div>
  );
};

export default OpeningAnimation;
