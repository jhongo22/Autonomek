'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

const AGENT_RESPONSES = [
  'Hola, soy el agente de IA de Autonomek. ¿En qué puedo ayudarte a escalar tu negocio hoy?',
  'Nuestros sistemas de automatización de tareas y procesos pueden ahorrarte hasta 20 horas de trabajo a la semana. ¿Quieres saber cómo?',
  'Diseñamos plataformas web inteligentes, no solo páginas simples. ¿Cuál es tu mayor desafío actual?',
];

export default function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'agent'; text: string }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{ role: 'agent', text: AGENT_RESPONSES[0] }]);
      }, 500);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages((prev) => [...prev, { role: 'user', text: inputValue }]);
    setInputValue('');

    setTimeout(() => {
      const resp = AGENT_RESPONSES[Math.floor(Math.random() * (AGENT_RESPONSES.length - 1)) + 1];
      setMessages((prev) => [...prev, { role: 'agent', text: resp }]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 w-80 sm:w-96 h-[500px] max-h-[80vh] bg-surface/95 backdrop-blur-2xl border border-slate-400/20 rounded-2xl flex flex-col shadow-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-slate-400/15 bg-card flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                    <Bot size={20} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-teal border-2 border-surface rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="text-foreground font-display font-bold text-sm tracking-wide">Autonomek AI Agent</h3>
                  <p className="text-[10px] text-muted font-mono uppercase tracking-widest">En línea</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-400/15 text-muted hover:text-foreground transition-all"
              >
                <X size={18} />
              </button>
            </div>

            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/60">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div
                      className={`mt-auto w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        msg.role === 'user' ? 'bg-slate-400/20' : 'bg-accent/20'
                      }`}
                    >
                      {msg.role === 'user' ? (
                        <User size={12} className="text-foreground/80" />
                      ) : (
                        <Bot size={12} className="text-accent-light" />
                      )}
                    </div>
                    <div
                      className={`p-3 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-accent text-white rounded-2xl rounded-tr-none shadow-md'
                          : 'bg-surface text-foreground border border-slate-400/15 rounded-2xl rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-card border-t border-slate-400/15">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Escribe un mensaje..."
                  className="flex-1 bg-background border border-slate-400/20 rounded-full py-2.5 px-4 text-sm text-foreground placeholder:text-subtle focus:outline-none focus:border-accent-light transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-full bg-accent hover:bg-accent-light disabled:opacity-50 text-white flex items-center justify-center transition-all shadow-md"
                >
                  <Send size={17} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,99,235,0.4)] text-white relative group border border-slate-400/20 hover:bg-accent-light transition-all duration-300"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
}
