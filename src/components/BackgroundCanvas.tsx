"use client";

import { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        let mouseX = width / 2;
        let mouseY = height / 2;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        window.addEventListener("mousemove", handleMouseMove);

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);

        // Configuration for the grid
        const spacing = 30; // distance between lines
        const lineLength = 12;

        let animationFrameId: number;

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.strokeStyle = "rgba(100, 100, 100, 0.4)"; // subtle grey lines
            ctx.lineWidth = 1.5;
            ctx.lineCap = "round";

            for (let x = 0; x < width; x += spacing) {
                for (let y = 0; y < height; y += spacing) {
                    // Calculate distance and angle to mouse
                    const dx = mouseX - x;
                    const dy = mouseY - y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    // default angle just straight lines, slightly tilted based on global pos
                    let angle = Math.PI / 4 + (x * 0.001) + (y * 0.001);

                    // Influence of mouse - line points towards mouse if close
                    if (dist < 400) {
                        const targetAngle = Math.atan2(dy, dx);
                        // Mix original angle with target angle based on distance
                        const influence = 1 - (dist / 400);
                        angle = angle * (1 - influence) + targetAngle * influence;
                        ctx.strokeStyle = `rgba(107, 225, 149, ${0.1 + influence * 0.5})`; // gets greener and opaque when close
                    } else {
                        ctx.strokeStyle = "rgba(150, 150, 150, 0.2)";
                    }

                    ctx.beginPath();
                    // Draw line from center (x, y) 
                    const startX = x - (Math.cos(angle) * lineLength) / 2;
                    const startY = y - (Math.sin(angle) * lineLength) / 2;
                    const endX = x + (Math.cos(angle) * lineLength) / 2;
                    const endY = y + (Math.sin(angle) * lineLength) / 2;

                    ctx.moveTo(startX, startY);
                    ctx.lineTo(endX, endY);
                    ctx.stroke();
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
            style={{ opacity: 0.8 }}
        />
    );
}
