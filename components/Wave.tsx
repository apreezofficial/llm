"use client";

import { useEffect, useRef } from 'react';

export default function Wave() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let offset = 0;

        const render = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = 120;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw multiple waves
            drawWave(ctx, canvas, offset, 'rgba(0, 102, 255, 0.05)', 40, 0.005);
            drawWave(ctx, canvas, offset + 100, 'rgba(0, 102, 255, 0.08)', 30, 0.008);
            drawWave(ctx, canvas, offset + 200, 'rgba(0, 102, 255, 0.03)', 50, 0.004);

            offset += 0.02;
            animationFrameId = window.requestAnimationFrame(render);
        };

        const drawWave = (
            ctx: CanvasRenderingContext2D,
            canvas: HTMLCanvasElement,
            offset: number,
            color: string,
            amplitude: number,
            frequency: number
        ) => {
            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);

            for (let x = 0; x < canvas.width; x++) {
                const y = Math.sin(x * frequency + offset) * amplitude + canvas.height / 2;
                ctx.lineTo(x, y);
            }

            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(0, canvas.height);
            ctx.fillStyle = color;
            ctx.fill();
        };

        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: '100%',
                height: '120px',
                display: 'block',
                position: 'absolute',
                bottom: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 0
            }}
        />
    );
}
