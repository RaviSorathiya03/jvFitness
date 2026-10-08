"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
    className?: string;
    containerClassName?: string;
    dotColor?: string;
}

export function AnimatedBackground({
    className,
    containerClassName,
    dotColor = "rgba(120, 119, 198, 0.3)",
}: AnimatedBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
        }> = [];

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        const init = () => {
            particles = [];
            const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 1,
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, i) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = dotColor;
                ctx.fill();

                // Draw connections
                particles.slice(i + 1).forEach((other) => {
                    const dx = particle.x - other.x;
                    const dy = particle.y - other.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.strokeStyle = dotColor.replace(
                            /[\d.]+\)$/,
                            `${0.2 * (1 - distance / 100)})`
                        );
                        ctx.stroke();
                    }
                });
            });

            animationId = requestAnimationFrame(animate);
        };

        resize();
        init();
        animate();

        window.addEventListener("resize", () => {
            resize();
            init();
        });

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
        };
    }, [dotColor]);

    return (
        <div className={cn("absolute inset-0 overflow-hidden", containerClassName)}>
            <canvas
                ref={canvasRef}
                className={cn("h-full w-full", className)}
                style={{ opacity: 0.6 }}
            />
        </div>
    );
}

export function GradientBackground({ className }: { className?: string }) {
    return (
        <div className={cn("absolute inset-0 overflow-hidden", className)}>
            <div className="absolute -left-1/4 -top-1/4 h-1/2 w-1/2 rounded-full bg-gradient-to-r from-emerald-500/25 to-green-500/25 blur-3xl" />
            <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 blur-3xl" />
            <div className="absolute left-1/3 top-1/2 h-1/3 w-1/3 rounded-full bg-gradient-to-r from-green-400/15 to-emerald-400/15 blur-3xl" />
        </div>
    );
}
