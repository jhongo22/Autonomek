'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface LottieBgIconProps {
  path: string;
}

const lottieCache: Record<string, Record<string, unknown>> = {};

export default function LottieBgIcon({ path }: LottieBgIconProps) {
  const [animationData, setAnimationData] = useState<Record<string, unknown> | null>(
    lottieCache[path] || null
  );
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !path) return;
    if (lottieCache[path]) {
      setAnimationData(lottieCache[path]);
      return;
    }

    let isMounted = true;
    fetch(encodeURI(path))
      .then((res) => {
        if (!res.ok) return null;
        const contentType = res.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) return null;
        return res.json();
      })
      .then((data) => {
        if (isMounted && data) {
          lottieCache[path] = data;
          setAnimationData(data);
        }
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, [path, isVisible]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute -bottom-6 -right-6 w-40 h-40 opacity-35 pointer-events-none"
    >
      {animationData && <Lottie animationData={animationData} loop={true} />}
    </div>
  );
}
