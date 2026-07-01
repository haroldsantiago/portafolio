import { Icons } from "@/components/icons";
import {
  HomeIcon,
  Braces,
  Database,
  FileCode2,
  GitBranch,
  Github,
  Languages,
  Palette,
  PenTool,
  Server,
} from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Fastapi } from "@/components/ui/svgs/fastapi";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Ubuntu } from "@/components/ui/svgs/ubuntu";
import { Vps } from "@/components/ui/svgs/vps";
import { Ai } from "@/components/ui/svgs/ai";
import { Agents } from "@/components/ui/svgs/agents";

export const DATA = {
  name: "Harold Santiago Vergara",
  initials: "HV",
  url: "https://haroldsantiago.github.io",
  location: "Caicedonia, Colombia",
  locationLink: "https://www.google.com/maps/place/Caicedonia,+Valle+del+Cauca",
  title: "Tecnólogo en Desarrollo de Software",
  pronouns: "él/he",
  status: "Disponible para proyectos",
  timezone: "America/Bogota",
  timezoneLabel: "COT",
  description:
    "Desarrollador web full-stack apasionado por crear experiencias digitales atractivas y funcionales. Me especializo en React y Django, con experiencia en diseño UI/UX. Siempre aprendiendo, siempre construyendo.",
  summary:
    "¡Hola! Soy Harold, desarrollador web enfocado en construir soluciones que combinan creatividad y tecnología. Me especializo en desarrollo con [React y Django](/#skills), y disfruto diseñar interfaces que resuelvan problemas reales. Soy estudiante de Tecnología en Desarrollo de Software en la [Universidad del Valle](https://ejecafetero.univalle.edu.co), donde participé en el semillero de investigación IDICA y trabajé en proyectos de software para el sector educativo y de investigación. Mi objetivo es crear productos que no solo se vean bien, sino que mejoren la experiencia de las personas que los usan.",
  avatarUrl: "/fotomia.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "IA", icon: Ai },
    { name: "Agents", icon: Agents },
    { name: "Django", icon: Server },
    { name: "FastAPI", icon: Fastapi },
    { name: "Python", icon: Python },
    { name: "Node.js", icon: Nodejs },
    { name: "JavaScript", icon: Braces },
    { name: "HTML", icon: FileCode2 },
    { name: "CSS", icon: Palette },
    { name: "TailwindCSS", icon: Tailwindcss },
    { name: "MySQL", icon: Database },
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Github },
    { name: "Ubuntu", icon: Ubuntu },
    { name: "VPS", icon: Vps },
    { name: "UI/UX Design", icon: PenTool },
    { name: "Inglés A2", icon: Languages },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Inicio" }],
  contact: {
    email: "santitover1@gmail.com",
    tel: "+573043515689",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/haroldsantiago",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harold-vergara-torres-639661321",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Santitover",
        icon: Icons.x,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/__haarold",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Enviar correo",
        url: "mailto:santitover1@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "NWBIQ",
      href: "https://nwbiq.com",
      badges: [] as string[],
      location: "Remoto",
      title: "Developer",
      logoUrl: "/Nwbiq.webp",
      start: "2026",
      end: "Presente",
      description:
        "Parte del equipo de desarrollo en NWBIQ, ecosistema de innovación tecnológica nacido en el ámbito académico. Participación en la construcción de soluciones SaaS escalables y sistemas integrados de gestión empresarial, trabajando en proyectos como OpenPH (gestión de propiedad horizontal), plataformas e-commerce y sistemas integrados de gestión. Enfoque en transformación digital con acompañamiento 360° a clientes, desde el diseño de arquitectura hasta la implementación y optimización continua.",
    },
    {
      company: "Universidad del Valle — Semillero IDICA",
      href: "https://ejecafetero.univalle.edu.co",
      badges: [] as string[],
      location: "Caicedonia, Valle del Cauca",
      title: "Investigador en formación / Desarrollador",
      logoUrl: "/logounivalle.png",
      start: "2024",
      end: "2026",
      description:
        "Participación en el semillero de investigación IDICA, desarrollando soluciones de software para proyectos académicos y de investigación. Colaboré en el sistema RICA para el control de acceso y registro de usuarios en las sedes de Caicedonia y el Nodo Sevilla.",
    },
    {
      company: "Colegio Rafael Pombo",
      href: "#",
      badges: [] as string[],
      location: "Tuluá, Valle del Cauca",
      title: "Desarrollador Web",
      logoUrl: "/srpLogo.png",
      start: "2024",
      end: "2026",
      description:
        "Diseño y desarrollo del sistema SRP para la gestión de notas y la gestión administrativa de la institución educativa, utilizando React, Django y MySQL.",
    },
  ],
  education: [
    {
      school: "Universidad del Valle — Sede Caicedonia",
      href: "https://ejecafetero.univalle.edu.co",
      degree: "Tecnología en Desarrollo de Software",
      logoUrl: "/logounivalle.png",
      start: "2023",
      end: "Presente",
    },
  ],
  projects: [
    {
      title: "OpenPH — Gestión de Propiedad Horizontal",
      href: "https://openph.nwbiq.com",
      dates: "2025 – Presente",
      active: true,
      description:
        "Plataforma SaaS multi-tenant para la administración integral de conjuntos residenciales, edificios y condominios. Con aislamiento de datos por conjunto y roles diferenciados (administrador, residente, vigilante), OpenPH cubre facturación y contabilidad con pagos en línea vía Mercado Pago, control de acceso de visitantes mediante QR dinámico compartible por WhatsApp, asambleas virtuales con votación ponderada por coeficiente de copropiedad en tiempo real, PQRS con trazabilidad y reserva de zonas comunes. Incluye dashboards con métricas, exportación a Excel/PDF y despliegue con Docker.",
      technologies: ["React", "Vite", "Django REST", "MySQL", "Docker", "TailwindCSS", "JWT", "Mercado Pago"],
      links: [{ type: "Website", href: "https://openph.nwbiq.com" }],
      image: "/openph.png",
      video: "",
    },
    {
      title: "SIGUE — Sistema Integral de Gestión de Eventos",
      href: "",
      dates: "2025 – Presente",
      active: true,
      description:
        "Plataforma web integral diseñada para revolucionar la logística de eventos masivos en instituciones educativas. SIGUE automatiza el ciclo de vida completo de un evento: desde la difusión masiva y carga de asistentes vía Excel, hasta el control de acceso en tiempo real usando escáneres de códigos QR nativos en dispositivos móviles. Su arquitectura implementa seguridad estricta basada en roles (RBAC) y un motor asíncrono que procesa tareas pesadas en segundo plano —como la generación en lote de certificados PDF y el envío de correos— eliminando cuellos de botella administrativos, reduciendo el fraude en la entrega de beneficios y garantizando una experiencia fluida de \"cero papel\".",
      technologies: ["React", "Vite", "Python", "Django REST", "MySQL", "Redis", "Celery"],
      links: [] as { type: string; href: string }[],
      image: "/SIGUE.png",
      video: "",
    },
    {
      title: "Deli Burrito — Plataforma de Pedidos y Gestión",
      href: "https://deliburrito.com",
      dates: "2025",
      active: true,
      description:
        "Plataforma web a la medida diseñada para digitalizar la recepción de pedidos de un restaurante local. Cuenta con una interfaz móvil para clientes con un constructor de productos de precio dinámico, y un panel de administración en tiempo real para gestionar el flujo de cocina, personalizar el menú, imprimir comandas y automatizar notificaciones vía WhatsApp.",
      technologies: ["React", "Inertia.js", "Laravel", "PHP", "MySQL", "TailwindCSS", "Vite"],
      links: [{ type: "Website", href: "https://deliburrito.com" }],
      image: "/deliburrito.png",
      video: "",
    },
    {
      title: "Proyecto SRP",
      href: "",
      dates: "2024 – 2025",
      active: true,
      description:
        "Sistema dedicado a la gestión de notas y la gestión administrativa del Colegio Rafael Pombo de Tuluá, Valle del Cauca.",
      technologies: ["React", "Django", "Python", "JavaScript", "CSS", "MySQL"],
      links: [] as { type: string; href: string }[],
      image: "/SRP.png",
      video: "",
    },
    {
      title: "RICA",
      href: "",
      dates: "2024 – Presente",
      active: true,
      description:
        "Sistema dedicado al control de acceso y registro de usuarios de la Universidad del Valle sede Caicedonia y el Nodo Sevilla.",
      technologies: ["React", "Django", "Python", "JavaScript", "CSS", "MySQL"],
      links: [] as { type: string; href: string }[],
      image: "/RICA.png",
      video: "",
    },
  ],
  certifications: [
    { title: "CONCIA 2025", image: "/certifications/Concia2025.png" },
    { title: "MoureDev", image: "/certifications/Mouredev.png" },
    { title: "RRedSI 2025", image: "/certifications/Rredsi2025.png" },
    { title: "Semillero IDICA 2024-2", image: "/certifications/SemilleroIdica2024-2.png" },
    { title: "Semillero IDICA 2025-1", image: "/certifications/SemilleroIdica2025-1.png" },
    { title: "Spring Boot", image: "/certifications/Springboot.png" },
    { title: "Remote Work", image: "/certifications/remotework.png" },
    { title: "Auxiliar de Campo", image: "/certifications/AuxiliardeCampo.jpg" },
    { title: "Georeto", image: "/certifications/Georeto.jpg" },
    { title: "Promotor Comunitario", image: "/certifications/PromotorComunitario.jpg" },
    { title: "Reconocedor Predial", image: "/certifications/ReconocedorPredial.jpg" },
    { title: "Seguridad y Privacidad", image: "/certifications/seguridadPrivacidad.jpg" },
    { title: "Copernicus", image: "/certifications/Copernicus.png" },
    { title: "Inglés A2", image: "/certifications/InglesA2.png" },
    { title: "Contaduría", image: "/certifications/Contaduria.png" },
  ],
};
