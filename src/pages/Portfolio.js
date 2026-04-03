import React from 'react';

const Portfolio = () => {
  return (
    <div>
      <h2 style={{ fontSize: '2.2rem', marginBottom: '40px' }}>Portfolio & Expertise</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
        {/* Skills */}
        <div className="glass card">
          <h3 style={{ color: '#22c55e', marginTop: '0' }}>Technical Skills</h3>
          <p><strong>Tools:</strong> Excel, SQL [cite: 39]</p>
          <p><strong>Languages:</strong> Python, Java, C/C++ [cite: 38]</p>
          <p><strong>Concepts:</strong> Data Cleaning, Visualization, Statistics [cite: 41]</p>
        </div>

        {/* Project */}
        <div className="glass card">
          <h3 style={{ color: '#22c55e', marginTop: '0' }}>Academic Project</h3>
          <h4 style={{ marginBottom: '10px' }}>Community Crime Reporting App [cite: 43]</h4>
          <p style={{ fontSize: '0.9rem', color: '#a1a1aa' }}>
            Developed a web system for anonymous reporting[cite: 44, 45]. 
            Designed structured data collection to support backend crime analysis[cite: 46].
          </p>
        </div>

        {/* Certifications */}
        <div className="glass card">
          <h3 style={{ color: '#22c55e', marginTop: '0' }}>Certifications</h3>
          <ul style={{ fontSize: '0.9rem', color: '#a1a1aa', paddingLeft: '20px' }}>
            <li>Deloitte Australia Data Analytics Simulation [cite: 49]</li>
            <li>Python Essentials 1 [cite: 51]</li>
            <li>CCNA Networking & Security [cite: 52, 54]</li>
            <li>Generative AI Outskill [cite: 50]</li>
          </ul>
        </div>

        {/* Education */}
        <div className="glass card">
          <h3 style={{ color: '#22c55e', marginTop: '0' }}>Education</h3>
          <p style={{ margin: '0' }}><strong>B.Tech in CSE</strong> [cite: 56]</p>
          <p style={{ fontSize: '0.9rem', color: '#a1a1aa' }}>
            ACE Engineering College (2023-Present) [cite: 57]<br />
            CGPA: 7.57/10 [cite: 57]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;