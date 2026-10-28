'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Globe, Check } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Project } from '@/data/projects';

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const pathname = usePathname() || '/';
  const isEn = pathname === '/en' || pathname.startsWith('/en/') || pathname === '/us' || pathname.startsWith('/us/');

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

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

  const images = project.images;
  const folder = project.folder;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const whatsappMessage = isEn
    ? `Hello Autonomek, I inspected the "${project.title}" case study in your portfolio and I would like to quote a similar system.`
    : `Hola Autonomek, vi el caso de estudio "${project.title}" en su portafolio y me gustaría cotizar un sistema similar.`;
  const whatsappUrl = `https://wa.me/573004435894?text=${encodeURIComponent(whatsappMessage)}`;

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
            className="relative w-full max-w-5xl bg-surface border border-rule rounded-2xl overflow-hidden shadow-2xl z-10 my-auto flex flex-col lg:flex-row max-h-[90vh] lg:max-h-[85vh]"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg bg-background/90 hover:bg-card text-foreground border border-rule transition-colors z-20"
              aria-label={isEn ? 'Close modal' : 'Cerrar modal'}
            >
              <X size={18} />
            </button>

            {/* Left: Image Carousel */}
            <div className="relative w-full lg:w-[58%] bg-background flex items-center justify-center min-h-[260px] sm:min-h-[380px] lg:min-h-0 overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={`/projects/${folder}/${images[currentImageIndex]}`}
                  alt={isEn ? `${project.title} — Production Architecture Screenshot ${currentImageIndex + 1} by Autonomek` : `${project.title} — Captura de arquitectura y diseño ${currentImageIndex + 1} por Autonomek`}
                  width={960}
                  height={600}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full object-contain max-h-[340px] sm:max-h-[440px] lg:max-h-full aspect-[16/10]"
                />
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-lg bg-background/90 text-foreground hover:bg-card border border-rule transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100"
                    aria-label={isEn ? 'Previous image' : 'Imagen anterior'}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-lg bg-background/90 text-foreground hover:bg-card border border-rule transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100"
                    aria-label={isEn ? 'Next image' : 'Imagen siguiente'}
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-background/80 px-3 py-1.5 rounded-full border border-rule">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentImageIndex ? 'bg-primary w-5' : 'bg-muted/40 w-1.5'
                    }`}
                    aria-label={`Image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Content Details */}
            <div className="w-full lg:w-[42%] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border-t lg:border-t-0 lg:border-l border-rule bg-surface max-h-[48vh] lg:max-h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-muted">
                  <span>{project.client}</span>
                  <span className="font-mono text-primary">{project.category}</span>
                </div>

                <h2 id="modal-project-title" className="text-2xl font-semibold text-foreground tracking-tight">
                  {project.title}
                </h2>

                <div className="text-muted text-sm leading-relaxed space-y-4">
                  <p>{project.longDescription || project.description}</p>

                  {project.highlightPhrase && (
                    <blockquote className="border-l-2 border-primary pl-3.5 text-foreground py-1">
                      “{project.highlightPhrase}”
                    </blockquote>
                  )}

                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div className="pt-2">
                      <h3 className="font-medium text-xs text-foreground mb-2">
                        {isEn ? 'System capabilities' : 'Capacidades del sistema'}
                      </h3>
                      <ul className="space-y-1.5">
                        {project.keyFeatures.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-muted text-xs sm:text-sm">
                            <Check size={14} className="text-primary mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <span className="block text-xs text-subtle mb-2">
                    {isEn ? 'Architecture & stack' : 'Arquitectura y capacidades'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md bg-background border border-rule text-xs text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 pt-5 border-t border-rule mt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 px-5 bg-primary text-primary-ink font-medium text-sm text-center hover:opacity-90 transition-opacity inline-flex items-center justify-center rounded-lg"
                >
                  {isEn ? 'Quote similar system on WhatsApp' : 'Cotizar sistema similar por WhatsApp'}
                </a>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-10 px-5 border border-rule bg-background hover:bg-card text-foreground font-medium text-xs text-center transition-colors inline-flex items-center justify-center gap-2 rounded-lg"
                  >
                    <Globe size={14} />
                    <span>{isEn ? 'Open live platform' : 'Visitar plataforma en vivo'}</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
