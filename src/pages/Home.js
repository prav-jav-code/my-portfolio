import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-layout">
      <div className="hero-text">
        <span>Hi, I am</span>
        <h1>Praveen Kumar Raju</h1>
        <p style={{ color: '#a1a1aa', maxWidth: '550px', lineHeight: '1.8', margin: '20px 0 40px' }}>
          A Computer Science undergraduate specializing in Data Analysis. 
          I am experienced in data cleaning, visualization, and statistical analysis, with a strong focus on data-driven decision making.
        </p>
        <button className="btn-glow" onClick={() => navigate('/projects')}>
          View My Projects
        </button>
      </div>

      <div className="profile-wrapper">
        <div className="glass profile-circle">
          {/* With Option 2, we don't 'import' the image. 
            We point directly to the public folder using "/" 
          */}
          <img src="/my-photo.png" alt="Praveen Kumar Raju" />
        </div>
      </div>
    </div>
  );
};

export default Home;