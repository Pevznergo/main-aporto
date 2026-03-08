"use client";

import { useEffect, useRef } from "react";

export default function ContextCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.parentElement?.clientWidth || window.innerWidth;
        let height = canvas.parentElement?.clientHeight || window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const handleResize = () => {
            width = canvas.parentElement?.clientWidth || window.innerWidth;
            height = canvas.parentElement?.clientHeight || window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);

        const cols = 18;
        const rows = 16;
        const spacingX = width / cols;
        const spacingY = height / rows;
        const lineLength = Math.min(spacingX, spacingY) * 0.6;

        let animationFrameId: number;
        let time = 0;

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.lineWidth = 2;
            ctx.lineCap = "round";

            // Virtual point moving in a Lissajous curve
            time += 0.02;
            const virtualX = width / 2 + Math.sin(time * 0.5) * (width * 0.3);
            const virtualY = height / 2 + Math.cos(time * 0.7) * (height * 0.3);

            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    const x = i * spacingX;
                    const y = j * spacingY;

                    const dx = virtualX - x;
                    const dy = virtualY - y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = Math.sqrt(width * width + height * height) / 1.5;

                    // Rotation angle towards the virtual point
                    const angle = Math.atan2(dy, dx);

                    // Color calculation based on distance
                    const normalizedDist = Math.min(dist / maxDist, 1);

                    // Interpolate between white, green, teal, and dark background
                    let r, g, b, alpha;
                    if (normalizedDist < 0.2) {
                        // White to light green (#98DFB5)
                        const t = normalizedDist / 0.2;
                        r = 255 - t * (255 - 152);
                        g = 255 - t * (255 - 223);
                        b = 255 - t * (255 - 181);
                        alpha = 1;
                    } else if (normalizedDist < 0.5) {
                        // Light green to dark teal (#00443E)
                        const t = (normalizedDist - 0.2) / 0.3;
                        r = 152 - t * (152 - 0);
                        g = 223 - t * (223 - 68);
                        b = 181 - t * (181 - 62);
                        alpha = 1 - t * 0.5;
                    } else {
                        // Dark teal to background (#121212)
                        const t = (normalizedDist - 0.5) / 0.5;
                        r = 0 + t * 18;
                        g = 68 - t * 50;
                        b = 62 - t * 44;
                        alpha = 0.5 - t * 0.4;
                    }

                    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${Math.max(0.05, alpha)})`;

                    ctx.beginPath();
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
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <canvas ref={canvasRef} className="block w-full h-full opacity-60 mix-blend-screen" />
        </div>
    );
}
