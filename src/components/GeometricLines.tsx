"use client";

interface GeometricLinesProps {
  variant:
    | "pillars"
    | "about"
    | "areas"
    | "reviews"
    | "methodology"
    | "educational"
    | "faq"
    | "contact";
  className?: string;
}

export function GeometricLines({ variant, className = "" }: GeometricLinesProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden z-0 select-none transition-colors duration-500 ${className}`}
    >
      {/* 1. PILARES: Linhas de sustentação técnica ortogonal e nós em cruz (+) */}
      {variant === "pillars" && (
        <div className="absolute inset-0 text-[#B58A80]/[0.18] dark:text-[#64748B]/[0.22] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_95%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="pillarsGridPattern"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 0 L 0 0 0 80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
                <circle cx="0" cy="0" r="1.5" className="fill-[#B58A80]/[0.35] dark:fill-[#D1D5DB]/[0.25]" />
                <path
                  d="M 38 40 L 42 40 M 40 38 L 40 42"
                  stroke="currentColor"
                  strokeWidth="0.75"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pillarsGridPattern)" />
            {/* Linhas Diagonais Estruturais Suaves */}
            <line x1="0" y1="0" x2="35%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
            <line x1="100%" y1="0" x2="65%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          </svg>
        </div>
      )}

      {/* 2. SOBRE O ADVOGADO: Vetores angulares a 45°, losangos e linhas editoriais */}
      {variant === "about" && (
        <div className="absolute inset-0 text-[#B58A80]/[0.16] dark:text-[#64748B]/[0.20] [mask-image:radial-gradient(circle_at_60%_40%,black_45%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Linhas Diagonais em 45 Graus */}
            <line x1="-10%" y1="20%" x2="110%" y2="70%" stroke="currentColor" strokeWidth="1" />
            <line x1="-10%" y1="35%" x2="110%" y2="85%" stroke="currentColor" strokeWidth="0.8" strokeDasharray="8 6" />
            <line x1="-10%" y1="5%" x2="110%" y2="55%" stroke="currentColor" strokeWidth="0.7" />
            <line x1="25%" y1="-10%" x2="95%" y2="110%" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
            
            {/* Formas Geométricas Losangulares */}
            <polygon
              points="150,80 200,130 150,180 100,130"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
              className="hidden md:block"
            />
            <polygon
              points="150,100 180,130 150,160 120,130"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
              strokeDasharray="4 4"
              className="hidden md:block"
            />
            <polygon
              points="850,220 900,270 850,320 800,270"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
              className="hidden lg:block"
            />
            {/* Círculo Técnico Cartesiano */}
            <circle cx="850" cy="270" r="85" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" className="hidden lg:block" />
            <circle cx="850" cy="270" r="2.5" className="fill-[#B58A80]/[0.4] dark:fill-[#D1D5DB]/[0.3]" />
          </svg>
        </div>
      )}

      {/* 3. ESPECIALIDADES / ÁREAS DE ATUAÇÃO: Malha isométrica técnica e réguas de cálculo */}
      {variant === "areas" && (
        <div className="absolute inset-0 text-[#B58A80]/[0.17] dark:text-[#64748B]/[0.22] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_95%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="areasIsometricPattern"
                width="120"
                height="70"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 0 35 L 60 0 L 120 35 L 60 70 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.75"
                />
                <circle cx="60" cy="35" r="1.5" className="fill-[#B58A80]/[0.35] dark:fill-[#D1D5DB]/[0.25]" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#areasIsometricPattern)" />
            {/* Guias Longas de Precisão */}
            <line x1="5%" y1="0" x2="5%" y2="100%" stroke="currentColor" strokeWidth="0.9" strokeDasharray="4 8" />
            <line x1="95%" y1="0" x2="95%" y2="100%" stroke="currentColor" strokeWidth="0.9" strokeDasharray="4 8" />
          </svg>
        </div>
      )}

      {/* 4. RECONHECIMENTO PÚBLICO / AVALIAÇÕES: Linhas de fluxo dinâmico e anéis concêntricos */}
      {variant === "reviews" && (
        <div className="absolute inset-0 text-[#B58A80]/[0.15] dark:text-[#64748B]/[0.20] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Linhas Diagonais Espaçadas */}
            <line x1="-5%" y1="15%" x2="105%" y2="45%" stroke="currentColor" strokeWidth="1" />
            <line x1="-5%" y1="45%" x2="105%" y2="75%" stroke="currentColor" strokeWidth="0.8" strokeDasharray="10 8" />
            <line x1="-5%" y1="75%" x2="105%" y2="95%" stroke="currentColor" strokeWidth="0.9" />

            {/* Cruzes de Alinhamento nos Cantos */}
            <g transform="translate(100, 60)">
              <line x1="-12" y1="0" x2="12" y2="0" stroke="currentColor" strokeWidth="1" />
              <line x1="0" y1="-12" x2="0" y2="12" stroke="currentColor" strokeWidth="1" />
            </g>
            <g transform="translate(1100, 180)">
              <line x1="-12" y1="0" x2="12" y2="0" stroke="currentColor" strokeWidth="1" />
              <line x1="0" y1="-12" x2="0" y2="12" stroke="currentColor" strokeWidth="1" />
            </g>
          </svg>
        </div>
      )}

      {/* 5. METODOLOGIA / COMO ATUAMOS: Trilha de nós conectados e setas de progressão */}
      {variant === "methodology" && (
        <div className="absolute inset-0 text-[#B58A80]/[0.16] dark:text-[#64748B]/[0.22] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_95%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="methodologyPattern"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="30" cy="30" r="1" className="fill-[#B58A80]/[0.4] dark:fill-[#D1D5DB]/[0.25]" />
                <path d="M 0 30 L 60 30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#methodologyPattern)" />
          </svg>
        </div>
      )}

      {/* 6. CONTEÚDO EDUCATIVO: Padrão de páginas abertas e retículas bibliográficas */}
      {variant === "educational" && (
        <div className="absolute inset-0 text-[#B58A80]/[0.15] dark:text-[#64748B]/[0.20] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Linhas Horizontais de Leitura Editorial */}
            <line x1="0" y1="20%" x2="100%" y2="20%" stroke="currentColor" strokeWidth="0.8" strokeDasharray="6 12" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 8" />
            <line x1="0" y1="80%" x2="100%" y2="80%" stroke="currentColor" strokeWidth="0.8" strokeDasharray="6 12" />
            {/* Guias Verticais */}
            <line x1="20%" y1="0" x2="20%" y2="100%" stroke="currentColor" strokeWidth="0.8" strokeDasharray="8 8" />
            <line x1="80%" y1="0" x2="80%" y2="100%" stroke="currentColor" strokeWidth="0.8" strokeDasharray="8 8" />
          </svg>
        </div>
      )}

      {/* 7. FAQ: Vetores de dúvida e expansão concêntrica */}
      {variant === "faq" && (
        <div className="absolute inset-0 text-[#B58A80]/[0.15] dark:text-[#64748B]/[0.20] [mask-image:radial-gradient(circle_at_center,black_45%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Círculos Concêntricos Intersectantes */}
            <circle cx="50%" cy="50%" r="220" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="6 6" />
            <circle cx="50%" cy="50%" r="380" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 8" />
            <circle cx="50%" cy="50%" r="540" fill="none" stroke="currentColor" strokeWidth="0.5" />
            {/* Cruz Central */}
            <line x1="50%" y1="35%" x2="50%" y2="65%" stroke="currentColor" strokeWidth="0.75" />
            <line x1="35%" y1="50%" x2="65%" y2="50%" stroke="currentColor" strokeWidth="0.75" />
          </svg>
        </div>
      )}

      {/* 8. CONTATO: Redes de comunicação e conexões */}
      {variant === "contact" && (
        <div className="absolute inset-0 text-[#B58A80]/[0.17] dark:text-[#64748B]/[0.22] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_95%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Linhas Radiais de Conexão */}
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="0.8" strokeDasharray="6 6" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="0.8" strokeDasharray="6 6" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 8" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 8" />
          </svg>
        </div>
      )}
    </div>
  );
}
