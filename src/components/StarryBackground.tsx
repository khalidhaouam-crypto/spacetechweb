import React, { useEffect, useRef } from 'react';

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    setSize();
    window.addEventListener('resize', setSize);

    // Star properties
    const stars: Star[] = [];
    const numStars = 400;
    const centerX = width / 2;
    const centerY = height / 2;

    class Star {
      angle: number;
      radius: number;
      speed: number;
      size: number;
      color: string;

      constructor() {
        this.angle = Math.random() * Math.PI * 2;
        this.radius = Math.random() * (Math.max(width, height) / 2); // Random distance from center
        this.speed = Math.random() * 0.5 + 0.2; // Speed of moving outward
        this.size = Math.random() * 2;
        // Check for dark mode preference to set star color, or default to a mix
        const isDark = document.documentElement.classList.contains('dark');
        const baseColor = isDark ? '255, 255, 255' : '142, 68, 173'; // White in dark mode, Purple in light
        this.color = `rgba(${baseColor}, ${Math.random()})`;
      }

      update() {
        // Move outward
        this.radius += this.speed * (this.radius / 100 + 1); // Accelerate as it goes out
        
        // Rotate (Spiral effect)
        this.angle += 0.002; 

        // Reset if out of bounds
        const maxDist = Math.max(width, height) / 1.5;
        if (this.radius > maxDist) {
          this.radius = Math.random() * 10;
          this.angle = Math.random() * Math.PI * 2;
          this.speed = Math.random() * 0.5 + 0.2;
        }
      }

      draw() {
        const currentCenterX = window.innerWidth / 2;
        const currentCenterY = window.innerHeight / 2;

        const x = currentCenterX + Math.cos(this.angle) * this.radius;
        const y = currentCenterY + Math.sin(this.angle) * this.radius;

        // Depth effect: Size increases with radius
        const size = this.size * (this.radius / 300);
        const opacity = Math.min(1, this.radius / 200); // Fade in from center

        ctx!.beginPath();
        ctx!.arc(x, y, Math.max(0.1, size), 0, Math.PI * 2);
        
        // Update color check inside draw loop for theme switching response
        const isDark = document.documentElement.classList.contains('dark');
        const rgb = isDark ? '255, 255, 255' : '142, 68, 173';
        
        ctx!.fillStyle = `rgba(${rgb}, ${opacity})`;
        ctx!.fill();
      }
    }

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push(new Star());
    }

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      // Trail effect
      ctx.fillStyle = document.documentElement.classList.contains('dark') 
        ? 'rgba(27, 27, 27, 0.2)' 
        : 'rgba(245, 245, 245, 0.2)';
      ctx.fillRect(0, 0, width, height);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default StarryBackground;