
import { useState, useEffect } from 'react';

interface Translations {
  pt: {
    nav: {
      about: string;
      skills: string;
      contact: string;
    };
    header: {
      headline: string;
      summary: string;
      linkedinBtn: string;
      githubBtn: string;
    };
    about: {
      title: string;
      content: string;
    };
    skills: {
      title: string;
    };
    contact: {
      title: string;
      email: string;
      linkedin: string;
      github: string;
      callToAction: string;
    };
    footer: {
      copyright: string;
      repository: string;
    };
    theme: {
      toggle: string;
    };
  };
  en: {
    nav: {
      about: string;
      skills: string;
      contact: string;
    };
    header: {
      headline: string;
      summary: string;
      linkedinBtn: string;
      githubBtn: string;
    };
    about: {
      title: string;
      content: string;
    };
    skills: {
      title: string;
    };
    contact: {
      title: string;
      email: string;
      linkedin: string;
      github: string;
      callToAction: string;
    };
    footer: {
      copyright: string;
      repository: string;
    };
    theme: {
      toggle: string;
    };
  };
}

const translations: Translations = {
  pt: {
    nav: {
      about: 'Sobre',
      skills: 'Habilidades',
      contact: 'Contato'
    },
    header: {
      headline: 'Autodidata, Desenvolvedor Full Stack, C#, React, .NET',
      summary: 'Apaixonado por tecnologia, matemática e física. Atualmente cursando Engenharia Mecatrônica na UTFPR.',
      linkedinBtn: 'Ver LinkedIn',
      githubBtn: 'Ver GitHub'
    },
    about: {
      title: 'Sobre',
      content: 'Sou desenvolvedor Full Stack com experiência em .NET e React. Autodidata, sempre em busca de aprendizado contínuo. Atualmente curso Engenharia Mecatrônica na UTFPR, o que fortalece minha base em matemática e física aplicadas. Gosto de arquitetura limpa, testes e boas práticas.'
    },
    skills: {
      title: 'Habilidades'
    },
    contact: {
      title: 'Contato',
      email: 'Enviar e-mail',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      callToAction: 'Veja meus projetos no GitHub ou fale comigo no LinkedIn'
    },
    footer: {
      copyright: '© 2025 Rubens Cordeiro',
      repository: 'Repositório do site'
    },
    theme: {
      toggle: 'Alternar tema'
    }
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      contact: 'Contact'
    },
    header: {
      headline: 'Self-taught, Full Stack Developer, C#, React, .NET',
      summary: 'Passionate about technology, mathematics and physics. Currently studying Mechatronics Engineering at UTFPR.',
      linkedinBtn: 'View LinkedIn',
      githubBtn: 'View GitHub'
    },
    about: {
      title: 'About',
      content: 'I am a Full Stack developer with experience in .NET and React. Self-taught, always seeking continuous learning. Currently studying Mechatronics Engineering at UTFPR, which strengthens my foundation in applied mathematics and physics. I enjoy clean architecture, testing and best practices.'
    },
    skills: {
      title: 'Skills'
    },
    contact: {
      title: 'Contact',
      email: 'Send email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      callToAction: 'Check out my projects on GitHub or connect with me on LinkedIn'
    },
    footer: {
      copyright: '© 2025 Rubens Cordeiro',
      repository: 'Site repository'
    },
    theme: {
      toggle: 'Toggle theme'
    }
  }
};

const skills = [
  'C#', '.NET', 'ASP.NET Core', 'WPF', 'Windows Forms', 'Entity Framework', 'React', 'TypeScript', 'JavaScript',
  'HTML', 'CSS', 'GitHub Actions', 'Azure', 'SQL Server', 'PostgreSQL', 
  'RESTful APIs', 'DDD', 'Clean Architecture', 'Unit Testing', 'Integration Testing'
];

export default function HomePage() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [darkMode, setDarkMode] = useState(false);

  const t = translations[language];

  useEffect(() => {
    // Load theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    // Load language preference
    const savedLanguage = localStorage.getItem('language') as 'pt' | 'en';
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Pular para o conteúdo principal
      </a>

      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="assets/header-background.jpg"
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 py-16">
          {/* Language and Theme Toggle */}
          <div className="flex justify-end gap-4 mb-8">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors whitespace-nowrap"
              aria-label={`Mudar idioma para ${language === 'pt' ? 'English' : 'Português'}`}
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              onClick={toggleTheme}
              className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors whitespace-nowrap"
              aria-label={t.theme.toggle}
            >
              {darkMode ? <i className="ri-sun-line"></i> : <i className="ri-moon-line"></i>}
            </button>
          </div>

          <div className="text-center lg:text-left lg:flex lg:items-center lg:gap-12">
            <div className="lg:flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Rubens Cordeiro
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
                {t.header.headline}
              </p>
              <p className="text-base lg:text-lg text-gray-700 dark:text-gray-400 mb-8 max-w-2xl">
                {t.header.summary}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://www.linkedin.com/in/rubenscordeirobr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-linkedin-fill"></i>
                  {t.header.linkedinBtn}
                </a>
                <a
                  href="https://github.com/rubenscordeirobr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-github-fill"></i>
                  {t.header.githubBtn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-40">
        <div className="max-w-4xl mx-auto px-6">
          <ul className="flex justify-center gap-8 py-4">
            {[
              { key: 'about', label: t.nav.about },
              { key: 'skills', label: t.nav.skills },
              { key: 'contact', label: t.nav.contact }
            ].map(({ key, label }) => (
              <li key={key}>
                <button
                  onClick={() => scrollToSection(key)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content" className="max-w-4xl mx-auto px-6 py-12">
        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">{t.about.title}</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t.about.content}
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">{t.skills.title}</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">{t.contact.title}</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {t.contact.callToAction}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:rubens.cordeiro@live.com"
                className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-mail-line"></i>
                {t.contact.email}
              </a>
              <a
                href="https://www.linkedin.com/in/rubenscordeirobr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-linkedin-line"></i>
                {t.contact.linkedin}
              </a>
              <a
                href="https://github.com/rubenscordeirobr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-github-line"></i>
                {t.contact.github}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400">
              {t.footer.copyright}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/rubenscordeirobr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap"
              >
                {t.footer.repository}
              </a>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
