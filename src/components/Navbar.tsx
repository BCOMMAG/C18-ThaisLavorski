"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/context/ThemeContext";
import { Menu, X, ChevronDown, ArrowUpRight, ShieldCheck, Heart, Scale, Users, FileText } from "lucide-react";
import { WhatsAppIcon } from "./SocialIcons";

export function Navbar() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [officeDropdownOpen, setOfficeDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const [mobileOfficeOpen, setMobileOfficeOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  const officeRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar dropdowns ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (officeRef.current && !officeRef.current.contains(event.target as Node)) {
        setOfficeDropdownOpen(false);
      }
      if (areasRef.current && !areasRef.current.contains(event.target as Node)) {
        setAreasDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Travar o scroll quando o menu mobile estiver aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Escolhe a logo apropriada de acordo com o fundo/tema
  const currentLogo = !isScrolled
    ? "/logo_sem_fundo_usarnomodoescuro.png"
    : theme === "dark"
    ? "/logo_sem_fundo_usarnomodoescuro.png"
    : "/logo_sem_fundo_usarnomodoclaro.png";

  const drawerLogo =
    theme === "dark"
      ? "/logo_sem_fundo_usarnomodoescuro.png"
      : "/logo_sem_fundo_usarnomodoclaro.png";

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileOfficeOpen(false);
    setMobileAreasOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. LOGO MOBILE FIXA SEPARADA - RIGOROSAMENTE DESACOPLADA DO MENU E ELEVADA (CLIQUE RETORNA AO TOPO DA PÁGINA INICIAL) */}
      <div className="lg:hidden fixed top-1 sm:top-1.5 left-2 sm:left-3 z-[45] pointer-events-none">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center group focus:outline-none pointer-events-auto"
          aria-label="Ir para a página inicial"
        >
          <div className="relative h-[4.25rem] sm:h-[4.65rem] w-28 sm:w-32 max-w-[32vw] transition-transform duration-300 group-hover:scale-105">
            <Image
              src={currentLogo}
              alt={OFFICE_INFO.name}
              fill
              priority
              className="object-contain object-left drop-shadow-md"
              sizes="(max-width: 640px) 120px, 140px"
            />
          </div>
        </Link>
      </div>

      {/* 2. BARRA DE NAVEGAÇÃO PRINCIPAL */}
      <header
        className={`fixed top-0 left-0 right-0 w-full max-w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg-primary)]/95 backdrop-blur-md shadow-sm border-b border-[var(--border-subtle)]/30 py-2 sm:py-2.5"
            : "bg-transparent py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
          <div className="relative min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Espaçador Mobile para proteger a área da logo sem afetar a altura dos botões */}
            <div className="lg:hidden w-28 sm:w-32 max-w-[32vw] h-6 flex-shrink-0 pointer-events-none" />

            {/* Logo Desktop: Totalmente Desacoplada da altura da barra do menu (tamanho ajustado -15%, posicionada levemente mais abaixo, clique retorna ao topo) */}
            <div className="hidden lg:flex items-center justify-start relative flex-shrink-0 w-52 xl:w-60 h-10 pointer-events-none">
              <div className="absolute left-0 top-[54%] -translate-y-1/2 pointer-events-auto">
                <Link
                  href="/"
                  onClick={handleLogoClick}
                  className="flex items-center group focus:outline-none"
                  aria-label="Ir para a página inicial"
                >
                  <div className="relative h-[4.75rem] xl:h-[5.5rem] w-52 xl:w-60 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={currentLogo}
                      alt={OFFICE_INFO.name}
                      fill
                      priority
                      className="object-contain object-left drop-shadow-sm"
                      sizes="(min-width: 1280px) 300px, 260px"
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* Menu Desktop */}
            <nav
              className={`hidden lg:flex items-center gap-6 xl:gap-8 text-[0.75rem] font-heading uppercase tracking-wider transition-colors duration-300 ${
                !isScrolled ? "text-white/95" : "text-[var(--text-main)]"
              }`}
            >
              <Link href="#inicio" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                Início
              </Link>

              {/* Submenu 1: Escritório */}
              <div
                ref={officeRef}
                className="relative"
                onMouseEnter={() => setOfficeDropdownOpen(true)}
                onMouseLeave={() => setOfficeDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setOfficeDropdownOpen(!officeDropdownOpen)}
                  className="inline-flex items-center gap-1.5 transition-colors py-2 focus:outline-none cursor-pointer hover:text-[var(--accent)] font-semibold"
                  aria-expanded={officeDropdownOpen}
                >
                  <span className="editorial-link">Escritório</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      officeDropdownOpen ? "rotate-180 text-[var(--accent)]" : "opacity-70"
                    }`}
                  />
                </button>

                {officeDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 rounded-2xl shadow-xl py-3 px-2 z-50 animate-fade-in-down">
                    <Link
                      href="#sobre"
                      onClick={() => setOfficeDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-[var(--bg-secondary)] transition-colors text-xs font-heading font-semibold text-[var(--text-main)] hover:text-[var(--accent)]"
                    >
                      <ShieldCheck className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                      <span>Sobre a Dra. Thais</span>
                    </Link>
                    <Link
                      href="#pilares"
                      onClick={() => setOfficeDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-[var(--bg-secondary)] transition-colors text-xs font-heading font-semibold text-[var(--text-main)] hover:text-[var(--accent)]"
                    >
                      <Scale className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                      <span>Pilares Institucionais</span>
                    </Link>
                    <Link
                      href="#como-atuamos"
                      onClick={() => setOfficeDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-[var(--bg-secondary)] transition-colors text-xs font-heading font-semibold text-[var(--text-main)] hover:text-[var(--accent)]"
                    >
                      <FileText className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                      <span>Metodologia & Etapas</span>
                    </Link>
                    <Link
                      href="#avaliacoes"
                      onClick={() => setOfficeDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-[var(--bg-secondary)] transition-colors text-xs font-heading font-semibold text-[var(--text-main)] hover:text-[var(--accent)]"
                    >
                      <Users className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                      <span>Depoimentos no Google</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Submenu 2: Especialidades */}
              <div
                ref={areasRef}
                className="relative"
                onMouseEnter={() => setAreasDropdownOpen(true)}
                onMouseLeave={() => setAreasDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setAreasDropdownOpen(!areasDropdownOpen)}
                  className="inline-flex items-center gap-1.5 transition-colors py-2 focus:outline-none cursor-pointer hover:text-[var(--accent)] font-semibold"
                  aria-expanded={areasDropdownOpen}
                >
                  <span className="editorial-link">Áreas de Atuação</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      areasDropdownOpen ? "rotate-180 text-[var(--accent)]" : "opacity-70"
                    }`}
                  />
                </button>

                {areasDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 rounded-2xl shadow-xl py-3 px-2 z-50 animate-fade-in-down">
                    <Link
                      href="#atuacao"
                      onClick={() => setAreasDropdownOpen(false)}
                      className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-[var(--bg-secondary)] transition-colors text-xs font-heading font-semibold text-[var(--text-main)] hover:text-[var(--accent)]"
                    >
                      <Heart className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block">Divórcio & Partilha</span>
                        <span className="text-[0.6875rem] font-normal text-[var(--text-muted)] font-body">Consensual e litigioso, extrajudicial e judicial</span>
                      </div>
                    </Link>
                    <Link
                      href="#atuacao"
                      onClick={() => setAreasDropdownOpen(false)}
                      className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-[var(--bg-secondary)] transition-colors text-xs font-heading font-semibold text-[var(--text-main)] hover:text-[var(--accent)]"
                    >
                      <Scale className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block">Inventário & Sucessões</span>
                        <span className="text-[0.6875rem] font-normal text-[var(--text-muted)] font-body">Herança em cartório, alvarás e redução de ITCMD</span>
                      </div>
                    </Link>
                    <Link
                      href="#atuacao"
                      onClick={() => setAreasDropdownOpen(false)}
                      className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-[var(--bg-secondary)] transition-colors text-xs font-heading font-semibold text-[var(--text-main)] hover:text-[var(--accent)]"
                    >
                      <ShieldCheck className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block">Planejamento Sucessório</span>
                        <span className="text-[0.6875rem] font-normal text-[var(--text-muted)] font-body">Testamentos, doações com usufruto e pactos</span>
                      </div>
                    </Link>
                    <Link
                      href="#atuacao"
                      onClick={() => setAreasDropdownOpen(false)}
                      className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-[var(--bg-secondary)] transition-colors text-xs font-heading font-semibold text-[var(--text-main)] hover:text-[var(--accent)]"
                    >
                      <Users className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block">Pensão & Guarda de Filhos</span>
                        <span className="text-[0.6875rem] font-normal text-[var(--text-muted)] font-body">Fixação, execução, revisional e convivência</span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link href="#educativo" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                Orientações
              </Link>

              <Link href="#faq" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                Dúvidas
              </Link>

              <Link href="#contato" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                Contato
              </Link>

              <Link
                href="/links"
                className="transition-colors editorial-link hover:text-[var(--accent)] text-[var(--accent)] font-bold flex items-center gap-1"
              >
                <span>Bio / Links</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </nav>

            {/* Ações da Direita: ThemeToggle + Botão WhatsApp + Menu Hambúrguer */}
            <div className="relative z-10 flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
              <ThemeToggle />

              {/* Botão de WhatsApp Desktop Oficial Verde */}
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex btn-pill bg-[#25D366] hover:bg-[#20ba59] text-white py-2 sm:py-2.5 px-3.5 sm:px-4 gap-2 text-xs font-semibold shadow-md hover-lift transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>

              {/* Botão Hambúrguer Mobile */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl text-[var(--text-main)] hover:bg-[var(--bg-secondary)] transition-colors focus:outline-none cursor-pointer"
                aria-label="Abrir menu de navegação"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* 3. MENU MOBILE DRAWER - CAMADA Z-INDEX [60] (SOBREPÕE TUDO AO ABRIR) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm lg:hidden animate-fade-in">
          <div className="absolute top-0 right-0 bottom-0 w-full sm:w-80 max-w-[85vw] bg-[var(--bg-card)] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            
            {/* Topo do Drawer com Logo e Fechar */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/30 mb-6">
                <Link
                  href="/"
                  onClick={(e) => {
                    closeMobileMenu();
                    handleLogoClick(e);
                  }}
                  className="flex items-center focus:outline-none"
                  aria-label="Ir para a página inicial"
                >
                  <div className="relative h-12 w-34">
                    <Image
                      src={drawerLogo}
                      alt={OFFICE_INFO.name}
                      fill
                      className="object-contain object-left"
                      sizes="136px"
                    />
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-secondary)] transition-colors focus:outline-none cursor-pointer"
                  aria-label="Fechar menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Links do Menu Mobile */}
              <div className="space-y-1 font-heading text-sm uppercase tracking-wider font-semibold">
                <Link
                  href="#inicio"
                  onClick={closeMobileMenu}
                  className="block py-3 px-3 rounded-xl hover:bg-[var(--bg-secondary)] text-[var(--text-main)] hover:text-[var(--accent)] transition-colors"
                >
                  Início
                </Link>

                {/* Acordeão Mobile: O Escritório */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileOfficeOpen(!mobileOfficeOpen)}
                    className="w-full flex items-center justify-between py-3 px-3 rounded-xl hover:bg-[var(--bg-secondary)] text-[var(--text-main)] transition-colors cursor-pointer"
                  >
                    <span>Escritório</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileOfficeOpen ? "rotate-180 text-[var(--accent)]" : ""}`}
                    />
                  </button>
                  {mobileOfficeOpen && (
                    <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-[var(--accent)]/40 ml-4 my-1 text-xs">
                      <Link
                        href="#sobre"
                        onClick={closeMobileMenu}
                        className="block py-2 text-[var(--text-muted)] hover:text-[var(--accent)]"
                      >
                        Sobre a Dra. Thais
                      </Link>
                      <Link
                        href="#pilares"
                        onClick={closeMobileMenu}
                        className="block py-2 text-[var(--text-muted)] hover:text-[var(--accent)]"
                      >
                        Pilares Institucionais
                      </Link>
                      <Link
                        href="#como-atuamos"
                        onClick={closeMobileMenu}
                        className="block py-2 text-[var(--text-muted)] hover:text-[var(--accent)]"
                      >
                        Metodologia & Etapas
                      </Link>
                      <Link
                        href="#avaliacoes"
                        onClick={closeMobileMenu}
                        className="block py-2 text-[var(--text-muted)] hover:text-[var(--accent)]"
                      >
                        Depoimentos no Google
                      </Link>
                    </div>
                  )}
                </div>

                {/* Acordeão Mobile: Áreas de Atuação */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                    className="w-full flex items-center justify-between py-3 px-3 rounded-xl hover:bg-[var(--bg-secondary)] text-[var(--text-main)] transition-colors cursor-pointer"
                  >
                    <span>Áreas de Atuação</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileAreasOpen ? "rotate-180 text-[var(--accent)]" : ""}`}
                    />
                  </button>
                  {mobileAreasOpen && (
                    <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-[var(--accent)]/40 ml-4 my-1 text-xs">
                      <Link
                        href="#atuacao"
                        onClick={closeMobileMenu}
                        className="block py-2 text-[var(--text-muted)] hover:text-[var(--accent)]"
                      >
                        Divórcio & Partilha de Bens
                      </Link>
                      <Link
                        href="#atuacao"
                        onClick={closeMobileMenu}
                        className="block py-2 text-[var(--text-muted)] hover:text-[var(--accent)]"
                      >
                        Inventário & Herança
                      </Link>
                      <Link
                        href="#atuacao"
                        onClick={closeMobileMenu}
                        className="block py-2 text-[var(--text-muted)] hover:text-[var(--accent)]"
                      >
                        Planejamento Sucessório Familiar
                      </Link>
                      <Link
                        href="#atuacao"
                        onClick={closeMobileMenu}
                        className="block py-2 text-[var(--text-muted)] hover:text-[var(--accent)]"
                      >
                        Pensão Alimentícia & Guarda
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="#educativo"
                  onClick={closeMobileMenu}
                  className="block py-3 px-3 rounded-xl hover:bg-[var(--bg-secondary)] text-[var(--text-main)] hover:text-[var(--accent)] transition-colors"
                >
                  Orientações Educativas
                </Link>

                <Link
                  href="#faq"
                  onClick={closeMobileMenu}
                  className="block py-3 px-3 rounded-xl hover:bg-[var(--bg-secondary)] text-[var(--text-main)] hover:text-[var(--accent)] transition-colors"
                >
                  Dúvidas Frequentes
                </Link>

                <Link
                  href="#contato"
                  onClick={closeMobileMenu}
                  className="block py-3 px-3 rounded-xl hover:bg-[var(--bg-secondary)] text-[var(--text-main)] hover:text-[var(--accent)] transition-colors"
                >
                  Contato & Localização
                </Link>

                <Link
                  href="/links"
                  onClick={closeMobileMenu}
                  className="block py-3 px-3 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] font-bold flex items-center justify-between"
                >
                  <span>Central de Links (/links)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Base do Drawer: Botão WhatsApp + Informações */}
            <div className="pt-6 border-t border-[var(--border-subtle)]/30 space-y-4">
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-pill bg-[#25D366] hover:bg-[#20ba59] text-white py-3 gap-2 text-xs font-semibold shadow-md flex items-center justify-center cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>

              <div className="text-[0.6875rem] text-[var(--text-muted)] font-body text-center leading-relaxed">
                <p>{OFFICE_INFO.addressShort}</p>
                <p className="mt-1 text-[var(--accent)] font-heading font-semibold">{OFFICE_INFO.oabText}</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}