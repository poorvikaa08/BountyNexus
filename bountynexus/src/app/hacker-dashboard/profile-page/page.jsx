// pages/Profile.js
'use client';


// import React from 'react';
import './profile-page.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from "./profile-page.css";


const Profile = () => {

  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };
  // Sample data; replace this with your API data later
  // const hacker = {
  //   name: "Ducati Panigale V4",
  //   email: "ducati.panigalev4@example.com",
  //   profilePicture: "https://wallpapercave.com/wp/wp3754424.jpg",
  //   feedbacks: [
  //     "Found a SQL injection vulnerability in the login form.",
  //     "Discovered an XSS issue on the homepage.",
  //     "Identified a CSRF vulnerability in the settings page."
  //   ]
  // };

  const hacker = {
    name: "Louie Smith", // Replace with dynamic username
    email: "louie.smith@example.com", // Replace with dynamic email
    profilePicture: "https://wallpapercave.com/wp/wp3754424.jpg",
    feedbacks: [
      "Great job on the recent bug fix! - User 1",
      "Really appreciated your help! - User 2",
      "Excellent work on the vulnerabilities report! - User 3"
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

      <div className="main-content">
        {/* Main Profile Section */}
        <div className="profile-details">
          <div className="profile-header">
            <Image src="/assets/logo.png" alt="Profile Photo" width={150} height={150} className="profile-photo" />
            <h1>Louie Smith</h1> {/* Replace with dynamic username */}
            <p>Email: louie.smith@example.com</p> {/* Replace with dynamic email */}
            <p>Username: louie_smith</p>
          </div>

          {/* Feedback Section */}
          <div className="feedback-section">
            <h2>Feedback Received</h2>
            <ul className="feedback-list">
              {hacker.feedbacks.map((feedback, index) => (
                <li key={index} className="feedback-item">{feedback}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>


    </div>
  );
};


export default Profile;