import { useEffect, useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function EyeBackground() {
  const [isMouseOnScreen, setIsMouseOnScreen] = useState(true);
  const [isWinking, setIsWinking] = useState(false);
  const mouseX = useRef(window.innerWidth / 2);
  const mouseY = useRef(window.innerHeight / 2);

  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  const leftPupilX = useSpring(0, { stiffness: 120, damping: 20 });
  const leftPupilY = useSpring(0, { stiffness: 120, damping: 20 });
  const rightPupilX = useSpring(0, { stiffness: 120, damping: 20 });
  const rightPupilY = useSpring(0, { stiffness: 120, damping: 20 });

  const leftHighlightX = useSpring(0, { stiffness: 80, damping: 20 });
  const leftHighlightY = useSpring(0, { stiffness: 80, damping: 20 });
  const rightHighlightX = useSpring(0, { stiffness: 80, damping: 20 });
  const rightHighlightY = useSpring(0, { stiffness: 80, damping: 20 });

  // Track mouse position and compute pupil offsets
  useEffect(() => {
    const maxOffset = 25;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseOnScreen) setIsMouseOnScreen(true);
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      if (leftEyeRef.current) {
        const rect = leftEyeRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const scale = Math.min(dist, maxOffset) / dist;
        leftPupilX.set(dx * scale);
        leftPupilY.set(dy * scale);
        leftHighlightX.set(dx * scale * 0.3);
        leftHighlightY.set(dy * scale * 0.3);
      }

      if (rightEyeRef.current) {
        const rect = rightEyeRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const scale = Math.min(dist, maxOffset) / dist;
        rightPupilX.set(dx * scale);
        rightPupilY.set(dy * scale);
        rightHighlightX.set(dx * scale * 0.3);
        rightHighlightY.set(dy * scale * 0.3);
      }
    };

    const handleMouseLeave = () => {
      setIsMouseOnScreen(false);
      leftPupilX.set(0);
      leftPupilY.set(0);
      rightPupilX.set(0);
      rightPupilY.set(0);
      leftHighlightX.set(0);
      leftHighlightY.set(0);
      rightHighlightX.set(0);
      rightHighlightY.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Use named handler for cleanup
    function handleDocumentMouseOut(e: MouseEvent) {
      if (!e.relatedTarget) {
        handleMouseLeave();
      }
    }
    function handleWindowBlur() {
      handleMouseLeave();
    }
    document.addEventListener('mouseout', handleDocumentMouseOut);
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseout', handleDocumentMouseOut);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, [leftPupilX, leftPupilY, rightPupilX, rightPupilY,
      leftHighlightX, leftHighlightY, rightHighlightX, rightHighlightY]);

  // Idle look-around when mouse is off-page
  useEffect(() => {
    if (isMouseOnScreen) return;

    const maxOffset = 25;
    const interval = setInterval(() => {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * maxOffset;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      leftPupilX.set(x);
      leftPupilY.set(y);
      rightPupilX.set(x);
      rightPupilY.set(y);
      leftHighlightX.set(x * 0.3);
      leftHighlightY.set(y * 0.3);
      rightHighlightX.set(x * 0.3);
      rightHighlightY.set(y * 0.3);
    }, 1200);

    return () => clearInterval(interval);
  }, [
    isMouseOnScreen,
    leftPupilX,
    leftPupilY,
    rightPupilX,
    rightPupilY,
    leftHighlightX,
    leftHighlightY,
    rightHighlightX,
    rightHighlightY,
  ]);

  // Wink every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsWinking(true);
      setTimeout(() => setIsWinking(false), 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const eyeHeight = !isWinking
    ? 'min(12vw, 150px)'
    : '4px';

  const eyeStyle = {
    height: eyeHeight,
    transition: 'height 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const pupilVisible = !isWinking;

  // Slit style for closed eyes
  const slitStyle = {
    width: '100%',
    height: '4px',
    background: '#dbeafe',
    borderRadius: '2px',
    margin: 0,
    boxShadow: '0 0 10px 2px rgba(96, 165, 250, 0.45)',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)',
  };

  return (
    <div
      className="absolute inset-x-0 top-0 h-[80vh] flex items-start justify-center pt-72"
      style={{zIndex: 0, pointerEvents: 'none', opacity: 0.78}}
    >
      <div className="flex items-center gap-40">
        {/* Left eye */}
        <div
          ref={leftEyeRef}
          className="relative rounded-full overflow-hidden border border-white/25 bg-blue-100/70"
          style={{ width: 'min(38vw, 460px)', ...eyeStyle }}
        >
          {pupilVisible ? (
            <motion.div
              className="absolute rounded-full bg-blue-900"
              style={{
                width: 'min(8vw, 100px)',
                height: 'min(8vw, 100px)',
                top: '50%',
                left: '50%',
                translateX: '-50%',
                translateY: '-50%',
                x: leftPupilX,
                y: leftPupilY,
              }}
            >
              <motion.div
                className="absolute rounded-full bg-white"
                style={{
                  width: '35%',
                  height: '35%',
                  top: '15%',
                  left: '15%',
                  x: leftHighlightX,
                  y: leftHighlightY,
                }}
              />
            </motion.div>
          ) : (
            <div style={{width:'100%',height:'100%',position:'relative'}}>
              <div style={slitStyle} />
            </div>
          )}
        </div>

        {/* Right eye */}
        <div
          ref={rightEyeRef}
          className="relative rounded-full overflow-hidden border border-white/25 bg-blue-100/70"
          style={{ width: 'min(38vw, 460px)', ...eyeStyle }}
        >
          {pupilVisible ? (
            <motion.div
              className="absolute rounded-full bg-blue-900"
              style={{
                width: 'min(8vw, 100px)',
                height: 'min(8vw, 100px)',
                top: '50%',
                left: '50%',
                translateX: '-50%',
                translateY: '-50%',
                x: rightPupilX,
                y: rightPupilY,
              }}
            >
              <motion.div
                className="absolute rounded-full bg-white"
                style={{
                  width: '35%',
                  height: '35%',
                  top: '15%',
                  left: '15%',
                  x: rightHighlightX,
                  y: rightHighlightY,
                }}
              />
            </motion.div>
          ) : (
            <div style={{width:'100%',height:'100%',position:'relative'}}>
              <div style={slitStyle} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
