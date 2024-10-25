'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styles from "./hacker-dashboard.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Profile = () => {
  const [showVulnerabilityForm, setShowVulnerabilityForm] = useState(false);
  const [showSubmittedVulnerabilities, setShowSubmittedVulnerabilities] = useState(false);
  const router = useRouter(); // Use router for navigation


  const handleNavigation = (path) => {
    router.push(path); // Navigate using Next.js
  };



  return (
    <div className="dashboard">
      <div className="icon-container">

        <div className="icon logo-icon" onClick={() => handleNavigation('/Home')} style={{ backgroundColor: "black" }}>
          <Image src="/assets/logo.png" alt="logo" width={40} height={40} />
        </div>

        <div className="icon profile-icon" onClick={() => handleNavigation('/hacker-dashboard/profile-page')}>
          <i className="fa-solid fa-user" style={{ color: "#ffffff" }}></i>
          <span className="tooltip">Profile</span>
        </div>

        {/* Vulnerabilities Icon */}
        <div className="icon vuln-icon" onClick={() => handleNavigation('/hacker-dashboard/reportbug')}>
          <i className="fa-solid fa-bug" style={{ color: "#ffffff" }}></i>
          <span className="tooltip">Vulnerabilities</span>
        </div>

        {/* Leaderboard Icon */}
        <div className="icon leaderboard-icon" onClick={() => handleNavigation('/leaderboard')}>
          <i className="fa-solid fa-trophy" style={{ color: "#ffffff" }}></i>
          <span className="tooltip">Leaderboard</span>
        </div>
        <div className="icon feedback-icon" onClick={() => handleNavigation('/feedback')}>
          <i className="fa-solid fa-envelope" style={{ color: "#ffffff" }}></i>
          <span className="tooltip">Feedback</span>
        </div>
      </div>

      
     
    </div>
  );
};

export default Profile;
