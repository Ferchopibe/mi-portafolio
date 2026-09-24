import React, { useState } from 'react';
import {
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
  Send,
  ExternalLink,
  CheckCircle2,
  X,
  Sparkles,
  ChevronRight,
  Cpu,
  Layers,
  Globe,
  Award,
  Clock,
  Users,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

export default function Portfolio() {
  // Estado para el modal de proyecto
  const [selectedProject, setSelectedProject] = useState(null);

  // Estado para el formulario de contacto
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'web',
    message: ''
  });

  // Datos de proyectos
  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión Ke\'Dulces',
      category: 'Desarrollo Web / E-commerce',
      shortDesc: 'Plataforma web integral para la gestión de pedidos, catálogo de productos e interacción con clientes.',
      fullDesc: 'Solución web desarrollada para optimizar el flujo operativo de la empresa familiar. Incluye módulo de pedidos en tiempo real, catálogo interactivo, y sistema de radicación de PQR para soporte al cliente.',
      tags: ['React', 'Node.js', 'MySQL', 'Tailwind CSS', 'Vite'],
      client: 'Ke\'Dulces SAS',
      liveUrl: 'https://kedulces.com',
      highlights: [
        'Arquitectura SPA reactiva con React y Vite',
        'Base de datos relacional MySQL optimizada',
        'Diseño de interfaz centrado en el usuario (UX/UI)',
        'Módulo interactivo de seguimiento de PQRs'
      ]
    },
    {
      id: 2,
      title: 'Control de Casos Epidemiológicos',
      category: 'Base de Datos / Backend',
      shortDesc: 'Diseño e implementación de base de datos relacional para seguimiento de casos y aislamientos.',
      fullDesc: 'Modelo entidad-relación y scripts DDL/DML estructurados en SQL Server para el registro, monitoreo y generación de reportes sobre trazabilidad de pacientes e incidencias de salud pública.',
      tags: ['SQL Server', 'T-SQL', 'Database Design', 'UML'],
      client: 'Proyecto Académico',
      liveUrl: '#',
      highlights: [
        'Normalización de datos hasta 3FN',
        'Vistas y procedimientos almacenados analíticos',
        'Modelado conceptual y lógico documentado',
        'Restricciones de integridad referencial avanzadas'
      ]
    },
    {
      id: 3,
      title: 'Prototipo UX/UI & Sistema de Diseño',
      category: 'Diseño UX/UI',
      shortDesc: 'Wireframes de alta fidelidad, mapas de sitio y prototipos interactivos para aplicaciones web.',
      fullDesc: 'Estructuración completa de la experiencia de usuario utilizando Figma. Incluye guías de estilo, componentes reutilizables, flujo de navegación interactivo y pruebas de usabilidad.',
      tags: ['Figma', 'UX Research', 'Prototyping', 'Design Systems'],
      client: 'Diseño de Producto',
      liveUrl: '#',
      highlights: [
        'Flujos de usuario (User Flows) detallados',
        'Sistemas de componentes adaptables y responsivos',
        'Pruebas A/B e itinerarios de navegación',
        'Cumplimiento de estándares de accesibilidad WCAG'
      ]
    }
  ];

  // Métricas
  const stats = [
    { label: 'Proyectos Completados', value: '+10', icon: CheckCircle2 },
    { label: 'Tecnologías Dominadas', value: '8+', icon: Cpu },
    { label: 'Compromiso y Calidad', value: '100%', icon: Award },
    { label: 'Disponibilidad', value: 'Inmediata', icon: Clock }
  ];

  // Servicios
  const services = [
    {
      title: 'Desarrollo Frontend',
      description: 'Construcción de interfaces modernas, adaptables y de alto rendimiento utilizando React, JavaScript moderno (ES6+) y Tailwind CSS.',
      icon: Layout
    },
    {
      title: 'Desarrollo Backend & APIs',
      description: 'Diseño de arquitectura de servidor con Node.js y Express, integración de servicios RESTful y lógica de negocio robusta.',
      icon: Server
    },
    {
      title: 'Bases de Datos Relacionales',
      description: 'Modelado, optimización y administración de esquemas de datos relacionales en MySQL Workbench y SQL Server.',
      icon: Database
    },
    {
      title: 'Diseño UX/UI & Prototipado',
      description: 'Creación de mapas de sitio, arquitecturas de información y prototipos de alta fidelidad en Figma enfocados en la usabilidad.',
      icon: Layers
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Background Decorator */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-emerald-500 p-0.5 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="text-lg font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent block leading-tight">
                Luis Fernando Orozco
              </span>
              <span className="text-xs font-mono text-cyan-400">Software Developer</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#inicio" className="hover:text-cyan-400 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-cyan-400 transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-cyan-400 transition-colors">Proyectos</a>
            <a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</a>
          </nav>

          <a 
            href="#contacto"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs tracking-wider uppercase shadow-md shadow-cyan-500/20 hover:opacity-90 transition-all inline-block"
          >
            AGENDAR CONSULTA
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative z-10 pt-20 pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-cyan-400 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack & Database Engineering</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
              Desarrollo de <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
                Software Robustas
              </span>
              <br />y Escalables.
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Especializado en la creación de aplicaciones web modernas, arquitectura de software, modelado de bases de datos relacionales y diseño de experiencias de usuario funcionales.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#proyectos" 
                className="px-6 py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/20 hover:bg-cyan-400 transition-all flex items-center space-x-2"
              >
                <span>Ver Portafolio</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="#contacto" 
                className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-sm hover:bg-slate-800 transition-all"
              >
                Iniciar Consulta
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-500">developer-profile.ts</span>
              </div>

              <div className="pt-4 font-mono text-xs text-slate-300 space-y-3">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                <p className="pl-4"><span className="text-cyan-400">name</span>: <span className="text-emerald-300">'Luis Fernando Orozco'</span>,</p>
                <p className="pl-4"><span className="text-cyan-400">role</span>: <span className="text-emerald-300">'Software Developer'</span>,</p>
                <p className="pl-4"><span className="text-cyan-400">location</span>: <span className="text-emerald-300">'Cali, Colombia'</span>,</p>
                <p className="pl-4"><span className="text-cyan-400">stack</span>: [</p>
                <p className="pl-8 text-amber-300">'React', 'Vite', 'Node.js',</p>
                <p className="pl-8 text-amber-300">'MySQL', 'SQL Server', 'Figma'</p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-cyan-400">availableForHire</span>: <span className="text-rose-400">true</span></p>
                <p>&#125;;</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 border-y border-slate-800/80 bg-slate-900/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col items-center md:items-start space-y-2">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-3xl font-extrabold text-white tracking-tight">{stat.value}</span>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="relative z-10 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">Especialidades</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Soluciones Técnicas Integrales</h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Desde la arquitectura de datos hasta la interfaz del usuario final, garantizando rendimiento y usabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 mb-6 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="relative z-10 py-24 bg-slate-900/30 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">Portafolio</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Proyectos Destacados</h2>
              <p className="text-slate-400 text-sm max-w-xl">
                Selección de desarrollos que demuestran capacidades en arquitectura web, gestión de bases de datos y diseño UX/UI.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-[10px] font-mono text-cyan-400 uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{project.shortDesc}</p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-950 text-[11px] font-mono text-slate-300 border border-slate-800/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 border-t border-slate-800/80 bg-slate-950/40">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Ver Detalles Técnicos</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="relative z-10 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">Contacto Directo</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">¿Tienes un proyecto en mente?</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Estoy disponible para colaborar en proyectos de desarrollo web, modelado de software o consultoría técnica. Envíame un mensaje y conversaremos sobre los requerimientos.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-lg bg-slate-950 text-cyan-400 border border-slate-800">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Ubicación</span>
                  <span className="text-sm font-semibold text-white">Cali, Colombia</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-lg bg-slate-950 text-cyan-400 border border-slate-800">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Perfil Académico</span>
                  <span className="text-sm font-semibold text-white">ADSO SENA & MinTIC</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">¡Mensaje Enviado!</h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto">
                    Gracias por ponerte en contacto. Responderé a tu solicitud a la brevedad posible.
                  </p>
                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', projectType: 'web', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase font-semibold mb-2">
                        Nombre Completo
                      </label>
                      <input 
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Ej: Carlos Ramírez"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase font-semibold mb-2">
                        Correo Electrónico
                      </label>
                      <input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="ejemplo@correo.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase font-semibold mb-2">
                      Tipo de Requerimiento
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                    >
                      <option value="web">Desarrollo Web / E-Commerce</option>
                      <option value="database">Diseño / Optimización de Base de Datos</option>
                      <option value="uxui">Diseño UX/UI & Prototipado</option>
                      <option value="other">Otro / Consultoría General</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase font-semibold mb-2">
                      Mensaje / Detalle del Proyecto
                    </label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Describe brevemente lo que necesitas desarrollar..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-500 hover:opacity-95 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>ENVIAR SOLICITUD DE CONSULTA</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Technical Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">{selectedProject.category}</span>
                <h3 className="text-2xl font-bold text-white tracking-tight">{selectedProject.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
              <p className="leading-relaxed text-base">{selectedProject.fullDesc}</p>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase font-semibold mb-3">Aspectos Técnicos Destacados</h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase font-semibold mb-3">Stack Tecnológico</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-800 bg-slate-950/50 flex items-center justify-between">
              <span className="text-xs text-slate-400">Cliente: <strong className="text-slate-200">{selectedProject.client}</strong></span>
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors flex items-center space-x-2"
              >
                <span>Visitar Sitio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5">
              <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                <span className="text-cyan-400 font-black text-xs">LFO</span>
              </div>
            </div>
            <span>© {new Date().getFullYear()} Luis Fernando Orozco. Todos los derechos reservados.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {/* Facebook (Enlace directo optimizado a la biografía) */}
            <a 
              href="https://facebook.com/profile.php?id=100008323282245" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@luisfernandoorozc593" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors flex items-center justify-center font-bold text-xs font-mono w-8 h-8"
            >
              🎵
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* X / Twitter */}
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="X"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          <div className="flex space-x-6 font-mono text-slate-400">
            <span>SENA ADSO</span>
            <span>•</span>
            <span>MINTIC Full-Stack</span>
            <span>•</span>
            <span>Cloud & Web Software</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
