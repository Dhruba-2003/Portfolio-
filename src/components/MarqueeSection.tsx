import React, { useEffect, useRef, useState } from 'react';

const ROW_1_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

const ROW_2_IMAGES = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const ROW_1_TRIPLED = [...ROW_1_IMAGES, ...ROW_1_IMAGES, ...ROW_1_IMAGES];
const ROW_2_TRIPLED = [...ROW_2_IMAGES, ...ROW_2_IMAGES, ...ROW_2_IMAGES];

interface MarqueeTileProps {
  url: string;
  index: number;
}

const MarqueeTile: React.FC<MarqueeTileProps> = ({ url, index }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="w-[420px] h-[270px] min-w-[420px] shrink-0 rounded-2xl overflow-hidden bg-[#161616] border border-[#252830]/40 relative select-none">
      {hasError ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1c1d22] to-[#121316] text-[#D7E2EA]/50 text-sm p-4 text-center">
          <span className="font-semibold text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1">
            3D Motion Showcase
          </span>
          <span className="text-xs text-[#D7E2EA]/40">Work #{index + 1}</span>
        </div>
      ) : (
        <img
          src={url}
          alt={`3D Motion Reel ${index + 1}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
        />
      )}
    </div>
  );
};

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // initial trigger
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden relative flex flex-col gap-3 select-none"
    >
      {/* Row 1: moves RIGHT on scroll (translateX(offset - 200)) */}
      <div
        className="flex gap-3 will-change-transform"
        style={{
          transform: `translateX(${offset - 200}px)`,
          willChange: 'transform',
        }}
      >
        {ROW_1_TRIPLED.map((url, idx) => (
          <MarqueeTile key={`r1-${idx}`} url={url} index={idx} />
        ))}
      </div>

      {/* Row 2: moves LEFT on scroll (translateX(-(offset - 200))) */}
      <div
        className="flex gap-3 will-change-transform"
        style={{
          transform: `translateX(${-(offset - 200)}px)`,
          willChange: 'transform',
        }}
      >
        {ROW_2_TRIPLED.map((url, idx) => (
          <MarqueeTile key={`r2-${idx}`} url={url} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
