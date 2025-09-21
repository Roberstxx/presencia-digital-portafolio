import { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, vercelUrl, cover, description, tags } = project;
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="project-card">
      <div className="project-card__image">
        {cover && !imageError ? (
          <img 
            src={cover} 
            alt={`Preview del proyecto ${title}`}
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="project-card__placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--color-primary)" strokeWidth="2"/>
              <circle cx="8.5" cy="8.5" r="1.5" stroke="var(--color-primary)" strokeWidth="2"/>
              <path d="M21 15L16 10L5 21" stroke="var(--color-primary)" strokeWidth="2"/>
            </svg>
            <span>Preview del sitio</span>
          </div>
        )}
        
        <div className="project-card__overlay">
          <a 
            href={vercelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__view-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path 
                d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M15 3H21V9" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M10 14L21 3" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            Ver en vivo
          </a>
        </div>
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        
        <div className="project-card__tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;