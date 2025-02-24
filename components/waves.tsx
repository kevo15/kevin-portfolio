import React, { useEffect, useRef } from "react";

interface WaveConfig {
  amplitude: number;
  colorStops: { pos: number; color: string }[];
}

const FlowingWavesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const waveConfigs: WaveConfig[] = [
      {
        amplitude: 50,
        colorStops: [
          { pos: 0, color: "#000000" },
          { pos: 0.5, color: "#434343" },
          { pos: 1, color: "#000000" },
        ],
      },
      {
        amplitude: 50,
        colorStops: [
          { pos: 0, color: "#989c9d" },
          { pos: 0.5, color: "#989c9d" },
          { pos: 1, color: "#989c9d" },
        ],
      },
      {
        amplitude: 50,
        colorStops: [
          { pos: 0, color: "#000000" },
          { pos: 0.5, color: "#434343" },
          { pos: 1, color: "#000000" },
        ],
      },
    ];

    const frequency = 0.01;
    const speed = 0.02;
    let offset = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < waveConfigs.length; i++) {
        const { amplitude, colorStops } = waveConfigs[i];
        const baseY = (height / (waveConfigs.length + 1)) * (i + 1);

        ctx.beginPath();
        ctx.moveTo(0, baseY);

        for (let x = 0; x < width; x++) {
          const y = baseY + Math.sin(x * frequency + offset + i) * amplitude;
          ctx.lineTo(x, y);
        }

        const gradient = ctx.createLinearGradient(
          0,
          baseY - amplitude,
          0,
          baseY + amplitude,
        );
        colorStops.forEach(({ pos, color }) => {
          gradient.addColorStop(pos, color);
        });

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      offset += speed;
      requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
};

export default FlowingWavesBackground;
