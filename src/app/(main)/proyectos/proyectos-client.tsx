'use client';

import React, { useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { PROJECTS, PROJECTS_EN, Project } from '@/data/projects';
import ProjectDetailsModal from '@/components/ProjectDetailsModal';

export default function ProyectosClient({ locale = 'es' }: { locale?: 'es' | 'en' }) {
  const pathname = usePathname() || '/';
  const isEn = locale === 'en' || pathname.startsWith('/en') || pathname.startsWith('/us');

  const [activeCategory, setActiveCategory] = useState<'ALL' | 'IA' | 'Web' | 'Automatización'>('ALL');
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
    <main className="min-h-screen w-full bg-background text-foreground pt-28 md:pt-36 pb-20">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-rule mb-12">
          <div className="max-w-2xl space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
              {isEn ? '15 systems in production.' : '15 sistemas en producción.'}
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {isEn
                ? 'Verified software architectures, WhatsApp AI agents, and high-conversion web platforms operating across healthcare, hospitality, retail, and B2B distribution.'
                : 'Arquitecturas de software verificadas, agentes de IA en WhatsApp y plataformas web operando en salud, turismo, comercio y distribución B2B.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {(
              [
                { id: 'ALL', label: isEn ? 'All (15)' : 'Todos (15)' },
                { id: 'IA', label: isEn ? 'AI Agents' : 'Agentes IA' },
                { id: 'Web', label: isEn ? 'Web & SEO' : 'Páginas web' },
                { id: 'Automatización', label: isEn ? 'Automation' : 'Automatización' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`h-10 px-4 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => handleOpenDetails(project)}
              className="group min-w-0 rounded-2xl bg-surface border border-rule overflow-hidden flex flex-col justify-between cursor-pointer hover:border-rule-strong transition-colors"
            >
              <div>
                <div className="relative w-full aspect-[16/10] bg-card overflow-hidden border-b border-rule">
                  <img
                    src={`/projects/${project.folder}/${project.images[0]}`}
                    alt={project.title}
                    width={800}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="p-6 space-y-2.5">
                  <div className="flex items-center justify-between gap-2 text-xs text-muted">
                    <span>{project.client}</span>
                    <span className="font-mono text-[11px] text-primary">{project.category}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-5 pt-3 border-t border-rule flex items-center justify-between text-xs text-muted">
                <span>{isEn ? 'Inspect architecture & gallery' : 'Ver arquitectura y galería'}</span>
                {project.url && <ExternalLink size={13} className="text-primary" />}
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
