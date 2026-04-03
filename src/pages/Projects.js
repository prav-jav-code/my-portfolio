import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: "Community Crime Reporting Web App",
      description: "A web-based system designed for anonymous reporting of suspicious activities to improve community safety.",
      tags: ["Web Development", "SQL", "Community Safety"],
      features: [
        "Implemented anonymous reporting to increase user safety.",
        "Designed structured data collection to support backend crime analysis.",
        "Improved communication between members and authorities."
      ],
      link: "https://github.com/prav-jav-code" 
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="accent-text" style={{ marginBottom: '40px' }}>Academic Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="glass card project-card">
            <h3 style={{ marginTop: 0 }}>{project.title}</h3>
            <p className="project-desc" style={{ color: '#a1a1aa' }}>{project.description}</p>
            
            <ul className="project-features" style={{ paddingLeft: '20px', fontSize: '0.9rem' }}>
              {project.features.map((feature, i) => (
                <li key={i} style={{ marginBottom: '8px' }}>{feature}</li>
              ))}
            </ul>
            
            <div className="project-tags" style={{ margin: '20px 0', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {project.tags.map((tag, i) => (
                <span key={i} style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem' }}>
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="project-links">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-glow small" 
                style={{ 
                  textDecoration: 'none', 
                  display: 'inline-flex', 
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {/* Standard GitHub SVG - No import needed */}
                <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                Code Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;