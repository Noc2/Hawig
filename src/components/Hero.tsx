"use client";

import OrbAnimation from "./OrbAnimation";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative -mt-16 md:-mt-24">
      <OrbAnimation />
      <div className="text-center -mt-8 md:-mt-16">
        <h1 className="heading-hero text-white">
          HAWIG{" "}
          <span className="text-gradient">VENTURES</span>
        </h1>
        <p className="body-large text-white/60 mt-6 max-w-xl mx-auto">
          Where AI Meets Web3
        </p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/30" />
      </div>
    </section>
  );
}
