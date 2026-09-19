import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  Compass,
  Luggage,
  Mail,
  Map,
  Menu,
  PlaneLanding,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { copy, flags, type Lang } from "./content";

const languages: Lang[] = ["pt", "en", "de", "nl"];
const whatsappNumber = "351918859403";
const emailAddress = "visit@montanhaoredor.com";

function getInitialLanguage(): Lang {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang") as Lang | null;
  if (requested && languages.includes(requested)) return requested;
  return "pt";
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionHeading({ label, title, intro, light = false }: { label: string; title: string; intro?: string; light?: boolean }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2 className={light ? "light" : ""}>{title}</h2>
      {intro && <p className={light ? "section-intro light-copy" : "section-intro"}>{intro}</p>}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>(getInitialLanguage);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    const url = new URL(window.location.href);
    if (lang === "pt") url.searchParams.delete("lang");
    else url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url);
  }, [lang]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const whatsappUrl = useMemo(() => {
    const messages: Record<Lang, string> = {
      pt: "Olá, gostaria de receber informação sobre os serviços de Transfers & Tours MontanhAoRedor.",
      en: "Hello, I would like information about MontanhAoRedor Transfers & Tours.",
      de: "Hallo, ich möchte Informationen über MontanhAoRedor Transfers & Tours erhalten.",
      nl: "Hallo, ik ontvang graag informatie over MontanhAoRedor Transfers & Tours.",
    };
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messages[lang])}`;
  }, [lang]);

  const navItems = [
    { id: "servicos", label: t.nav.services },
    { id: "viagem", label: t.nav.journey },
    { id: "percursos", label: t.nav.routes },
    { id: "tarifas", label: t.nav.fares },
  ];

  const navigate = (id: string) => {
    setMenuOpen(false);
    window.setTimeout(() => scrollToSection(id), 60);
  };

  return (
    <div className="site-shell">
      <div className="status-bar"><span className="status-dot" />{t.status}</div>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <button className="brand-button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="MontanhAoRedor — início">
          <img src="/assets/montanhaoredor-logo.png" alt="MontanhAoRedor" />
          <span className="brand-descriptor">Transfers <i>&</i> Tours</span>
        </button>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => <button key={item.id} onClick={() => scrollToSection(item.id)}>{item.label}</button>)}
          <button onClick={() => scrollToSection("contacto")} className="nav-contact">{t.nav.contact}</button>
        </nav>

        <div className="header-actions">
          <div className="language-switcher" aria-label="Idioma">
            {languages.map((language) => (
              <button key={language} className={lang === language ? "active" : ""} onClick={() => setLang(language)} aria-label={`Idioma ${flags[language]}`}>
                {flags[language]}
              </button>
            ))}
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label={t.menu}><Menu size={22} /></button>
        </div>
      </header>

      <div className={`mobile-panel ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <button className="close-button" onClick={() => setMenuOpen(false)} aria-label={t.close}><X size={24} /></button>
        <img src="/assets/montanhaoredor-logo.png" alt="MontanhAoRedor" className="mobile-logo" />
        <div className="mobile-links">
          {navItems.map((item, index) => (
            <button key={item.id} onClick={() => navigate(item.id)}><small>0{index + 1}</small>{item.label}<ChevronRight size={20} /></button>
          ))}
          <button onClick={() => navigate("contacto")}><small>05</small>{t.nav.contact}<ChevronRight size={20} /></button>
        </div>
      </div>

      <main>
        <section className="hero" aria-label="Transfers e tours privados">
          <img className="hero-image" src="/assets/hero-montanha.webp" alt={t.hero.photoAlt} />
          <div className="hero-shade" />
          <div className="hero-grid" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}<br /><em>{t.hero.italic}</em></h1>
            <p className="hero-description">{t.hero.description}</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => scrollToSection("servicos")}>{t.hero.primary}<ArrowRight size={17} /></button>
              <a className="button button-ghost" href={whatsappUrl} target="_blank" rel="noreferrer">{t.hero.secondary}</a>
            </div>
          </div>
          <button className="scroll-cue" onClick={() => scrollToSection("introducao")} aria-label={t.hero.primary}>
            <span>Scroll</span><ArrowDown size={18} />
          </button>
        </section>

        <section className="proof-strip" aria-label="Características do serviço">
          {t.proof.map((item) => (
            <div className="proof-item" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>
          ))}
        </section>

        <section id="introducao" className="intro-section content-section">
          <div className="intro-aside"><span className="vertical-word">MontanhAoRedor</span></div>
          <div className="intro-main reveal">
            <p className="eyebrow">{t.intro.label}</p>
            <h2>{t.intro.title}</h2>
            <p>{t.intro.text}</p>
          </div>
          <blockquote>{t.intro.quote}</blockquote>
        </section>

        <section id="servicos" className="services-section content-section">
          <SectionHeading label={t.services.label} title={t.services.title} intro={t.services.intro} />
          <div className="service-grid">
            {t.services.items.map((item, index) => {
              const icons = [PlaneLanding, Compass, Route, ShieldCheck];
              const Icon = icons[index];
              return (
                <article className="service-card" key={item.title}>
                  <div className="service-number">0{index + 1}</div>
                  <Icon size={28} strokeWidth={1.4} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span>{item.note}</span>
                </article>
              );
            })}
          </div>
        </section>

        <section id="viagem" className="journey-section">
          <div className="journey-image-wrap">
            <img src="/assets/airport-welcome.webp" alt={t.journey.imageAlt} loading="lazy" />
            <div className="image-badge"><Luggage size={18} /><span>{t.proof[1].value}</span></div>
          </div>
          <div className="journey-content">
            <SectionHeading label={t.journey.label} title={t.journey.title} />
            <p className="journey-lead">{t.journey.text}</p>
            <div className="steps">
              {t.journey.steps.map((step) => (
                <div className="step" key={step.number}>
                  <span>{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="comfort-section">
          <div className="comfort-copy">
            <SectionHeading label={t.comfort.label} title={t.comfort.title} light />
            <p>{t.comfort.text}</p>
            <div className="comfort-points">
              {t.comfort.points.map((point) => <span key={point}><Check size={15} />{point}</span>)}
            </div>
          </div>
          <div className="comfort-image"><img src="/assets/private-comfort.webp" alt={t.comfort.imageAlt} loading="lazy" /></div>
        </section>

        <section id="percursos" className="routes-section">
          <div className="routes-visual">
            <img src="/assets/tour-atlantico.webp" alt={t.routes.imageAlt} loading="lazy" />
            <div className="route-line" aria-hidden="true"><span /><span /><span /></div>
          </div>
          <div className="routes-content">
            <SectionHeading label={t.routes.label} title={t.routes.title} intro={t.routes.intro} />
            <div className="route-list">
              {t.routes.items.map((item, index) => (
                <article key={item.area}>
                  <div className="route-index">{String(index + 1).padStart(2, "0")}</div>
                  <div><span>{item.area}</span><h3>{item.title}</h3><p>{item.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tarifas" className="fares-section content-section">
          <SectionHeading label={t.fares.label} title={t.fares.title} intro={t.fares.intro} />
          <div className="fare-grid">
            {t.fares.cards.map((card) => (
              <article className="fare-card" key={card.title}>
                <span className="fare-type">{card.type}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <strong>{card.price}</strong>
              </article>
            ))}
          </div>
          <div className="availability-notice">
            <Sparkles size={24} strokeWidth={1.4} />
            <div><h3>{t.fares.noticeTitle}</h3><p>{t.fares.noticeText}</p></div>
            <button disabled>{t.fares.noticeButton}</button>
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <div className="contact-map" aria-hidden="true">
            <Map size={300} strokeWidth={0.45} />
            <span className="map-dot dot-one" /><span className="map-dot dot-two" /><span className="map-dot dot-three" />
          </div>
          <div className="contact-card">
            <p className="eyebrow">{t.contact.label}</p>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
            <div className="contact-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">{t.contact.whatsapp}<ArrowRight size={17} /></a>
              <a className="button button-outline" href={`mailto:${emailAddress}`}><Mail size={16} />{t.contact.email}</a>
            </div>
            <small>{t.contact.note}</small>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <img src="/assets/montanhaoredor-logo.png" alt="MontanhAoRedor" />
          <div><strong>MontanhAoRedor</strong><span>Transfers & Tours</span></div>
        </div>
        <p>{t.footer.line}</p>
        <p className="footer-note">{t.footer.privacy}</p>
      </footer>

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={t.contact.whatsapp}>
        <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3C9.1 3 3.5 8.4 3.5 15.1c0 2.3.7 4.5 1.9 6.4L3 29l7.8-2.4c1.6.9 3.4 1.3 5.2 1.3 6.9 0 12.5-5.4 12.5-12.1S22.9 3 16 3Zm0 22.7c-1.7 0-3.3-.4-4.7-1.2l-.5-.3-4.6 1.4 1.5-4.4-.3-.5c-1.1-1.7-1.7-3.6-1.7-5.6C5.7 9.7 10.3 5.3 16 5.3s10.3 4.4 10.3 9.8S21.7 25.7 16 25.7Zm5.7-7.8c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.8-2.9-1.5-4-3.4-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.3 3.4 1.5 3.6c.2.2 2.5 3.7 6 5.2 2.2.9 3.1 1 4.2.8.7-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.2-.3-.4-.4-.7-.5Z" /></svg>
      </a>
    </div>
  );
}
