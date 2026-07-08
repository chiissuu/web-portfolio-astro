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
        title: "Tools | chiissuu",
        description:
          "Herramientas, lenguajes y tecnologías que Jesús utiliza en desarrollo web, datos, bases de datos, diseño y automatización.",
      },
      services: {
        title: "Services | chiissuu",
        description:
          "Servicios y áreas de trabajo de Jesús: desarrollo web, bases de datos, análisis de datos, automatización y diseño visual.",
      },
    },
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Skills",
      education: "Formación",
      contact: "Contacto",
      portfolio: "Portafolio",
      tools: "Tools",
      services: "Services",
      github: "GitHub",
      cv: "CV",
      language: "Idioma",
      menu: "Abrir menú",
      logo: "Ir al inicio",
    },
    hero: {
      tag: "Software Engineering Student · Data Science · Visual Design",
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
            "Soy estudiante de Ingeniería del Software en U-TAD. Durante mi formación he trabajado con programación, desarrollo web, bases de datos, arquitectura de software y proyectos full-stack.",
            "Actualmente estoy orientando mi perfil hacia Data Science y Machine Learning, usando mi base técnica para construir soluciones más analíticas, útiles y escalables.",
          ],
        },
        {
          title: "Lo que me diferencia",
          paragraphs: [
            "Además de la parte técnica, tengo experiencia en diseño gráfico, creación de banners, portadas, thumbnails y recursos visuales para proyectos personales.",
            "También vengo de entornos competitivos como los esports, donde desarrollé disciplina, comunicación, consistencia y adaptación bajo presión.",
          ],
        },
        {
          title: "Diseño gráfico y creatividad",
          paragraphs: [
            "Además de mi formación técnica, tengo experiencia creando banners, portadas, thumbnails, flyers y recursos visuales para proyectos personales y contenido digital. Esta parte creativa influye en mi forma de entender interfaces, identidad visual y comunicación.",
          ],
          link: {
            text: "Ver archivo de diseño gráfico",
            href: "https://drive.google.com/drive/folders/1e5ltPjqbFB5bYeWJhEbrtPfGYHE3329-?usp=sharing",
          },
        },
      ],
      competitive: {
        title: "Competitividad y mentalidad",
        intro:
          "Una parte importante de mi forma de trabajar viene de mi experiencia compitiendo en esports como Overwatch, Counter-Strike,",
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
        outro: "y otros títulos competitivos.",
        paragraphs: [
          "Esta etapa me ayudó a desarrollar disciplina, constancia, control emocional, comunicación en equipo y capacidad de adaptación en situaciones de presión.",
          "Intento aplicar esa mentalidad a mis proyectos: mejorar de forma continua, cuidar los detalles, aceptar feedback y contribuir a un entorno de equipo donde todos puedan rendir mejor.",
        ],
      },
    },
    projects: {
      title: "Proyectos destacados (añadir más adelante)",
      intro:
        "En esta sección se exponen 3 de los proyectos que quiero destacar para mi portfolio, cada uno de ellos expone una faceta de mis especialidades.",
      items: [
        {
          title: "Proyecto Full-stack (Automatizacion de la empresa GFLOW)",
          description:
            "Aplicación web con frontend, backend y base de datos. Ideal para mostrar tu capacidad de construir un sistema completo.",
          image: "/assets/projects/project-1.png",
          alt: "Capturas del proyecto 1",
          tags: ["HTML", "CSS", "JavaScript", "MySQL"],
          links: ["GitHub", "Demo"],
        },
        {
          title: "Proyecto Data Science (Hacer un proyecto sobre la prediccion de algo (mundial??))",
          description:
            "Análisis de datos con visualizaciones, limpieza de datos y conclusiones. Perfecto para tu enfoque futuro.",
          image: "/assets/projects/project-2.png",
          alt: "Capturas del proyecto 2",
          tags: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
          links: ["GitHub", "Notebook"],
        },
        {
          title: "Proyecto Visual / UI o Proyecto Delivery y modificarlo para añdirle una Interfaz Grafica con diseño",
          description:
            "Galería o landing page enfocada en diseño visual, identidad, creatividad y experiencia de usuario.",
          image: "/assets/projects/project-3.png",
          alt: "Capturas del proyecto 3",
          tags: ["Diseño", "UX/UI", "CSS", "Branding"],
          links: ["Ver diseño", "Archivo"],
        },
      ],
    },
    skills: {
      title: "Skills técnicas",
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
      degree: "Grado en Ingeniería del Software con Mención en Ingeniería de Datos",
      paragraphs: [
        "Actualmente curso el Grado en Ingeniería del Software en U-tad, Madrid, con mención en Ingeniería de Datos. Esta formación me está proporcionando una base sólida en desarrollo de software, programación, algoritmia, estructuras de datos, sistemas operativos, redes, bases de datos, arquitectura de software y diseño de soluciones tecnológicas.",
        "A lo largo del grado he trabajado asignaturas orientadas tanto a la construcción de software como al análisis y tratamiento de datos, incluyendo programación orientada a objetos, análisis y diseño de algoritmos, bases de datos, diseño de software, probabilidad y estadística, sistemas operativos y proyectos aplicados de ingeniería.",
        "Mi especialización en Ingeniería de Datos refuerza este perfil técnico hacia áreas como arquitecturas de datos, sistemas distribuidos, procesamiento de grandes volúmenes de información, aprendizaje automático, visualización de datos e inteligencia artificial.",
      ],
      languagesTitle: "Idiomas",
      languages: [
        ["Español", "Nativo"],
        ["Inglés", "C1"],
        ["Alemán", "A2"],
      ],
    },
    contact: {
      title: "Contacto",
      text:
        "Estoy abierto a colaborar en proyectos, seguir aprendiendo y construir mi perfil dentro del software, los datos y la tecnología.",
      links: ["Email", "GitHub", "Linktree", "LinkedIn"],
    },
    footer: {
      text: "© 2026 Jesús León Romero Atienza · chiissuu",
      backToTop: "Volver arriba",
    },
    toolsPage: {
      eyebrow: "Stack y herramientas",
      title: "Tools",
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
      title: "Services",
      intro:
        "Servicios y tipos de proyectos en los que puedo aportar desde mi perfil de software, datos, diseño y mentalidad de mejora continua.",
      services: [
        {
          title: "Desarrollo web y full-stack",
          text:
            "Construcción de aplicaciones web con frontend, backend y base de datos, cuidando estructura, mantenibilidad y experiencia de usuario.",
        },
        {
          title: "Bases de datos y automatización",
          text:
            "Modelado de datos, consultas, integración de procesos y automatización de tareas para hacer sistemas más claros y útiles.",
        },
        {
          title: "Data Science y visualización",
          text:
            "Limpieza, análisis y visualización de datos para transformar información en conclusiones comprensibles.",
        },
        {
          title: "Diseño visual para proyectos digitales",
          text:
            "Creación de recursos visuales, interfaces y piezas gráficas que ayuden a comunicar mejor una idea o producto.",
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
      tools: "Tools",
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
      title: "Featured projects (to be added later)",
      intro:
        "This section presents three projects I want to highlight in my portfolio, each one showing a different side of my specialties.",
      items: [
        {
          title: "Full-stack project (GFLOW company automation)",
          description:
            "A web application with frontend, backend, and database. A strong way to show the ability to build a complete system.",
          image: "/assets/projects/project-1.png",
          alt: "Screenshots from project 1",
          tags: ["HTML", "CSS", "JavaScript", "MySQL"],
          links: ["GitHub", "Demo"],
        },
        {
          title: "Data Science project (prediction project idea, possibly World Cup related)",
          description:
            "Data analysis with visualizations, data cleaning, and conclusions. A good fit for my future focus.",
          image: "/assets/projects/project-2.png",
          alt: "Screenshots from project 2",
          tags: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
          links: ["GitHub", "Notebook"],
        },
        {
          title: "Visual / UI project or Delivery project redesigned with a graphical interface",
          description:
            "A gallery or landing page focused on visual design, identity, creativity, and user experience.",
          image: "/assets/projects/project-3.png",
          alt: "Screenshots from project 3",
          tags: ["Design", "UX/UI", "CSS", "Branding"],
          links: ["View design", "Archive"],
        },
      ],
    },
    skills: {
      title: "Technical skills",
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
      paragraphs: [
        "I am currently studying Software Engineering at U-tad in Madrid, with a specialization in Data Engineering. This education is giving me a strong foundation in software development, programming, algorithms, data structures, operating systems, networks, databases, software architecture, and the design of technological solutions.",
        "Throughout the degree, I have worked on subjects focused both on building software and on analyzing and processing data, including object-oriented programming, algorithm analysis and design, databases, software design, probability and statistics, operating systems, and applied engineering projects.",
        "My specialization in Data Engineering strengthens this technical profile toward areas such as data architectures, distributed systems, large-scale information processing, machine learning, data visualization, and artificial intelligence.",
      ],
      languagesTitle: "Languages",
      languages: [
        ["Spanish", "Native"],
        ["English", "C1"],
        ["German", "A2"],
      ],
    },
    contact: {
      title: "Contact",
      text:
        "I am open to collaborating on projects, continuing to learn, and building my profile within software, data, and technology.",
      links: ["Email", "GitHub", "Linktree", "LinkedIn"],
    },
    footer: {
      text: "© 2026 Jesús León Romero Atienza · chiissuu",
      backToTop: "Back to top",
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
        "Services and project types where I can contribute through software, data, design, and a continuous-improvement mindset.",
      services: [
        {
          title: "Web and full-stack development",
          text:
            "Building web applications with frontend, backend, and databases while keeping structure, maintainability, and user experience in mind.",
        },
        {
          title: "Databases and automation",
          text:
            "Data modeling, queries, process integration, and task automation to make systems clearer and more useful.",
        },
        {
          title: "Data Science and visualization",
          text:
            "Data cleaning, analysis, and visualization to turn information into understandable conclusions.",
        },
        {
          title: "Visual design for digital projects",
          text:
            "Creating visual assets, interfaces, and graphic pieces that help communicate an idea or product more effectively.",
        },
      ],
    },
  },
};

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  return lang in translations ? lang : defaultLang;
}

export function withBase(path) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}
