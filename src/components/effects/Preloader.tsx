'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AutonomekLockup } from '../brand/AutonomekLogo';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProg = prev + Math.floor(Math.random() * 15) + 1;
          return newProg > 100 ? 100 : newProg;
        });
      }, 200);
    } else {
      setTimeout(() => setLoading(false), 800);
    }

    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    if (loading) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.height = '100vh';
      document.body.style.height = '100vh';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.documentElement.style.height = '';
      document.body.style.height = '';
      window.scrollTo(0, 0);
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.documentElement.style.height = '';
      document.body.style.height = '';
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999] bg-background flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="w-full max-w-sm px-6 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center mb-5"
            >
              <AutonomekLockup className="w-[260px] sm:w-[310px] h-auto text-foreground" />
              <span className="sr-only">AUTONOMEK</span>
            </motion.div>
            
            <div className="w-full h-[1px] bg-surface relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-accent"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            
            <div className="w-full flex justify-between mt-2 text-foreground/50 font-mono text-xs uppercase tracking-widest">
              <span>Iniciando Sistema</span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
