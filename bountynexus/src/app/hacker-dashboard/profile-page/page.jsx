// pages/Profile.js
'use client';


import React from 'react';
import './profile-page.css';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Profile = () => {
  // Sample data; replace this with your API data later
  const hacker = {
    name: "Ducati Panigale V4",
    email: "ducati.panigalev4@example.com",
    profilePicture: "https://wallpapercave.com/wp/wp3754424.jpg",
    feedbacks: [
      "Found a SQL injection vulnerability in the login form.",
      "Discovered an XSS issue on the homepage.",
      "Identified a CSRF vulnerability in the settings page."
    ]
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
        <div className="icon leaderboard-icon" onClick={() => handleNavigation('/hacker-dashboard/leaderboard')}>
          <i className="fa-solid fa-trophy" style={{ color: "#ffffff" }}></i>
          <span className="tooltip">Leaderboard</span>
        </div>
        <div className="icon feedback-icon" onClick={() => handleNavigation('/')}>
          <i className="fa-solid fa-envelope" style={{ color: "#ffffff" }}></i>
          <span className="tooltip">Feedback</span>
        </div>
      </div>

     

      
    
      
    <div style={styles.container}>
      <img src={hacker.profilePicture} alt="Profile Picture" style={styles.profilePicture} />
      <h1 style={styles.title}>{hacker.name}</h1>
      <p style={styles.email}>{hacker.email}</p>
      <h2 className={styles.feedbackTitle}>Feedbacks:</h2>
      <ul className={styles.feedbackList}>
        {hacker.feedbacks.length > 0 ? (
          hacker.feedbacks.map((feedback, index) => (
            <li key={index} className={styles.feedbackItem}>{feedback}</li>
          ))
        ) : (
          <li className={styles.feedbackItem}>No feedback available.</li>
        )}
      </ul>
    </div>

    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    margin: '10px 0',
  },
  profilePicture: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    marginBottom: '20px',
  },
  email: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '20px',
  },
  feedbackTitle: {
    fontSize: '1.5rem',
    marginTop: '30px',
  },
  feedbackList: {
    listStyleType: 'none',
    padding: '0',
  },
  feedbackItem: {
    background: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  }
};

export default Profile;