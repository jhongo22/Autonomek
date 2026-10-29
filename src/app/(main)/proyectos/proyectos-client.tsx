'use client';

import React, { useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
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
              {isEn ? 'Portfolio' : 'Portafolio'}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
              {isEn ? '15 real projects in operation.' : '15 proyectos reales en funcionamiento.'}
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {isEn
                ? 'Explore websites, WhatsApp AI assistants, and custom software built for real businesses across healthcare, tourism, commerce, and services.'
                : 'Conoce sitios web, agentes de IA en WhatsApp y software a medida desarrollados para empresas de salud, turismo, comercio y servicios.'}
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => handleOpenDetails(project)}
              className="group min-w-0 rounded-3xl bg-surface border border-rule overflow-hidden flex flex-col justify-between cursor-pointer hover:border-primary transition-colors"
            >
              <div>
                <div className="relative w-full aspect-[16/10] bg-card overflow-hidden border-b border-rule">
                  <img
                    src={`/projects/${project.folder}/${project.images[0]}`}
                    alt={
                      isEn
                        ? `${project.title} — ${project.category} project by Autonomek`
                        : `${project.title} — Proyecto de ${project.category} por Autonomek`
                    }
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
                    <span className="rounded-full bg-background border border-rule px-2.5 py-0.5 text-[11px] text-primary">
                      {project.category}
                    </span>
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
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {isEn ? 'View project details' : 'Ver detalles y capturas'}
                </span>
                {project.url ? (
                  <ExternalLink size={14} className="text-primary" />
                ) : (
                  <ArrowUpRight size={14} className="text-primary" />
                )}
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
