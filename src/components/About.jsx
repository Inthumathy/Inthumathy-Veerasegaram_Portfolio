import React from 'react';
import { GraduationCap, Briefcase, Languages, Milestone } from 'lucide-react';

export default function About() {
  const education = [
    {
      date: '2024 - Present',
      title: 'NDT in Information Technology',
      institution: 'Institute of Technology, University of Moratuwa',
      desc: 'Developing an advanced understanding of software engineering paradigms, databases, computer networks, and enterprise application architectures.'
    },
    {
      date: 'Secondary Education',
      title: 'Advanced Level & Ordinary Level Studies',
      institution: "J/Methodist Girls' High School",
      desc: 'Formed a strong scientific and analytical background which paved the path for tertiary IT studies.'
    }
  ];

  const experience = [
    {
      date: 'Professional Experience',
      title: 'Teacher',
      organization: 'Study Point (PVT) LTD',
      desc: 'Delivered educational instructions, mentored young learners, and designed course materials. Refined public speaking and teaching communication skills.'
    },
    {
      date: 'Administrative Experience',
      title: 'Clerk',
      organization: 'Lawyer\'s Office',
      desc: 'Managed documentation processing, case sorting, customer scheduling, and formal communication. Developed administrative precision and professional ethics.'
    }
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Background</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-desc">
            An overview of my academic background, professional experience, and capabilities.
          </p>
        </div>

        <div className="about-grid">
          {/* Education Timeline */}
          <div className="about-column">
            <h3 className="about-title">
              <GraduationCap size={28} className="text-primary" style={{ color: 'var(--primary-color)' }} />
              <span>Education</span>
            </h3>
            
            <div className="timeline">
              {education.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <span className="timeline-date">{item.date}</span>
                  <h4 className="timeline-title">{item.title}</h4>
                  <div className="timeline-subtitle">{item.institution}</div>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="about-column">
            <h3 className="about-title">
              <Briefcase size={28} style={{ color: 'var(--accent-color)' }} />
              <span>Professional Experience</span>
            </h3>
            
            <div className="timeline">
              {experience.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker" style={{ borderColor: 'var(--accent-color)' }}></div>
                  <span className="timeline-date" style={{ color: 'var(--accent-color)' }}>{item.date}</span>
                  <h4 className="timeline-title">{item.title}</h4>
                  <div className="timeline-subtitle">{item.organization}</div>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extra: Multilingual & Core qualities */}
        <div className="multilingual-box" style={styles.multiBox}>
          <div style={styles.multiHeader}>
            <Languages size={24} style={{ color: 'var(--primary-color)' }} />
            <h3 style={{ fontSize: '1.25rem' }}>Language Proficiency</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Effective global collaboration is driven by fluent communication. I am proficient in the following languages:
          </p>
          <div style={styles.langGrid}>
            <div style={styles.langItem}>
              <span style={styles.langName}>English</span>
              <span style={styles.langBarOuter}><span style={{ ...styles.langBarInner, width: '90%', backgroundColor: 'var(--primary-color)' }}></span></span>
              <span style={styles.langLevel}>Professional</span>
            </div>
            <div style={styles.langItem}>
              <span style={styles.langName}>Tamil</span>
              <span style={styles.langBarOuter}><span style={{ ...styles.langBarInner, width: '100%', backgroundColor: 'var(--accent-color)' }}></span></span>
              <span style={styles.langLevel}>Native / Bilingual</span>
            </div>
            <div style={styles.langItem}>
              <span style={styles.langName}>Sinhala</span>
              <span style={styles.langBarOuter}><span style={{ ...styles.langBarInner, width: '50%', backgroundColor: 'var(--success-color)' }}></span></span>
              <span style={styles.langLevel}>Functional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  multiBox: {
    marginTop: '60px',
    backgroundColor: 'var(--bg-primary)',
    border: '1px solid var(--border-color)',
    borderRadius: '16px',
    padding: '32px',
    textAlign: 'left',
    boxShadow: 'var(--shadow-sm)',
  },
  multiHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  langGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '24px',
  },
  langItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  langName: {
    fontWeight: '600',
    fontSize: '0.95rem',
  },
  langBarOuter: {
    width: '100%',
    height: '6px',
    backgroundColor: 'var(--border-color)',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'block',
  },
  langBarInner: {
    height: '100%',
    borderRadius: 'inherit',
    display: 'block',
  },
  langLevel: {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    fontWeight: '500',
  }
};
