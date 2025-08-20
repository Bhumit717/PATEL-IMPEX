
import { useState, useRef, useEffect } from "react";

const OpeningAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set a timeout to skip animation if video doesn't load within 5 seconds
    const timeoutId = setTimeout(() => {
      if (!videoLoaded && !hasError) {
        console.log('Video loading timeout - skipping animation');
        onComplete();
      }
    }, 5000);

    const handleVideoEnd = () => {
      setVideoEnded(true);
      setTimeout(() => {
        onComplete();
      }, 300);
    };

    const handleVideoError = (e: Event) => {
      console.error('Video failed to load:', e);
      setHasError(true);
      clearTimeout(timeoutId);
      setTimeout(() => {
        onComplete();
      }, 1000);
    };

    const handleLoadedData = () => {
      console.log('Video loaded successfully');
      setVideoLoaded(true);
      clearTimeout(timeoutId);
      
      // Set playback rate to make video complete in exactly 3 seconds
      const targetDuration = 3;
      if (video.duration > targetDuration) {
        video.playbackRate = video.duration / targetDuration;
      }
    };

    const handleCanPlay = () => {
      // Try to play the video
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Video autoplay failed:', error);
          // Show a click-to-play message or skip animation
          setTimeout(() => {
            onComplete();
          }, 1000);
        });
      }
    };

    // Add event listeners
    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('error', handleVideoError);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);

    // Try to load the video
    video.load();

    return () => {
      clearTimeout(timeoutId);
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('error', handleVideoError);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [onComplete, videoLoaded, hasError]);

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
