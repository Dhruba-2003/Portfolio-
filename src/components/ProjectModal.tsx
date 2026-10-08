import React from 'react';
import { X, ExternalLink, Sparkles, Layers, Box, Film } from 'lucide-react';

export interface ProjectData {
  number: string;
  name: string;
  category: string;
  description: string;
  client: string;
  year: string;
  deliverables: string[];
  tools: string[];
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fade-in select-none"
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[32px] sm:rounded-[48px] p-6 sm:p-10 text-[#D7E2EA] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] hover:bg-[#D7E2EA]/20 transition-colors cursor-pointer"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#D7E2EA]/20 pb-6 mb-8 pr-12">
          <div>
            <div className="flex items-center gap-3 text-sm font-light text-[#D7E2EA]/60 uppercase tracking-widest mb-1">
              <span>{project.category}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#D7E2EA]">
              {project.name}
            </h2>
          </div>
          <div className="text-5xl font-black text-[#D7E2EA]/30 tracking-tighter self-start sm:self-auto">
            {project.number}
          </div>
        </div>

        {/* Content & Metadata */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D7E2EA]/80">
              Project Overview
            </h3>
            <p className="text-base sm:text-lg font-light leading-relaxed text-[#D7E2EA]/90">
              {project.description}
            </p>

            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 mb-2">
                Deliverables
              </h4>
              <div className="flex flex-wrap gap-2 text-xs font-light text-[#D7E2EA]">
                {project.deliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full border border-[#D7E2EA]/30 bg-[#161616]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Details */}
          <div className="bg-[#141414] p-5 rounded-2xl border border-[#D7E2EA]/15 space-y-4">
            <div>
              <span className="text-xs text-[#D7E2EA]/50 uppercase tracking-wider block">Client</span>
              <span className="text-sm font-medium text-[#D7E2EA]">{project.client}</span>
            </div>
            <div>
              <span className="text-xs text-[#D7E2EA]/50 uppercase tracking-wider block mb-1">
                Tools & Tech
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs text-[#D7E2EA]/80 font-mono px-2 py-0.5 rounded bg-black/40 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-full border border-[#D7E2EA] text-xs font-medium uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors"
            >
              <span>Inquire Similar Project</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Image Showcase Grid */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D7E2EA]/80">
            Selected Renders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={project.col2Img}
              alt={`${project.name} primary render`}
              referrerPolicy="no-referrer"
              className="w-full h-80 object-cover rounded-2xl border border-[#D7E2EA]/20"
            />
            <div className="grid grid-rows-2 gap-4">
              <img
                src={project.col1Img1}
                alt={`${project.name} detail render 1`}
                referrerPolicy="no-referrer"
                className="w-full h-38 object-cover rounded-2xl border border-[#D7E2EA]/20"
              />
              <img
                src={project.col1Img2}
                alt={`${project.name} detail render 2`}
                referrerPolicy="no-referrer"
                className="w-full h-38 object-cover rounded-2xl border border-[#D7E2EA]/20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
