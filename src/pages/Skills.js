import React from 'react';
import { DatabaseIcon, FileSpreadsheetIcon, CodeIcon, TerminalIcon, BarChart3Icon, LayoutIcon } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: "SQL", icon: <DatabaseIcon size={30} />, desc: "Database Management & Querying" },
    { name: "Excel", icon: <FileSpreadsheetIcon size={30} />, desc: "Advanced Data Analysis & Pivot Tables" },
    { name: "Python", icon: <CodeIcon size={30} />, desc: "Data Cleaning & Automation" },
    { name: "Java", icon: <TerminalIcon size={30} />, desc: "Object Oriented Programming" },
    { name: "Data Visualization", icon: <BarChart3Icon size={30} />, desc: "Insightful Dashboards & Reporting" },
    { name: "Web Technologies", icon: <LayoutIcon size={30} />, desc: "HTML & CSS Development" }
  ];

  return (
    <div className="skills-container">
      <h2 className="accent-text">Technical Expertise</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="glass card">
            <div style={{ color: '#22c55e', marginBottom: '15px' }}>{skill.icon}</div>
            <h3 style={{ margin: '10px 0' }}>{skill.name}</h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;