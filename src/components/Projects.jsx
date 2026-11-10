import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projectsList = [
    
     {
      title: 'Hardware Store Management System',
      description: 'A full-stack web application designed to manage hardware store operations, including product inventory, customer registration, and order processing. Features secure user authentication, automatic stock updates, and repair service booking with customer verification and location tracking.',
      type: 'Solo Project',
      role: 'Full stack Developer',
      tech: ['React', 'Vite', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Docker', 'REST APIs', 'Postman'],
      github: 'https://github.com/Inthumathy/Hardware-Store.git'
    },
    
    {
      title: 'ResQAI – AI-Orchestrated Disaster Response & Humanitarian Relief Platform',
      description: 'An AI-powered disaster response platform designed to improve emergency coordination and humanitarian relief operations. Features real-time emergency alerts, AI-based incident analysis, volunteer coordination, and SMS notifications. Contributed to backend development, WebSocket communication, OTP verification, mobile authentication, Docker integration, and API testing.',
      type: 'Group Project',
      role: 'Full stack Developer',
      tech: ['React Native', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Socket.IO', 'Docker', 'REST APIs', 'Postman'],
      github: 'https://github.com/dinathsv/resqai-platform.git'
    },

    {
      title: 'Student Registration System',
      description: 'A layered, enterprise-grade Spring Boot application designed to manage student profiles, academic course catalogs, and dynamic student enrollments. Features a strict layered architecture pattern and global exception handling.',
      type: 'Solo Project',
      role: 'Project Architect & Developer',
      tech: ['Java', 'Spring Boot', 'REST APIs', 'Spring Data JPA', 'MySQL'],
      github: 'https://github.com/Inthumathy/Student-Registration-System.git'
    },
    {
      title: 'Student Event Management System',
      description: 'A comprehensive web application for managing university student events. Includes registration, admin dashboards with complete CRUD operations, participant tracking, and real-time statistics.',
      type: 'Solo Project',
      role: 'Full-Stack Developer',
      tech: ['PHP 7.4+', 'MySQL', 'JavaScript', 'Bootstrap 5', 'HTML5/CSS3'],
      github: 'https://github.com/Inthumathy/Student_Event_Management_System.git'
    },
    {
      title: 'Order & Billing Management System',
      description: 'A full-stack web application designed for enterprise sales, inventory tracking, customer database management, and automated invoice billing operations. Contributed to core communication protocols.',
      type: 'Group Project',
      role: 'Integration & Communications Lead',
      tech: ['React', 'Vite', 'Java Spring Boot', 'REST APIs', 'MySQL', 'Glassmorphism'],
      github: 'https://github.com/Tharaka-Jayampathi/SCM_Order_-_Billing_Module.git'
    },
    {
      title: 'Online Auction & E-Commerce',
      description: 'A lightweight online auction and e-commerce web platform. Implements customer accounts, structured product catalogs, bidding engines with timers/expiration, and secure checkout shopping carts.',
      type: 'Group Project',
      role: 'Backend Django Developer',
      tech: ['Django (Python)', 'SQLite', 'Bootstrap', 'HTML5/CSS3'],
      github: 'https://github.com/dinathsv/auction_shop.git'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-desc">
            A showcase of application designs, from individual architectural exercises to collaborative full-stack systems.
          </p>
        </div>

        <div className="projects-grid">
          {projectsList.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              type={project.type}
              role={project.role}
              tech={project.tech}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
