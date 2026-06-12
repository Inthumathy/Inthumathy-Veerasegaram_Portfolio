import { ExternalLink } from 'lucide-react';

const Github = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
import portraitImg from '../assets/myphoto.png';

export default function ProjectCard({ title, description, type, role, tech, github }) {
  return (
    <article className="project-card">
      {/* Crucial UI Requirement: Dedicated author profile header */}
      <div className="project-author-header">
        <img
          src={portraitImg}
          alt="Inthumathy Veersegaram"
          className="author-photo"
        />
        <div className="author-info">
          <span className="author-name">Inthumathy Veersegaram</span>
          <span className="author-role">{role}</span>
        </div>
      </div>

      <div className="project-body">
        <div className="project-title-row">
          <h3 className="project-title">{title}</h3>
          <span className={`project-type-badge ${type === 'Group Project' ? 'group' : ''}`}>
            {type}
          </span>
        </div>

        <p className="project-description">{description}</p>

        <div className="project-tech">
          {tech.map((t, index) => (
            <span key={index} className="tech-badge">{t}</span>
          ))}
        </div>

        <div className="project-footer">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
            aria-label={`View GitHub repository for ${title}`}
          >
            <Github size={18} />
            <span>Repository</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}
