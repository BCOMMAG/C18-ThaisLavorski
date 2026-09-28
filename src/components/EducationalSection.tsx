"use client";

import { useState, useRef } from "react";
import { EDUCATIONAL_TOPICS, OFFICE_INFO } from "@/lib/data";
import { BookOpen, Clock, ChevronRight, ShieldAlert, ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function EducationalSection() {
  const [selectedId, setSelectedId] = useState(EDUCATIONAL_TOPICS[0].id);
  const activeTopic = EDUCATIONAL_TOPICS.find((t) => t.id === selectedId) || EDUCATIONAL_TOPICS[0];

  // Estado para acordeão mobile condensado
  const [expandedMobileTopicId, setExpandedMobileTopicId] = useState<string | null>(null);

  const toggleMobileTopic = (id: string) => {
    setExpandedMobileTopicId((prev) => (prev === id ? null : id));
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  };

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Cabeçalho com animação bidirecional
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. Coluna esquerda
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { x: -35, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leftColRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 3. Coluna direita
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { x: 35, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rightColRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const getWhatsAppMessageUrl = (topicTitle: string) => {
    const text = `Olá, Dra. Thais! Li o conteúdo educativo sobre "${topicTitle}" no seu site e gostaria de orientação a respeito do meu caso.`;
    return `https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="educativo"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-secondary)]/35 editorial-border-b w-full relative overflow-hidden"
    >
      {/* Linhas Geométricas Sutis de Fundo (Rosé Gold / Slate) */}
      <GeometricLines variant="educational" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--accent)]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--accent)] font-bold">
                05 / Conteúdo Jurídico Educativo
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Orientações & Direitos da Família
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Artigos e guias práticos elaborados com finalidade estritamente didática e pedagógica, em estrita conformidade com o Provimento 205/2021 do CFOAB.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MODELO DESKTOP (MD+): PAINEL LATERAL + LEITOR DE ARTIGO                   */}
        {/* ========================================================================= */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 items-start">
          {/* Coluna da Esquerda: Lista de Artigos */}
          <div ref={leftColRef} className="md:col-span-5 space-y-3 will-change-transform">
            <span className="font-heading text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold block px-2 mb-2">
              Artigos e Guias Didáticos
            </span>
            {EDUCATIONAL_TOPICS.map((topic) => {
              const isSelected = selectedId === topic.id;

              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setSelectedId(topic.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-[#1A2536] text-white border-2 border-[#B58A80] shadow-md scale-[1.02]"
                      : "bg-[var(--bg-card)] border-[var(--border-subtle)]/30 text-[var(--text-main)] hover:border-[var(--accent)] hover:shadow-xs"
                  }`}
                >
                  <div className="pr-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className={`text-[0.6875rem] font-heading uppercase tracking-wider font-bold ${
                          isSelected ? "text-[#E3C9C3]" : "text-[var(--accent)]"
                        }`}
                      >
                        {topic.category}
                      </span>
                      <span
                        className={`text-[0.6875rem] font-body flex items-center gap-1 ${
                          isSelected ? "text-gray-300" : "text-[var(--text-muted)]"
                        }`}
                      >
                        <Clock className="w-3 h-3" />
                        {topic.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-sm sm:text-base leading-snug">
                      {topic.title}
                    </h3>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      isSelected ? "text-[#E3C9C3] translate-x-1" : "text-[var(--text-muted)]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Coluna da Direita: Leitor Detalhado */}
          <div ref={rightColRef} className="md:col-span-7 will-change-transform">
            <div className="p-7 sm:p-9 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-sm relative">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/30 mb-6">
                <div className="flex items-center gap-2 text-xs font-heading font-semibold text-[var(--accent)]">
                  <BookOpen className="w-4 h-4" />
                  <span>{activeTopic.category} • Guia Explicativo</span>
                </div>
                <span className="text-xs font-body text-[var(--text-muted)] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activeTopic.readTime}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-main)] mb-4 leading-snug">
                {activeTopic.title}
              </h3>

              <div className="p-4 rounded-xl bg-[var(--bg-secondary)]/70 border border-[var(--border-subtle)]/30 mb-6">
                <p className="font-body text-xs sm:text-sm text-[var(--text-main)] leading-relaxed italic">
                  &ldquo;{activeTopic.summary}&rdquo;
                </p>
              </div>

              {/* Parágrafos de Conteúdo */}
              <div className="space-y-4 font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {activeTopic.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Disclaimer OAB */}
              <div className="mt-8 pt-4 border-t border-[var(--border-subtle)]/25 flex items-center gap-2 text-[0.6875rem] text-[var(--text-muted)] font-body">
                <ShieldAlert className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                <span>{activeTopic.oabDisclaimer}</span>
              </div>

              {/* Botão de Dúvidas Direto no WhatsApp */}
              <div className="mt-6 pt-6 border-t border-[var(--border-subtle)]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-heading text-[var(--text-main)] font-semibold text-center sm:text-left">
                  Ficou com alguma dúvida ou deseja avaliar o seu caso?
                </span>
                <a
                  href={getWhatsAppMessageUrl(activeTopic.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-[#B58A80] hover:bg-[#9D736A] text-white py-2.5 px-5 text-xs font-semibold gap-2 shadow-sm inline-flex items-center cursor-pointer flex-shrink-0"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                  <span>Tirar Dúvida no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODELO MOBILE (< MD): Formato Acordeão Expansível Elegante                */}
        {/* ========================================================================= */}
        <div className="md:hidden space-y-3.5">
          {EDUCATIONAL_TOPICS.map((topic) => {
            const isExpanded = expandedMobileTopicId === topic.id;

            return (
              <div
                key={topic.id}
                className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleMobileTopic(topic.id)}
                  className="w-full p-5 text-left flex items-start justify-between gap-3 focus:outline-none cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[0.625rem] font-heading uppercase tracking-wider font-bold text-[var(--accent)]">
                        {topic.category}
                      </span>
                      <span className="text-[0.625rem] font-body text-[var(--text-muted)] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {topic.readTime}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-sm text-[var(--text-main)] leading-snug">
                      {topic.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--accent)] flex-shrink-0 transition-transform duration-300 mt-1 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-5 pb-6 pt-0 border-t border-[var(--border-subtle)]/20 animate-fade-in-down space-y-3.5">
                    <div className="p-3 rounded-xl bg-[var(--bg-secondary)]/70 border border-[var(--border-subtle)]/30 mt-3">
                      <p className="font-body text-xs text-[var(--text-main)] italic leading-relaxed">
                        &ldquo;{topic.summary}&rdquo;
                      </p>
                    </div>

                    <div className="space-y-3 font-body text-xs text-[var(--text-muted)] leading-relaxed">
                      {topic.content.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    <div className="pt-2 text-[0.625rem] text-[var(--text-muted)] flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0" />
                      <span>{topic.oabDisclaimer}</span>
                    </div>

                    <div className="pt-2">
                      <a
                        href={getWhatsAppMessageUrl(topic.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full btn-pill bg-[#B58A80] hover:bg-[#9D736A] text-white py-2.5 px-4 text-xs font-semibold gap-2 shadow-sm inline-flex items-center justify-center cursor-pointer"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                        <span>Esclarecer Dúvida no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}