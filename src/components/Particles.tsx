'use client';
import { useCallback } from "react";
import { type Container, type Engine, tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { Particles } from "@tsparticles/react";

export function ParticlesContainer() {
  const customInit = useCallback(async () => {
    await loadSlim(tsParticles);
  }, []);

  return (
    <Particles
      className="absolute inset-0 -z-10 pointer-events-none"
      id="tsparticles"
      particlesLoaded={customInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 140,
            },
          },
        },
        particles: {
          color: {
            value: "#7127d6",
          },
          links: {
            color: "#4f46e5",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            value: 80,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}