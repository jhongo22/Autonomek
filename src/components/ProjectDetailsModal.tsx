'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Layers } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Project } from '@/data/projects';

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  const pathname = usePathname() || '/';
  const isEn = pathname === '/en' || pathname.startsWith('/en/') || pathname === '/us' || pathname.startsWith('/us/');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  const whatsappMessage = isEn
    ? `Hello Autonomek, I saw the "${project.title}" case study in your portfolio and I would like to quote a similar solution.`
    : `Hola Autonomek, vi el caso de éxito "${project.title}" en su portafolio y me gustaría cotizar una solución similar.`;
  const whatsappUrl = `https://wa.me/573010147443?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[250] flex items-center justify-center p-4 md:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/90 backdrop-blur-md cursor-zoom-out"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.22 }}
            className="relative w-full max-w-3xl bg-surface border border-rule rounded-2xl overflow-hidden shadow-2xl z-10 my-auto max-h-[90vh] flex flex-col"
          >
            {/* Header Bar */}
            <div className="flex items-start justify-between gap-4 px-6 sm:px-8 pt-6 sm:pt-8 pb-5 border-b border-rule bg-card/40">
              <div className="space-y-2 pr-6">
                <div className="flex flex-wrap items-center gap-2.5 text-xs">
                  <span className="text-muted font-medium">{project.client}</span>
                  <span className="text-rule-strong" aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-background border border-rule px-2.5 py-0.5 font-mono text-[11px] text-primary">
                    <Layers size={11} />
                    {project.category}
                  </span>
                </div>
                <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                  {project.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg bg-background/90 hover:bg-card text-foreground border border-rule transition-colors shrink-0"
                aria-label={isEn ? 'Close modal' : 'Cerrar modal'}
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              <div className="text-muted text-sm sm:text-base leading-relaxed space-y-4">
                <p>{project.longDescription || project.description}</p>

                {project.highlightPhrase && (
                  <blockquote className="border-l-2 border-primary pl-4 text-foreground py-1 text-sm sm:text-base font-medium">
                    “{project.highlightPhrase}”
                  </blockquote>
                )}
              </div>

              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div className="rounded-xl border border-rule bg-background/60 p-5 space-y-3">
                  <h3 className="font-mono uppercase tracking-[0.14em] text-xs font-semibold text-primary">
                    {isEn ? 'What was built in this project' : 'Qué se desarrolló en este proyecto'}
                  </h3>
                  <ul className="space-y-2.5">
                    {project.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-foreground text-xs sm:text-sm leading-relaxed">
                        <Check size={15} className="text-primary mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <span className="block font-mono uppercase tracking-[0.14em] text-[11px] text-muted mb-2.5">
                  {isEn ? 'Implemented capabilities & modules' : 'Capacidades y módulos implementados'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-background border border-rule text-xs font-medium text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="px-6 sm:px-8 py-5 border-t border-rule bg-card/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-xs text-muted">
                {isEn
                  ? 'Delivered with 100% source code ownership and NDA protection.'
                  : 'Implementación privada bajo confidencialidad y propiedad total del código.'}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-6 bg-primary text-primary-ink font-semibold text-sm text-center hover:opacity-90 transition-opacity inline-flex items-center justify-center rounded-full shrink-0"
              >
                {isEn ? 'Quote similar system on WhatsApp' : 'Cotizar solución similar por WhatsApp'}
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
