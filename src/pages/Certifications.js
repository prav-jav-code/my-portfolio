import React from 'react';
import { AwardIcon } from 'lucide-react';

const Certifications = () => {
  const certs = [
    { title: "Data Analytics Job Simulation", issuer: "Deloitte Australia" },
    { title: "Python Essentials 1", issuer: "Cisco Networking Academy" },
    { title: "CCNA: Introduction to Networks", issuer: "Cisco" },
    { title: "Generative AI Outskill", issuer: "Outskill" }
  ];

  return (
    <div className="certs-container">
      <h2 className="accent-text">Professional Certifications</h2>
      <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {certs.map((cert, index) => (
          <div key={index} className="glass card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px' }}>
            <AwardIcon color="#22c55e" size={32} />
            <div>
              <h3 style={{ margin: 0 }}>{cert.title}</h3>
              <p style={{ margin: '5px 0 0', color: '#a1a1aa' }}>{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;