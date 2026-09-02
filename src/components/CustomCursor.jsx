import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouch(hasTouch);
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);
    if (isTouch) return;

    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let animationId = null;

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const render = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }

      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }

      animationId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    
    animationId = requestAnimationFrame(render);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer');
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, [isVisible, isTouch]);

  if (isTouch) return null;

  return (
    <>
      {/* Center cursor dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2.5 h-2.5 -ml-1.25 -mt-1.25 bg-[#8B5CF6] rounded-full pointer-events-none z-[9999] transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isClicked ? 'scale-75 bg-[#5D3EA8]' : 'scale-100'}`}
        style={{ willChange: 'transform' }}
      />
      {/* Outer magnetic trailing ring with purple aura */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-9 h-9 -ml-4.5 -mt-4.5 rounded-full border border-[#8B5CF6]/50 pointer-events-none z-[9998] transition-all duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovered 
            ? 'scale-160 bg-[#8B5CF6]/15 border-[#8B5CF6] shadow-[0_0_20px_rgba(139,92,246,0.45)]' 
            : isClicked
            ? 'scale-90 bg-[#8B5CF6]/25'
            : 'scale-100 shadow-xs'
        }`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
