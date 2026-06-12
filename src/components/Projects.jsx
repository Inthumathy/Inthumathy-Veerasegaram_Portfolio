import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projectsList = [
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
