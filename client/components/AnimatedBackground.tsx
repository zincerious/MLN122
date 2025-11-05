import React, { useRef, useEffect } from 'react';
import './AnimatedBackground.css';

// Pixel-stack retro / tech background
const PALETTE = ['#00FF9C', '#69F0AE', '#00B8FF', '#9D7CFF', '#FF5C8A', '#FFD35C'];

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

type Block = {
  col: number;
  y: number; // current y in pixels
  vy: number;
  color: string;
  size: number; // block size in px (grid)
};

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const fallingRef = useRef<Block[]>([]);
  const heightsRef = useRef<number[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    ctx.imageSmoothingEnabled = false;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    let grid = Math.max(6, isMobile ? 8 : 12); // pixel size
    // adapt grid for very large screens
    if (width > 2000) grid = 16;

    const cols = Math.max(8, Math.floor(width / grid));
    const colWidth = width / cols;
    const colPixel = Math.floor(colWidth / grid) * grid || grid; // snap to grid

    heightsRef.current = new Array(cols).fill(0);

    const spawnBlock = (col?: number) => {
      if (prefersReduced) return;
      const c = col !== undefined ? Math.max(0, Math.min(cols - 1, col)) : Math.floor(rand(0, cols));
      const size = grid; // single-cell blocks for pixel style
      const block: Block = {
        col: c,
        y: -size,
        vy: rand(200, 600) / 60, // px per frame scaled
        color: PALETTE[Math.floor(rand(0, PALETTE.length))],
        size,
      };
      fallingRef.current.push(block);
    };

    // spawn initial blocks so stacks form
    for (let i = 0; i < Math.floor(cols * 0.6); i++) {
      spawnBlock(Math.floor(rand(0, cols)));
    }

    let last = performance.now();

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      ctx.imageSmoothingEnabled = false;
      // recompute cols and reset stacks (simple and safe)
      const newCols = Math.max(8, Math.floor(width / grid));
      heightsRef.current = new Array(newCols).fill(0);
      fallingRef.current = [];
    };
    window.addEventListener('resize', onResize);

    const onMove = (e: MouseEvent) => {
      // occasional interactive spawn
      if (Math.random() > 0.98) spawnBlock(Math.floor((e.clientX / width) * heightsRef.current.length));
    };
    window.addEventListener('mousemove', onMove);

    const onDown = (e: MouseEvent) => {
      // stronger burst of blocks on click
      const targetCol = Math.floor((e.clientX / width) * heightsRef.current.length);
      for (let i = 0; i < 6; i++) spawnBlock(targetCol + Math.floor(rand(-2, 3)));
    };
    window.addEventListener('mousedown', onDown);

    // animation loop
    const tick = (t: number) => {
      const dt = Math.min(40, t - last) / (1000 / 60);
      last = t;

      ctx.clearRect(0, 0, width, height);

      // background
      const g = ctx.createLinearGradient(0, 0, width, height);
      g.addColorStop(0, '#030317');
      g.addColorStop(1, '#050918');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      // subtle grid lines
      ctx.strokeStyle = 'rgba(255,255,255,0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += grid) {
        ctx.beginPath();
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += grid) {
        ctx.beginPath();
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
        ctx.stroke();
      }

      // update falling blocks
      for (let i = fallingRef.current.length - 1; i >= 0; i--) {
        const b = fallingRef.current[i];
        b.y += b.vy * dt;
        const colIndex = Math.max(0, Math.min(heightsRef.current.length - 1, b.col));
        const stackTop = height - (heightsRef.current[colIndex] + 1) * b.size;
        if (b.y >= stackTop) {
          // snap into place
          heightsRef.current[colIndex] = heightsRef.current[colIndex] + 1;
          fallingRef.current.splice(i, 1);
        }
      }

      // occasionally spawn new falling blocks
      if (!prefersReduced && Math.random() > 0.92) spawnBlock();

      // draw stacks
      for (let c = 0; c < heightsRef.current.length; c++) {
        const h = heightsRef.current[c];
        for (let level = 0; level < h; level++) {
          const x = Math.floor((c * width) / heightsRef.current.length / grid) * grid + (c % 2 === 0 ? 0 : 0);
          const y = height - (level + 1) * grid;
          // color based on column
          const color = PALETTE[c % PALETTE.length];
          ctx.fillStyle = color;
          ctx.fillRect(c * (width / heightsRef.current.length), y, width / heightsRef.current.length, grid);
          // neon outline
          ctx.strokeStyle = 'rgba(255,255,255,0.03)';
          ctx.strokeRect(c * (width / heightsRef.current.length) + 0.5, y + 0.5, width / heightsRef.current.length - 1, grid - 1);
        }
      }

      // draw falling blocks on top
      fallingRef.current.forEach((b) => {
        ctx.fillStyle = b.color;
        const x = (b.col * width) / heightsRef.current.length;
        ctx.fillRect(x, b.y, width / heightsRef.current.length, b.size);
        ctx.strokeStyle = 'rgba(255,255,255,0.06)';
        ctx.strokeRect(x + 0.5, b.y + 0.5, width / heightsRef.current.length - 1, b.size - 1);
      });

      if (!prefersReduced) {
        // faint scanline
        ctx.fillStyle = 'rgba(255,255,255,0.012)';
        const offset = (t / 80) % grid;
        for (let y = 0; y < height; y += grid * 3) {
          ctx.fillRect(0, y + offset, width, 1);
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
    };
  }, []);

  return (
    <div className="animated-bg-root pixel-mode" aria-hidden>
      <canvas ref={canvasRef} className="animated-bg-canvas" />
      <div className="animated-bg-gradient" />
    </div>
  );
};

export default AnimatedBackground;
