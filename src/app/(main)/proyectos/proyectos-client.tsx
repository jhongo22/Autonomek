'use client';

import React, { useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { Check, ArrowUpRight } from 'lucide-react';
import { PROJECTS, PROJECTS_EN, Project } from '@/data/projects';
import ProjectDetailsModal from '@/components/ProjectDetailsModal';

export default function ProyectosClient({ locale = 'es' }: { locale?: 'es' | 'en' }) {
  const pathname = usePathname() || '/';
  const isEn = locale === 'en' || pathname.startsWith('/en') || pathname.startsWith('/us');

  const [activeCategory, setActiveCategory] = useState<'ALL' | 'IA' | 'Web' | 'Automatización'>(
    'ALL'
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectsSource = isEn ? PROJECTS_EN : PROJECTS;

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'ALL') return projectsSource;
    return projectsSource.filter((p) => p.category === activeCategory);
  }, [activeCategory, projectsSource]);

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen w-full bg-background text-foreground pt-28 md:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-rule mb-12">
          <div className="max-w-2xl space-y-3">
            <p className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
              {isEn ? 'Technical Case Studies' : 'Casos Técnicos'}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
              {isEn ? '15 architectures built in production.' : '15 sistemas desarrollados en operación.'}
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {isEn
                ? 'Explore what was built and how each real-world solution operates across healthcare, hospitality, retail, and B2B services.'
                : 'Explora exactamente qué se desarrolló y cómo opera cada solución real para salud, turismo, comercio y operaciones B2B.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {(
              [
                { id: 'ALL', label: isEn ? 'All (15)' : 'Todos (15)' },
                { id: 'IA', label: isEn ? 'WhatsApp AI' : 'Agentes IA' },
                { id: 'Web', label: isEn ? 'Websites' : 'Sitios web' },
                { id: 'Automatización', label: isEn ? 'Automation' : 'Automatización' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                  activeCategory === tab.id
                    ? 'bg-primary text-primary-ink'
                    : 'bg-surface text-muted hover:text-foreground border border-rule'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </header>

        {/* Grid — Technical Text Breakdowns (Confidentiality Preserved) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => handleOpenDetails(project)}
              className="group min-w-0 rounded-3xl bg-surface border border-rule overflow-hidden flex flex-col justify-between cursor-pointer hover:border-primary transition-colors"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-2 text-xs text-muted">
                  <span className="font-medium truncate">{project.client}</span>
                  <span className="rounded-full bg-background border border-rule px-2.5 py-0.5 text-[11px] font-mono text-primary shrink-0">
                    {project.category}
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h2>

                <p className="text-muted text-sm leading-relaxed">
                  {project.description}
                </p>

                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <ul className="space-y-1.5 pt-2 border-t border-rule/70">
                    {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-foreground/90 leading-relaxed">
                        <Check size={14} className="text-primary mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-background border border-rule px-2 py-0.5 text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 pb-5 pt-3 border-t border-rule flex items-center justify-between text-xs text-muted">
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {isEn ? 'View full technical breakdown' : 'Ver desglose técnico completo'}
                </span>
                <ArrowUpRight size={14} className="text-primary" />
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectDetailsModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
    </main>
  );
}
