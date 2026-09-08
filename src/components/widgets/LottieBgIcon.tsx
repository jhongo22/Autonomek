'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface LottieBgIconProps {
  path: string;
}

const lottieCache: Record<string, any> = {};

export default function LottieBgIcon({ path }: LottieBgIconProps) {
  const [animationData, setAnimationData] = useState<any>(lottieCache[path] || null);

  useEffect(() => {
    if (lottieCache[path]) {
      setAnimationData(lottieCache[path]);
      return;
    }

    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        lottieCache[path] = data;
        setAnimationData(data);
      })
      .catch((err) => console.error('Error loading Lottie:', err));
  }, [path]);

  if (!animationData) return null;

  return (
    <div className="absolute -bottom-6 -right-6 w-44 h-44 opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 pointer-events-none will-change-transform">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}
