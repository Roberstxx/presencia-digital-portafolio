import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';
import './Projects.css';

const Projects = () => {
  return (
    <section id="proyectos" className="projects section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Proyectos</h2>
          <p className="section-intro">
            Algunos proyectos entregados. Haz clic para verlos en vivo.
          </p>
        </div>

        <div className="projects__grid">
          {projectsData.projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project}
            />
          ))}
        </div>

        <div className="projects__cta">
          <p>¿Te gusta lo que ves? Trabajemos juntos en tu próximo proyecto.</p>
          <a href="#contacto" className="projects__cta-link">
            Iniciar mi proyecto
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;