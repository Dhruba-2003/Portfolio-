import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import { ProjectData } from './ProjectModal';

export const PROJECTS: ProjectData[] = [
  {
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    client: 'Nextlevel Labs',
    year: '2026',
    description:
      'A full suite of photorealistic product renders and real-time interactive 3D assets crafted for Nextlevel Studio’s flagship hardware debut.',
    deliverables: ['Hardware Visualization', '3D Motion Reel', 'Custom Shaders'],
    tools: ['Blender 4.3', 'Cinema 4D', 'Octane Render', 'After Effects'],
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    client: 'Self-Initiated',
    year: '2025',
    description:
      'Exploration of chromatic lighting, crystalline geometry, and kinetic brand marks exploring futuristic luxury identity design.',
    deliverables: ['Brand Guidelines', 'Procedural Textures', 'Hero Still Series'],
    tools: ['Cinema 4D', 'Redshift', 'Substance Designer', 'Illustrator'],
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    client: 'Solaris Global',
    year: '2026',
    description:
      'Architectural visual concepts and atmospheric 3D animations evoking solar dynamics, orbital mechanics, and clean energy systems.',
    deliverables: ['Environmental Renders', 'Launch Keynotes', 'Interactive Web3D'],
    tools: ['Unreal Engine 5.4', 'Houdini FX', 'Octane Render', 'Figma'],
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  onOpenProject: (project: ProjectData) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onOpenProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex items-start justify-center relative"
    >
      <motion.div
        style={{
          scale,
          top: `calc(clamp(70px, 10vw, 110px) + ${index * 28}px)`,
          transformOrigin: 'top center',
        }}
        className="sticky w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      >
        {/* Top row: Number, category label, project name, and "Live Project" ghost button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D7E2EA]/15 pb-4 sm:pb-6">
          <div className="flex items-baseline gap-4 sm:gap-6 flex-wrap">
            {/* Number (huge, same style as services) */}
            <span
              className="font-black text-[#D7E2EA] leading-none tracking-tighter"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {project.number}
            </span>

            {/* Category label */}
            <span className="text-[#D7E2EA]/60 font-light uppercase tracking-wider text-sm sm:text-base">
              ({project.category})
            </span>

            {/* Project name */}
            <h3
              className="font-medium uppercase text-[#D7E2EA] tracking-tight leading-tight"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.2rem)' }}
            >
              {project.name}
            </h3>
          </div>

          {/* Ghost button */}
          <div className="self-end sm:self-center shrink-0">
            <LiveProjectButton onClick={() => onOpenProject(project)} />
          </div>
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 sm:gap-6 w-full items-stretch">
          {/* Left column (40% width): 2 stacked images */}
          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-6 justify-between">
            <div
              className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#141416] border border-[#D7E2EA]/10 cursor-pointer group"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              onClick={() => onOpenProject(project)}
            >
              <img
                src={project.col1Img1}
                alt={`${project.name} detail 1`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div
              className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#141416] border border-[#D7E2EA]/10 cursor-pointer group"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              onClick={() => onOpenProject(project)}
            >
              <img
                src={project.col1Img2}
                alt={`${project.name} detail 2`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right column (60% width): 1 tall image */}
          <div className="md:col-span-6 w-full">
            <div
              className="w-full h-full min-h-[260px] sm:min-h-[340px] md:min-h-[420px] overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#141416] border border-[#D7E2EA]/10 cursor-pointer group"
              onClick={() => onOpenProject(project)}
            >
              <img
                src={project.col2Img}
                alt={`${project.name} primary showcase`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onOpenProject: (project: ProjectData) => void;
  onContactClick: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenProject,
  onContactClick,
}) => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24 select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading: "Project" (singular) using .hero-heading gradient */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* 3 Stacking Cards */}
        <div className="flex flex-col gap-10">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={idx}
              totalCards={PROJECTS.length}
              onOpenProject={onOpenProject}
            />
          ))}
        </div>

        {/* Footer closing block */}
        <div
          id="contact"
          className="mt-32 pt-16 border-t border-[#D7E2EA]/15 flex flex-col md:flex-row items-center justify-between gap-8 text-[#D7E2EA]/70"
        >
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium">
              3D Creator & Visual Director
            </span>
            <p className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#D7E2EA]">
              Jack &copy; 2026. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm uppercase tracking-wider font-light">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Twitter / X
            </a>
            <span>·</span>
            <a
              href="https://artstation.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              ArtStation
            </a>
            <span>·</span>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Behance
            </a>
            <span>·</span>
            <button
              type="button"
              onClick={onContactClick}
              className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer bg-transparent border-0 text-[#D7E2EA] font-medium p-0"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
