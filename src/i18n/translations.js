export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

export const pathMap = {
  home: {
    es: "/es/",
    en: "/en/",
  },
  tools: {
    es: "/es/tools/",
    en: "/en/tools/",
  },
  services: {
    es: "/es/services/",
    en: "/en/services/",
  },
};

export const translations = {
  es: {
    seo: {
      home: {
        title: "chiissuu | Portfolio de Jesús León",
        description:
          "Portfolio web de Jesús, estudiante de Ingeniería del Software enfocado en desarrollo full-stack, Data Science y diseño visual.",
      },
      tools: {
        title: "Herramientas | chiissuu",
        description:
          "Herramientas, lenguajes y tecnologías que Jesús utiliza en desarrollo web, datos, bases de datos, diseño y automatización.",
      },
      services: {
        title: "Servicios | chiissuu",
        description:
          "Servicios y áreas de trabajo de Jesús: desarrollo web, bases de datos, análisis de datos, automatización y diseño visual.",
      },
    },
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      education: "Formación",
      contact: "Contacto",
      portfolio: "Portafolio",
      process: "Enfoque",
      tools: "Habilidades",
      services: "Servicios",
      github: "GitHub",
      cv: "CV",
      language: "Idioma",
      menu: "Abrir menú",
      logo: "Ir al inicio",
    },
    hero: {
      tag: "Ingeniería del Software · Data Science · Diseño visual",
      title: "Hola, soy Jesús.",
      subtitle: "Construyo proyectos que combinan software, datos y creatividad visual.",
      text:
        "Estudiante de Ingeniería del Software en U-TAD, Madrid. Me estoy formando en desarrollo full-stack, bases de datos, Data Science y diseño de experiencias digitales.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Contactar",
      imageAlt: "Retrato provisional de Jesús",
      caption: ["Software", "Data", "Design"],
    },
    about: {
      title: "Sobre mí",
      cards: [
        {
          title: "Perfil",
          paragraphs: [
            "Soy estudiante de Ingeniería del Software en U-TAD, con interés en desarrollo full-stack, bases de datos y ciencia de datos. Me gusta crear proyectos funcionales con una presentación visual cuidada.",
          ],
        },
        {
          title: "Lo que me diferencia",
          paragraphs: [
            "Combino una base técnica con experiencia en diseño visual, creación de recursos gráficos e interfaces digitales. Esto me permite entender los proyectos tanto desde la lógica como desde la experiencia del usuario.",
          ],
        },
        {
          title: "Diseño gráfico y creatividad",
          paragraphs: [
            "Además del desarrollo, he trabajado en banners, portadas, thumbnails, flyers y recursos visuales para proyectos personales y contenido digital. Esta parte creativa influye en mi forma de diseñar interfaces y comunicar ideas.",
          ],
          link: {
            text: "Ver archivo de diseño gráfico",
            href: "https://drive.google.com/drive/folders/1e5ltPjqbFB5bYeWJhEbrtPfGYHE3329-?usp=sharing",
          },
        },
      ],
      competitive: {
        title: "Competitividad y mentalidad",
        intro: "Mi experiencia en entornos competitivos me ha ayudado a desarrollar constancia, comunicación, análisis bajo presión y mejora continua.",
        links: [
          {
            text: "Fortnite PC",
            href: "https://fortnitetracker.com/profile/kbm/Rayo%20Vallecano%209/events?region=GLOBAL&sortBy=placement",
          },
          {
            text: "Fortnite Console",
            href: "https://fortnitetracker.com/profile/gamepad/Rayo%20Vallecano%209/events?region=GLOBAL&sortBy=pr",
          },
          {
            text: "Clash Royale",
            href: "https://github.com/chiissuu/chiissuu/blob/main/assets/merget1s4.jpg",
          },
        ],
        outro: "",
        paragraphs: [
          "Intento aplicar esa mentalidad a cada proyecto técnico y creativo, cuidando los detalles y aceptando feedback para mejorar de forma constante.",
        ],
      },
    },
    projects: {
      title: "Proyectos destacados",
      intro:
        "Una selección de proyectos que representan mi perfil entre desarrollo web, ciencia de datos y diseño visual.",
      items: [
        {
          title: "Web corporativa G-FLOW",
          visualTitle: "Web G-FLOW",
          category: "FULL-STACK",
          description:
            "Aplicación web corporativa con estructura de páginas, componentes reutilizables y enfoque en presentación profesional de servicios industriales.",
          image: "/assets/projects/project-1.png",
          alt: "Placeholder visual del proyecto Web corporativa G-FLOW",
          tags: ["HTML", "CSS", "JavaScript", "UI"],
          links: [
            { label: "GitHub", href: "" },
            { label: "Demo", href: "" },
          ],
        },
        {
          title: "Dashboard de análisis de datos",
          visualTitle: "Dashboard de datos",
          category: "DATA SCIENCE",
          description:
            "Proyecto orientado a limpieza, visualización y análisis de datos para extraer conclusiones útiles a partir de información estructurada.",
          image: "/assets/projects/project-2.png",
          alt: "Placeholder visual del proyecto Dashboard de análisis de datos",
          tags: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
          links: [
            { label: "GitHub", href: "" },
            { label: "Notebook", href: "" },
          ],
        },
        {
          title: "Sistema visual para interfaces",
          visualTitle: "Sistema visual UI",
          category: "VISUAL / UI",
          description:
            "Propuesta visual centrada en identidad, composición, recursos gráficos y experiencia de usuario para una interfaz digital.",
          image: "/assets/projects/project-3.png",
          alt: "Placeholder visual del proyecto Sistema visual para interfaces",
          tags: ["Diseño", "UX/UI", "CSS", "Branding"],
          links: [
            { label: "Ver diseño", href: "" },
            { label: "Archivo", href: "" },
          ],
        },
      ],
    },
    skills: {
      title: "Habilidades técnicas",
      intro:
        "Tecnologías y herramientas que utilizo en proyectos de desarrollo, datos y diseño visual.",
      groups: [
        {
          title: "Lenguajes",
          items: [
            ["Java", "java.png"],
            ["Python", "python.png"],
            ["C", "c.png"],
            ["C++", "cpp.png"],
            ["JavaScript", "javascript.png"],
            ["PHP", "php.png"],
            ["R", "r.png"],
          ],
        },
        {
          title: "Web",
          items: [
            ["HTML", "html.png"],
            ["CSS", "css.png"],
            ["JavaScript", "javascript.png"],
            ["Node.js", "nodejs.png"],
            ["PHP", "php.png"],
          ],
        },
        {
          title: "Bases de datos",
          items: [
            ["MySQL", "mysql.png"],
            ["PostgreSQL", "postgresql.png"],
            ["MariaDB", "mariadb.png"],
            ["MongoDB", "mongodb.png"],
          ],
        },
        {
          title: "Data Science",
          items: [
            ["Pandas", "pandas.png"],
            ["NumPy", "numpy.png"],
            ["Matplotlib", "matplotlib.png"],
            ["Seaborn", "seaborn.png"],
            ["Scikit-learn", "scikit-learn.png"],
            ["Jupyter", "jupyter.png"],
          ],
        },
        {
          title: "Herramientas",
          items: [
            ["Git", "git.png"],
            ["GitHub", "github.svg"],
            ["Docker", "docker.png"],
            ["AWS", "aws.png"],
            ["Linux", "linux.png"],
            ["Windows", "windows.png"],
          ],
        },
        {
          title: "Diseño",
          items: [
            ["Photoshop", "photoshop.png"],
            ["GIMP", "gimp.png"],
            ["Photopea", "photopea.png"],
            ["Canva", "canva.png"],
          ],
        },
      ],
    },
    education: {
      title: "Formación",
      degree: "Grado en Ingeniería del Software",
      subtitle: "Mención en Ingeniería de Datos · U-TAD, Madrid",
      paragraphs: [
        "Actualmente curso Ingeniería del Software en U-TAD, Madrid, con mención en Ingeniería de Datos.",
        "Mi formación combina desarrollo de software, bases de datos, algoritmia, arquitectura, sistemas y análisis de datos.",
      ],
      highlights: [
        "Desarrollo de software y proyectos full-stack",
        "Bases de datos, estructuras de datos y diseño de sistemas",
        "Probabilidad, estadística, visualización y aprendizaje automático",
        "Arquitecturas de datos, sistemas distribuidos e inteligencia artificial",
      ],
      languagesTitle: "Idiomas",
      languagesDescription:
        "Idiomas que utilizo en contextos académicos, técnicos y de documentación.",
      languages: [
        ["Español", "Nativo"],
        ["Inglés", "C1"],
        ["Alemán", "A2"],
      ],
    },
    contact: {
      title: "Contacto",
      text:
        "Estoy abierto a colaborar en proyectos, seguir aprendiendo y construir soluciones digitales con enfoque técnico y visual.",
      cta: "¿Tienes una idea, propuesta o proyecto?",
      links: ["Email", "GitHub", "LinkedIn", "CV"],
    },
    footer: {
      text: "© 2026 Jesús León Romero Atienza · chiissuu",
      backToTop: "Volver arriba",
      links: ["GitHub", "LinkedIn", "Contacto"],
    },
    process: {
      title: "Enfoque",
      intro: "Una forma de trabajar simple: entender el problema, diseñar con intención, construir con criterio y mejorar con feedback.",
      steps: [
        ["01", "Análisis", "Definir objetivos, contexto y requisitos antes de construir."],
        ["02", "Diseño visual", "Ordenar jerarquía, interfaz y comunicación para que el proyecto sea claro."],
        ["03", "Desarrollo", "Crear soluciones funcionales, mantenibles y conectadas con datos reales."],
        ["04", "Mejora", "Iterar, aprender y pulir detalles a partir de pruebas y feedback."],
      ],
    },
    toolsPage: {
      eyebrow: "Stack y herramientas",
      title: "Herramientas",
      intro:
        "Estas son las tecnologías y herramientas que uso o estoy incorporando para construir proyectos de software, datos, bases de datos y diseño visual.",
      sections: [
        {
          title: "Trabajo técnico",
          text:
            "Lenguajes, entornos y herramientas que forman la base de mis proyectos de desarrollo web, backend, automatización y análisis de datos.",
        },
        {
          title: "Datos y visualización",
          text:
            "Herramientas orientadas a limpiar, analizar, visualizar y extraer conclusiones a partir de datos.",
        },
        {
          title: "Diseño y comunicación visual",
          text:
            "Software que utilizo para crear banners, portadas, thumbnails, flyers y recursos visuales para proyectos personales y contenido digital.",
        },
      ],
    },
    servicesPage: {
      eyebrow: "Áreas de trabajo",
      title: "Servicios",
      intro:
        "Áreas en las que puedo aportar valor combinando desarrollo, datos y diseño visual.",
      services: [
        {
          title: "Desarrollo web",
          text:
            "Creación de interfaces, landing pages y estructuras web funcionales con enfoque responsive y visual cuidado.",
        },
        {
          title: "Proyectos de datos",
          text:
            "Limpieza, análisis y visualización de datos para transformar información en conclusiones útiles.",
        },
        {
          title: "Diseño visual / UI",
          text:
            "Diseño de recursos gráficos, composición visual e interfaces digitales con atención a jerarquía y experiencia de usuario.",
        },
      ],
    },
  },
  en: {
    seo: {
      home: {
        title: "chiissuu | Jesús León Portfolio",
        description:
          "Jesús' portfolio website. Software Engineering student focused on full-stack development, Data Science, and visual design.",
      },
      tools: {
        title: "Tools | chiissuu",
        description:
          "Tools, languages, and technologies Jesús uses across web development, data, databases, design, and automation.",
      },
      services: {
        title: "Services | chiissuu",
        description:
          "Services and work areas by Jesús: web development, databases, data analysis, automation, and visual design.",
      },
    },
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
      portfolio: "Portfolio",
      process: "Process",
      tools: "Skills",
      services: "Services",
      github: "GitHub",
      cv: "CV",
      language: "Language",
      menu: "Open menu",
      logo: "Go to home",
    },
    hero: {
      tag: "Software Engineering Student · Data Science · Visual Design",
      title: "Hi, I'm Jesús.",
      subtitle: "I build projects that combine software, data, and visual creativity.",
      text:
        "Software Engineering student at U-TAD in Madrid. I am building my profile around full-stack development, databases, Data Science, and digital experience design.",
      primaryCta: "View projects",
      secondaryCta: "Contact",
      imageAlt: "Temporary portrait of Jesús",
      caption: ["Software", "Data", "Design"],
    },
    about: {
      title: "About",
      cards: [
        {
          title: "Profile",
          paragraphs: [
            "I am a Software Engineering student at U-TAD. During my training, I have worked with programming, web development, databases, software architecture, and full-stack projects.",
            "I am currently steering my profile toward Data Science and Machine Learning, using my technical foundation to build more analytical, useful, and scalable solutions.",
          ],
        },
        {
          title: "What sets me apart",
          paragraphs: [
            "Beyond the technical side, I have experience in graphic design, creating banners, covers, thumbnails, and visual assets for personal projects.",
            "I also come from competitive environments such as esports, where I developed discipline, communication, consistency, and adaptability under pressure.",
          ],
        },
        {
          title: "Graphic design and creativity",
          paragraphs: [
            "Alongside my technical education, I have experience creating banners, covers, thumbnails, flyers, and visual assets for personal projects and digital content. This creative side shapes how I understand interfaces, visual identity, and communication.",
          ],
          link: {
            text: "View graphic design archive",
            href: "https://drive.google.com/drive/folders/1e5ltPjqbFB5bYeWJhEbrtPfGYHE3329-?usp=sharing",
          },
        },
      ],
      competitive: {
        title: "Competitive mindset",
        intro:
          "A significant part of how I work comes from my experience competing in esports such as Overwatch, Counter-Strike,",
        links: [
          {
            text: "Fortnite PC",
            href: "https://fortnitetracker.com/profile/kbm/Rayo%20Vallecano%209/events?region=GLOBAL&sortBy=placement",
          },
          {
            text: "Fortnite Console",
            href: "https://fortnitetracker.com/profile/gamepad/Rayo%20Vallecano%209/events?region=GLOBAL&sortBy=pr",
          },
          {
            text: "Clash Royale",
            href: "https://github.com/chiissuu/chiissuu/blob/main/assets/merget1s4.jpg",
          },
        ],
        outro: "and other competitive titles.",
        paragraphs: [
          "That stage helped me develop discipline, consistency, emotional control, team communication, and the ability to adapt under pressure.",
          "I try to apply that mindset to my projects: improving continuously, caring about details, accepting feedback, and contributing to a team environment where everyone can perform better.",
        ],
      },
    },
    projects: {
      title: "Featured projects",
      intro:
        "A selection of projects that represent my profile across web development, data science, and visual design.",
      items: [
        {
          title: "G-FLOW corporate website",
          visualTitle: "G-FLOW web",
          category: "FULL-STACK",
          description:
            "Corporate web application with page structure, reusable components, and a professional presentation of industrial services.",
          image: "/assets/projects/project-1.png",
          alt: "Visual placeholder for the G-FLOW corporate website project",
          tags: ["HTML", "CSS", "JavaScript", "UI"],
          links: [
            { label: "GitHub", href: "" },
            { label: "Demo", href: "" },
          ],
        },
        {
          title: "Data analysis dashboard",
          visualTitle: "Data dashboard",
          category: "DATA SCIENCE",
          description:
            "Project focused on data cleaning, visualization, and analysis to extract useful conclusions from structured information.",
          image: "/assets/projects/project-2.png",
          alt: "Visual placeholder for the data analysis dashboard project",
          tags: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
          links: [
            { label: "GitHub", href: "" },
            { label: "Notebook", href: "" },
          ],
        },
        {
          title: "Visual system for interfaces",
          visualTitle: "Visual UI system",
          category: "VISUAL / UI",
          description:
            "Visual proposal focused on identity, composition, graphic assets, and user experience for a digital interface.",
          image: "/assets/projects/project-3.png",
          alt: "Visual placeholder for the visual system for interfaces project",
          tags: ["Design", "UX/UI", "CSS", "Branding"],
          links: [
            { label: "View design", href: "" },
            { label: "Archive", href: "" },
          ],
        },
      ],
    },
    skills: {
      title: "Technical skills",
      intro:
        "Technologies and tools I use across development, data, and visual design projects.",
      groups: [
        {
          title: "Languages",
          items: [
            ["Java", "java.png"],
            ["Python", "python.png"],
            ["C", "c.png"],
            ["C++", "cpp.png"],
            ["JavaScript", "javascript.png"],
            ["PHP", "php.png"],
            ["R", "r.png"],
          ],
        },
        {
          title: "Web",
          items: [
            ["HTML", "html.png"],
            ["CSS", "css.png"],
            ["JavaScript", "javascript.png"],
            ["Node.js", "nodejs.png"],
            ["PHP", "php.png"],
          ],
        },
        {
          title: "Databases",
          items: [
            ["MySQL", "mysql.png"],
            ["PostgreSQL", "postgresql.png"],
            ["MariaDB", "mariadb.png"],
            ["MongoDB", "mongodb.png"],
          ],
        },
        {
          title: "Data Science",
          items: [
            ["Pandas", "pandas.png"],
            ["NumPy", "numpy.png"],
            ["Matplotlib", "matplotlib.png"],
            ["Seaborn", "seaborn.png"],
            ["Scikit-learn", "scikit-learn.png"],
            ["Jupyter", "jupyter.png"],
          ],
        },
        {
          title: "Tools",
          items: [
            ["Git", "git.png"],
            ["GitHub", "github.svg"],
            ["Docker", "docker.png"],
            ["AWS", "aws.png"],
            ["Linux", "linux.png"],
            ["Windows", "windows.png"],
          ],
        },
        {
          title: "Design",
          items: [
            ["Photoshop", "photoshop.png"],
            ["GIMP", "gimp.png"],
            ["Photopea", "photopea.png"],
            ["Canva", "canva.png"],
          ],
        },
      ],
    },
    education: {
      title: "Education",
      degree: "Bachelor's Degree in Software Engineering with a specialization in Data Engineering",
      subtitle: "Data Engineering specialization · U-TAD, Madrid",
      paragraphs: [
        "I am currently studying Software Engineering at U-TAD in Madrid, with a specialization in Data Engineering.",
        "My training combines software development, databases, algorithms, architecture, systems, and data analysis.",
      ],
      highlights: [
        "Software development and full-stack projects",
        "Databases, data structures, and system design",
        "Probability, statistics, visualization, and machine learning",
        "Data architectures, distributed systems, and artificial intelligence",
      ],
      languagesTitle: "Languages",
      languagesDescription:
        "Languages I use in academic, technical, and documentation contexts.",
      languages: [
        ["Spanish", "Native"],
        ["English", "C1"],
        ["German", "A2"],
      ],
    },
    contact: {
      title: "Contact",
      text:
        "I am open to collaborating on projects, continuing to learn, and building digital solutions with a technical and visual approach.",
      cta: "Do you have an idea, proposal, or project?",
      links: ["Email", "GitHub", "LinkedIn", "CV"],
    },
    footer: {
      text: "© 2026 Jesús León Romero Atienza · chiissuu",
      backToTop: "Back to top",
      links: ["GitHub", "LinkedIn", "Contact"],
    },
    process: {
      title: "Process",
      intro: "A simple way of working: understand the problem, design with intent, build with criteria, and improve through feedback.",
      steps: [
        ["01", "Analysis", "Define goals, context, and requirements before building."],
        ["02", "Visual design", "Organize hierarchy, interface, and communication so the project is clear."],
        ["03", "Development", "Build functional, maintainable solutions connected to real data."],
        ["04", "Improvement", "Iterate, learn, and refine details through testing and feedback."],
      ],
    },
    toolsPage: {
      eyebrow: "Stack and tools",
      title: "Tools",
      intro:
        "These are the technologies and tools I use or am adding to build software, data, database, and visual design projects.",
      sections: [
        {
          title: "Technical work",
          text:
            "Languages, environments, and tools that form the foundation of my web development, backend, automation, and data analysis projects.",
        },
        {
          title: "Data and visualization",
          text:
            "Tools focused on cleaning, analyzing, visualizing, and extracting conclusions from data.",
        },
        {
          title: "Design and visual communication",
          text:
            "Software I use to create banners, covers, thumbnails, flyers, and visual resources for personal projects and digital content.",
        },
      ],
    },
    servicesPage: {
      eyebrow: "Work areas",
      title: "Services",
      intro:
        "Areas where I can add value by combining development, data, and visual design.",
      services: [
        {
          title: "Web development",
          text:
            "Creating interfaces, landing pages, and functional web structures with a responsive approach and careful visual design.",
        },
        {
          title: "Data projects",
          text:
            "Cleaning, analyzing, and visualizing data to turn information into useful conclusions.",
        },
        {
          title: "Visual design / UI",
          text:
            "Designing graphic assets, visual composition, and digital interfaces with attention to hierarchy and user experience.",
        },
      ],
    },
  },
};

export function getLangFromUrl(url) {
  const lang = url.pathname.split("/").find((segment) => segment in translations);
  return lang ?? defaultLang;
}

export function withBase(path) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}
