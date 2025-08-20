
import { useState, useEffect } from "react";

const OpeningAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [animationEnded, setAnimationEnded] = useState(false);

  useEffect(() => {
    // Set animation duration to 5 seconds to allow time to view the Canva animation
    const timer = setTimeout(() => {
      setAnimationEnded(true);
      // Add a small delay before hiding to ensure smooth transition
      setTimeout(() => {
        onComplete();
      }, 300);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 ${
        animationEnded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#0c0d0f' }}
      role="dialog"
      aria-label="Company introduction animation"
      aria-modal="true"
    >
      <div className="w-full h-full max-w-4xl max-h-screen p-4">
        <div style={{
          position: 'relative', 
          width: '100%', 
          height: '0', 
          paddingTop: '56.25%',
          paddingBottom: '0', 
          boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', 
          overflow: 'hidden',
          borderRadius: '8px', 
          willChange: 'transform'
        }}>
          <iframe 
            loading="lazy" 
            style={{
              position: 'absolute', 
              width: '100%', 
              height: '100%', 
              top: '0', 
              left: '0', 
              border: 'none', 
              padding: '0',
              margin: '0'
            }}
            src="https://www.canva.com/design/DAGsXQRhYEQ/1KGY9nXFZOsHMKO9Muu-ng/watch?embed" 
            allowFullScreen
            allow="fullscreen"
            aria-label="Patel Impex company introduction animation"
          />
        </div>
      </div>
    </div>
  );
};

export default OpeningAnimation;
