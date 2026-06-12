import React from 'react';
import { 
  Code2, 
  Database, 
  Terminal, 
  Globe, 
  Braces, 
  Cpu, 
  Server, 
  Atom, 
  Zap, 
  Box, 
  GitFork, 
  Image, 
  FileSpreadsheet,
  Blocks
} from 'lucide-react';

export default function Skills() {
  const languages = [
    { name: 'Java', icon: <Cpu size={24} /> },
    { name: 'Python', icon: <Terminal size={24} /> },
    { name: 'PHP', icon: <Globe size={24} /> },
    { name: 'JavaScript', icon: <Braces size={24} /> },
    { name: 'HTML / CSS', icon: <Code2 size={24} /> },
    { name: 'SQL', icon: <Database size={24} /> },
  ];

  const tools = [
    { name: 'Spring Boot', icon: <Cpu size={24} /> },
    { name: 'Django', icon: <Server size={24} /> },
    { name: 'React', icon: <Atom size={24} /> },
    { name: 'Vite', icon: <Zap size={24} /> },
    { name: 'MySQL Workbench', icon: <Database size={24} /> },
    { name: 'Blender 3D', icon: <Box size={24} /> },
    { name: 'draw.io', icon: <GitFork size={24} /> },
    { name: 'Photoshop', icon: <Image size={24} /> },
    { name: 'MS Office', icon: <FileSpreadsheet size={24} /> },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Competencies</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-desc">
            Technologies and software tools I use to design and build fully functioning, end-to-end applications.
          </p>
        </div>

        <div className="skills-container">
          {/* Programming Languages */}
          <div className="skills-category">
            <h3 className="category-title">
              <Code2 size={24} style={{ color: 'var(--primary-color)' }} />
              <span>Programming Languages</span>
            </h3>
            <div className="skills-grid">
              {languages.map((skill) => (
                <div key={skill.name} className="skill-badge">
                  <div style={styles.iconWrapper}>{skill.icon}</div>
                  <span className="skill-badge-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Software & Tools */}
          <div className="skills-category" style={{ borderLeftColor: 'var(--accent-color)' }}>
            <h3 className="category-title">
              <Blocks size={24} style={{ color: 'var(--accent-color)' }} />
              <span>Frameworks, Softwares & Tools</span>
            </h3>
            <div className="skills-grid">
              {tools.map((skill) => (
                <div key={skill.name} className="skill-badge">
                  <div style={{ ...styles.iconWrapper, color: 'var(--accent-color)', backgroundColor: 'var(--accent-glow)' }}>
                    {skill.icon}
                  </div>
                  <span className="skill-badge-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  iconWrapper: {
    color: 'var(--primary-color)',
    backgroundColor: 'var(--primary-glow)',
    width: '48px',
    height: '48px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8px',
    transition: 'all 0.3s ease',
  }
};
