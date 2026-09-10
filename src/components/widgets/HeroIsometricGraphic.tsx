'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const lottieCache: Record<string, any> = {};

export default function HeroIsometricGraphic() {
  const jsonPath = '/SVG/hero3.json';
  const [animationData, setAnimationData] = useState<any>(lottieCache[jsonPath] || null);

  useEffect(() => {
    if (lottieCache[jsonPath]) {
      setAnimationData(lottieCache[jsonPath]);
      return;
    }

    fetch(jsonPath)
      .then((res) => res.json())
      .then((data) => {
        lottieCache[jsonPath] = data;
        setAnimationData(data);
      })
      .catch((err) => console.error('Error cargando Lottie del hero:', err));
  }, [jsonPath]);

  return (
    <div className="relative w-full max-w-[32rem] xl:max-w-[36rem] aspect-square flex items-center justify-center select-none">
      {/* Difuminado de fondo idéntico al de las letras del hero (Crimson Glow + Pulse) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[#D62828]/25 blur-[100px] rounded-full -z-10 animate-pulse-slow pointer-events-none" />
      
      {/* Halo radial de acento cian / rojo para profundidad de escena */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(214,40,40,0.22)_0%,rgba(114,219,211,0.1)_50%,transparent_75%)] blur-[90px] rounded-full -z-10 pointer-events-none" />

      {/* Floating wrapper con animación suave */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative w-full h-full flex items-center justify-center p-2 will-change-transform drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
      >
        {animationData ? (
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="size-12 rounded-full border-2 border-[#72dbd3]/30 border-t-[#D62828] animate-spin" />
          </div>
        )}
      </motion.div>
    </div>
  );
}
