'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity } from 'lucide-react';

export default function HeroIsometricGraphic() {
  return (
    <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center select-none">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#D62828]/15 via-transparent to-[#72dbd3]/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Grid pattern background plate */}
      <div className="absolute inset-4 rounded-3xl border border-white/5 bg-[#111111]/40 backdrop-blur-sm overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:28px_28px]" />

        {/* Floating Technical Badge Top Left */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-5 left-5 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414]/90 border border-white/10 backdrop-blur-md shadow-xl"
        >
          <span className="size-2 rounded-full bg-[#72dbd3] animate-pulse" />
          <span className="font-mono text-[9px] uppercase tracking-wider text-white/80 font-semibold">
            Neural Pipeline · Active
          </span>
        </motion.div>

        {/* Floating Technical Badge Bottom Right */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-5 right-5 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414]/90 border border-white/10 backdrop-blur-md shadow-xl"
        >
          <Zap size={11} className="text-[#D62828]" />
          <span className="font-mono text-[9px] uppercase tracking-wider text-white/80 font-semibold">
            Latency &lt; 200ms
          </span>
        </motion.div>

        {/* 3D Isometric Vector Illustration (Inspired by Redis) */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-full h-full flex items-center justify-center p-8 will-change-transform"
        >
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full max-w-[360px] max-h-[360px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Isometric Base Grid Lines */}
            <g opacity="0.25" stroke="#72dbd3" strokeWidth="0.8" strokeDasharray="3 3">
              <line x1="80" y1="200" x2="200" y2="270" />
              <line x1="200" y1="270" x2="320" y2="200" />
              <line x1="200" y1="130" x2="200" y2="270" />
              <line x1="140" y1="165" x2="260" y2="235" />
              <line x1="260" y1="165" x2="140" y2="235" />
            </g>

            {/* LOWER LEFT CUBE (Brand Accent Teal #72dbd3) */}
            <motion.g
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Top Face */}
              <polygon
                points="120,200 170,170 220,200 170,230"
                fill="#72dbd3"
                fillOpacity="0.12"
                stroke="#72dbd3"
                strokeWidth="1.2"
              />
              {/* Left Face */}
              <polygon
                points="120,200 170,230 170,290 120,260"
                fill="#72dbd3"
                fillOpacity="0.22"
                stroke="#72dbd3"
                strokeWidth="1.2"
              />
              {/* Right Face */}
              <polygon
                points="170,230 220,200 220,260 170,290"
                fill="#72dbd3"
                fillOpacity="0.08"
                stroke="#72dbd3"
                strokeWidth="1.2"
              />
              {/* Internal Wireframe Nodes */}
              <circle cx="170" cy="230" r="2.5" fill="#72dbd3" />
              <circle cx="120" cy="200" r="2" fill="#72dbd3" opacity="0.6" />
              <circle cx="220" cy="200" r="2" fill="#72dbd3" opacity="0.6" />
            </motion.g>

            {/* LOWER RIGHT CUBE (Dark Architectural Grey / Obsidian) */}
            <motion.g
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Top Face */}
              <polygon
                points="210,150 260,120 310,150 260,180"
                fill="#ffffff"
                fillOpacity="0.06"
                stroke="#ffffff"
                strokeOpacity="0.3"
                strokeWidth="1.2"
              />
              {/* Left Face */}
              <polygon
                points="210,150 260,180 260,240 210,210"
                fill="#ffffff"
                fillOpacity="0.12"
                stroke="#ffffff"
                strokeOpacity="0.3"
                strokeWidth="1.2"
              />
              {/* Right Face */}
              <polygon
                points="260,180 310,150 310,210 260,240"
                fill="#ffffff"
                fillOpacity="0.04"
                stroke="#ffffff"
                strokeOpacity="0.3"
                strokeWidth="1.2"
              />
              <circle cx="260" cy="180" r="2.5" fill="#ffffff" opacity="0.7" />
            </motion.g>

            {/* UPPER / MAIN ELEVATED CUBE (Brand Crimson Red #D62828 - Focal Point) */}
            <motion.g
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              {/* Top Face */}
              <polygon
                points="160,100 210,70 260,100 210,130"
                fill="#D62828"
                fillOpacity="0.25"
                stroke="#D62828"
                strokeWidth="1.6"
              />
              {/* Left Face */}
              <polygon
                points="160,100 210,130 210,190 160,160"
                fill="#D62828"
                fillOpacity="0.35"
                stroke="#D62828"
                strokeWidth="1.6"
              />
              {/* Right Face */}
              <polygon
                points="210,130 260,100 260,160 210,190"
                fill="#D62828"
                fillOpacity="0.15"
                stroke="#D62828"
                strokeWidth="1.6"
              />
              {/* Glowing Center Core */}
              <circle cx="210" cy="130" r="4" fill="#D62828" className="animate-pulse" />
              <circle cx="210" cy="130" r="8" stroke="#D62828" strokeWidth="0.8" opacity="0.5" />
            </motion.g>

            {/* Pulsing Interconnecting Data Streams */}
            <g strokeWidth="1.2" strokeDasharray="4 3">
              {/* Line between Top Cube & Left Cube */}
              <motion.line
                x1="210"
                y1="190"
                x2="170"
                y2="230"
                stroke="#D62828"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
              {/* Line between Top Cube & Right Cube */}
              <motion.line
                x1="260"
                y1="160"
                x2="260"
                y2="180"
                stroke="#72dbd3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
              {/* Cross connection */}
              <motion.line
                x1="170"
                y1="170"
                x2="210"
                y2="150"
                stroke="#72dbd3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 1.5, delay: 1.2 }}
              />
            </g>

            {/* Glowing Coordinate Indicators */}
            <text x="110" y="275" fill="#72dbd3" fontSize="8" fontFamily="monospace" opacity="0.6">SYS_01</text>
            <text x="270" y="255" fill="#ffffff" fontSize="8" fontFamily="monospace" opacity="0.4">NODE_02</text>
            <text x="220" y="65" fill="#D62828" fontSize="8" fontFamily="monospace" fontWeight="bold">CORE_IA</text>
          </svg>
        </motion.div>

        {/* Minimalist Bottom Status Strip */}
        <div className="absolute bottom-0 inset-x-0 h-10 border-t border-white/5 bg-[#0D0D0D]/80 backdrop-blur-md px-4 flex items-center justify-between font-mono text-[9px] text-white/40 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Activity size={10} className="text-[#72dbd3]" />
            <span>Infraestructura 24/7</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/30">
            <span>Autonomek OS</span>
            <span className="size-1 rounded-full bg-[#D62828]" />
          </div>
        </div>
      </div>
    </div>
  );
}
