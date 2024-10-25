'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styles from "./hacker-dashboard.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Dashboard = () => {
  const [showVulnerabilityForm, setShowVulnerabilityForm] = useState(false);
  const [showSubmittedVulnerabilities, setShowSubmittedVulnerabilities] = useState(false);
  const router = useRouter(); // Use router for navigation


  const handleNavigation = (path) => {
    router.push(path); // Navigate using Next.js
  };

  const handleVulnerabilityClick = () => {
    setShowSubmittedVulnerabilities(!showSubmittedVulnerabilities);
    setShowVulnerabilityForm(false);
  };

  const handleReportVulnerabilityClick = () => {
    setShowVulnerabilityForm(true);
    setShowSubmittedVulnerabilities(false);
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

      {/* Vulnerability Options */}
      {showSubmittedVulnerabilities && (
        <div className="main-content">
          <div className="options">
            <button onClick={() => handleNavigation('/vulnerabilities')}>
              View Submitted Vulnerabilities
            </button>
            <button onClick={handleReportVulnerabilityClick}>
              Report a new Vulnerability
            </button>
          </div>
        </div>
      )}

      {/* Vulnerability Form */}
      {showVulnerabilityForm && (
        <div className="main-content" id="vulnerability-report">
          <h1>Vulnerability Report Form</h1>
          <form action="/api/vulnerability-report" method="post">
            <label>
              Name of Vulnerability:
              <input type="text" name="name" required />
            </label>
            <br />
            <label>
              Vulnerability Type:
              <select name="type" required>
                <option value="">Select</option>
                <option value="SQL Injection">SQL Injection</option>
                <option value="Cross-Site Scripting (XSS)">Cross-Site Scripting (XSS)</option>
                <option value="Cross-Site Request Forgery (CSRF)">Cross-Site Request Forgery (CSRF)</option>
                <option value="Buffer Overflow">Buffer Overflow</option>
                <option value="Insecure Authentication">Insecure Authentication</option>
              </select>
            </label>
            <br />
            <label>
              Severity Level (Criticality):
              <select name="severity" required>
                <option value="">Select</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
            </label>
            <br />
            <label>
              Target URL / Application:
              <input type="url" name="target" required />
            </label>
            <br />
            <label>
              Description of the Vulnerability:
              <textarea name="description" required></textarea>
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
