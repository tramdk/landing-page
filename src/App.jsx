import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

function App() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="nav__logo">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav__logo-icon">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#paint0_linear)" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M2 17L12 22L22 17" stroke="url(#paint1_linear)" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="url(#paint2_linear)" strokeWidth="2.5" strokeLinejoin="round" />
            <defs>
              <linearGradient id="paint0_linear" x1="2" y1="7" x2="22" y2="7" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4ade80" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="2" y1="19.5" x2="22" y2="19.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4ade80" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="paint2_linear" x1="2" y1="14.5" x2="22" y2="14.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4ade80" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          <span className="nav__logo-text">TRAMDK</span>
        </a>
        <ul className="nav__links">
          <li><a href="#about" className="nav__link">{t('nav.about')}</a></li>
          <li><a href="#skills" className="nav__link">{t('nav.skills')}</a></li>
          <li><a href="#experience" className="nav__link">{t('nav.experience')}</a></li>
          <li><a href="#projects" className="nav__link">{t('nav.projects')}</a></li>
          <li><a href="#contact" className="nav__link">{t('nav.contact')}</a></li>
        </ul>
        <div className="nav__right">
          <div className="lang-switcher">
            <button
              className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >EN</button>
            <button
              className={`lang-btn ${i18n.language === 'vi' ? 'active' : ''}`}
              onClick={() => changeLanguage('vi')}
            >VN</button>
          </div>
          <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a href="#contact" className="btn btn--ghost btn--sm">
            <span className="btn__inner">{t('nav.cta')}</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero__video">
          <video
            src="assets/bg-hero.mp4"
            autoPlay loop muted playsInline preload="auto"
          />
        </div>
        <div className="hero__bottom-fade"></div>

        <div className="hero__layer">
          <div style={{ height: '64px', flexShrink: 0 }}></div>
          <div className="hero__body">
            <div className="hero__text">
              <div className="hero__badge">
                <span className="hero__badge-dot"></span>
                <span className="hero__badge-label">
                  {t('hero.badge')} &nbsp;·&nbsp; <strong>{t('hero.location')}</strong>
                </span>
              </div>

              <h1 className="hero__name hero__blur">
                <span className="gradient-text">{t('hero.name')}</span>
              </h1>

              <p className="hero__role hero__blur">{t('hero.role')}</p>

              <p className="hero__desc">
                {t('hero.desc')}
              </p>

              <div className="hero__actions">
                <a href="#projects" className="btn btn--solid">
                  <span className="btn__inner">{t('hero.viewProjects')}</span>
                </a>
                <a href="#contact" className="btn btn--ghost">
                  <span className="btn__inner">{t('hero.contactMe')}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="hero__scroll">
            <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
              <rect x="0.7" y="0.7" width="12.6" height="20.6" rx="6.3" stroke="currentColor" strokeWidth="1.4" opacity="0.4" />
              <circle cx="7" cy="7" r="2" fill="currentColor" opacity="0.5" />
            </svg>
            <span>{t('hero.scroll')}</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="label">{t('about.title')}</div>
        <div className="about-grid">
          <div className="profile-card card">
            <div className="profile-photo">
              <img src="avatar.png" alt="Dang Ngoc Tram" />
            </div>
            <div className="profile-name">{t('hero.name')}</div>
            <div className="profile-role">Full-Stack .NET Developer</div>
            <div className="profile-loc">Phu Nhuan, HCM City</div>
            <div className="badge-open">
              <span className="badge-open-dot"></span> {t('about.workStatus')}
            </div>
            <div className="profile-links">
              <a href="tel:+84968598259" className="profile-link">Call</a>
              <a href="mailto:tramdk1997@gmail.com" className="profile-link">Email</a>
            </div>
          </div>

          <div className="about-right">
            <div className="about-bio">
              <p dangerouslySetInnerHTML={{ __html: t('about.bio') }} />
              <br />
              <p dangerouslySetInnerHTML={{ __html: t('about.bio2') }} />
            </div>

            <div className="stats-grid">
              <div className="stat">
                <span className="stat__num gradient-text">5+</span>
                <span className="stat__label">{t('about.exp')}</span>
              </div>
              <div className="stat">
                <span className="stat__num gradient-text">4+</span>
                <span className="stat__label">{t('about.netExp')}</span>
              </div>
              <div className="stat">
                <span className="stat__num gradient-text">2</span>
                <span className="stat__label">{t('about.projectsCount')}</span>
              </div>
              <div className="stat">
                <span className="stat__num gradient-text">20+</span>
                <span className="stat__label">{t('about.team')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="label">{t('skills.title')}</div>
        <div className="skills-grid">
          {['fe', 'be', 'db', 'perf', 'arch', 'ai'].map((s, i) => (
            <div key={i} className="skill-card card">
              <div className="skill-icon">
                {s === 'fe' && '🖥️'}
                {s === 'be' && '⚙️'}
                {s === 'db' && '🗄️'}
                {s === 'perf' && '🚀'}
                {s === 'arch' && '🏛️'}
                {s === 'ai' && '🤖'}
              </div>
              <div className="skill-title">{t(`skills.${s}.title`)}</div>
              <div className="skill-desc">{t(`skills.${s}.desc`)}</div>
              <div className="tags">
                {s === 'fe' && ['HTML/CSS', 'JS/TS', 'Angular'].map((tag, idx) => <span key={idx} className="tag">{tag}</span>)}
                {s === 'be' && ['.NET Core', 'C#', 'REST API'].map((tag, idx) => <span key={idx} className="tag">{tag}</span>)}
                {s === 'db' && ['SQL Server', 'PostgreSQL', 'MongoDB'].map((tag, idx) => <span key={idx} className="tag">{tag}</span>)}
                {s === 'perf' && ['Caching', 'Redis', 'Big Data'].map((tag, idx) => <span key={idx} className="tag">{tag}</span>)}
                {s === 'arch' && ['Microservice', 'SOLID', 'Clean Code'].map((tag, idx) => <span key={idx} className="tag">{tag}</span>)}
                {s === 'ai' && ['Data Pipeline', 'ML Integration'].map((tag, idx) => <span key={idx} className="tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="label">{t('experience.title')}</div>
        <div className="exp-card card">
          <div className="exp-header">
            <div>
              <div className="exp-period">{t('experience.duration')}</div>
              <div className="exp-company">{t('experience.company')}</div>
              <div className="exp-role-label">{t('experience.role')}</div>
            </div>
          </div>
          <div className="exp-items">
            {t('experience.items', { returnObjects: true }).map((item, idx) => (
              <div key={idx} className="exp-item">
                <div className="exp-item-dot"></div>
                <div>
                  <div className="exp-item-title">{item.title}</div>
                  <div className="exp-item-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="label">{t('projects.title')}</div>
        <div className="proj-grid">
          {t('projects.list', { returnObjects: true }).map((p, i) => (
            <div key={i} className="proj-card card">
              <div className="proj-top">
                <div>
                  <div className="proj-period">{p.period}</div>
                  <div className="proj-name">{p.name}</div>
                  <div className="proj-role-t">{p.role}</div>
                </div>
                <div className="proj-team-badge">{p.team}</div>
              </div>
              <ul className="proj-list">
                {p.desc.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      {/* SIDE PROJECTS */}
      <section id="side-projects" className="section">
        <div className="label">{t('sideProjects.title')}</div>
        <div className="proj-grid">
          {t('sideProjects.list', { returnObjects: true }).map((p, i) => (
            <div key={i} className="proj-card card">
              <div className="proj-top">
                <div className="proj-name">{p.name}</div>
              </div>
              <div className="proj-role-t" style={{ fontSize: '11px', fontWeight: '600', color: 'var(--c-dim)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>
                {p.role}
              </div>
              <p className="proj-desc-text" style={{ fontSize: '14px', color: 'var(--c-dim)', lineHeight: '1.8', margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      {/* EDUCATION */}
      <section id="education" className="section">
        <div className="label">{t('education.title')}</div>
        <div className="edu-card card">
          <div className="edu-icon">🎓</div>
          <div>
            <div className="edu-school">{t('education.school')}</div>
            <div className="edu-dept">{t('education.dept')}</div>
            <div className="edu-period">{t('education.period')}</div>
            <div className="edu-degree">{t('education.degree')}</div>
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section id="interests" className="section" style={{ paddingTop: 0 }}>
        <div className="label">{t('interests.title')}</div>
        <div className="edu-card card">
          <div className="edu-icon">🌟</div>
          <div>
            <div className="edu-school" style={{ marginBottom: '12px' }}>
              {i18n.language === 'vi' ? 'Đam mê & Phong cách sống' : 'Passions & Lifestyle'}
            </div>
            <div className="interest-row">
              {t('interests.items', { returnObjects: true }).map((item, idx) => (
                <div key={idx} className="interest-chip">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-wrap">
        <div className="contact-halo"></div>
        <div className="contact-inner">
          <h2 className="contact-heading">{t('contact.title')}</h2>
          <p className="contact-sub">{t('contact.desc')}</p>
          <div className="contact-links">
            <a href="tel:+84968598259" className="contact-tile">
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              +84 968 598 259
            </a>
            <a href="mailto:tramdk1997@gmail.com" className="contact-tile">
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              tramdk1997@gmail.com
            </a>
            <a href="https://tramdk.github.io/my-portfolio/" target="_blank" rel="noopener noreferrer" className="contact-tile">
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </span>
              Official Resume
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>TRAMDK</div>
        <div>{t('footer.copy')}</div>
      </footer>
    </div>
  );
}

export default App;
