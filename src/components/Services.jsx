import React from 'react';
import { Globe, Code2, Box, Database } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Globe size={28} />,
      title: 'Web Design & Development',
      desc: 'Building modern, fast, and responsive user interfaces with React, vanilla CSS, HTML5, and JavaScript. Backend integrations using robust frameworks like PHP and Python.',
      tech: 'React, PHP, Python, HTML5, CSS3, JS'
    },
    {
      icon: <Code2 size={28} />,
      title: 'Enterprise Software Solutions',
      desc: 'Architecting secure and scalable enterprise applications. Setting up backend infrastructures, layered API controllers, object-relational mapping, and REST APIs.',
      tech: 'Java Spring Boot, Django REST APIs'
    },
    {
      icon: <Box size={28} />,
      title: '3D Modeling & Animation',
      desc: 'Creating custom 3D low-poly and high-poly models, textures, animations, and game assets using Blender. Delivering highly optimized models for web and application design.',
      tech: 'Blender asset creation'
    },
    {
      icon: <Database size={28} />,
      title: 'Database Design & Management',
      desc: 'Designing robust relational database schemas, query optimization, writing CRUD operations, indexing, and managing transactions using SQL databases.',
      tech: 'MySQL, SQL CRUD transactions'
    }
  ];

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Offerings</span>
          <h2 className="section-title">Services I Provide</h2>
          <p className="section-desc">
            Leveraging a diverse technology stack to deliver comprehensive technical solutions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-box">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc" style={{ marginBottom: '16px' }}>{service.desc}</p>
              <div className="service-tech-label" style={styles.techLabel}>
                <strong>Technologies:</strong> {service.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  techLabel: {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '12px',
    marginTop: 'auto',
  }
};
