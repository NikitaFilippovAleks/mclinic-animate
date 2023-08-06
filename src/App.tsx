import { useRef, useEffect } from 'react';
import './App.css'
import renderTriangle from './utils/renderLogo/renderTriangle';
import renderLogo from './utils/renderLogo';

const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    renderLogo(canvas);
  
    // const ctx = canvasRef.current.getContext('2d');

    // if (!ctx) return;

    // const elementWidth = 196;
    // const elementHeight = 174;

    // ctx.beginPath();
    // ctx.arc(100, 75, 50, 0, getRads(200));
    // ctx.stroke();

    // ctx.translate((window.innerWidth / 2)- (elementWidth / 2), (window.innerHeight / 2) - (elementHeight / 2))

    // rectangles.forEach(rect => renderTriangle(ctx, rect))
  }, []);

  return (
    <canvas ref={canvasRef}>
      
    </canvas>
  );
}

export default App;
