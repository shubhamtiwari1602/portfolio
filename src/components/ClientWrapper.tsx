'use client';
import { Background } from '@/components/Background';
import { ParticlesContainer } from '@/components/Particles';
import { MouseTracker } from '@/components/MouseTracker';

export function ClientWrapper() {
  return (
    <>
      <Background />
      <ParticlesContainer />
      <MouseTracker />
    </>
  );
}