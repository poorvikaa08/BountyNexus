'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css';

const HackerProfile = ({ username }) => {
  // State for profile data
  const [profile, setProfile] = useState({
    name: '',
    profilePic: '/default-profile-pic.jpg' // Default profile picture
  });

  // State for feedbacks (sample feedbacks)
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, company: 'Company A', message: 'Great work on the last bug!' },
    { id: 2, company: 'Company B', message: 'Quick response and excellent find.' },
    { id: 3, company: 'Company C', message: 'Very professional approach!' }
  ]);

  // Fetch profile data from backend
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/api/profile/${username}`);
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, [username]);

  // Handler to update profile pic (UI only for now)
  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfile({ ...profile, profilePic: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      {/* Left section: Profile information */}
      <div className="profile-section">
        <h2 style={{ color: "aqua", fontSize: "2rem", fontWeight: "bold" }}>PROFILE</h2>

        {/* Profile Picture */}
        <div className="profile-pic" style={{ marginBottom: "40px", }}>
          <img src={profile.profilePic} alt="Profile" className="profile-image"  style={{ borderRadius: "50%", border: "2px solid #ccc"}}/>
          <input style={{ borderRadius: "2rem", textDecoration: "none"}}
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            className="upload-btn"
          />
        </div>

        {/* Display Name */}
        <div className="profile-info">
          <div>
            <label htmlFor="name">Name:</label>
            <p id="name">{profile.name}</p>
            <label htmlFor="name">Username:</label>
            <p id="name">{profile.name}</p>
            <label htmlFor="name">Email:</label>
            <p id="name">{profile.name}</p>
          </div>
        </div>
      </div>

      {/* Right section: Feedback */}
      <div className="feedback-section" style={{marginLeft: "5rem"}}>
        <h3 style={{ color: "aqua", fontSize: "2rem", fontWeight: "bold" }}>Feedback Received</h3>
        {feedbacks.length > 0 ? (
          <ul className="feedback-list">
            {feedbacks.map((feedback) => (
              <li key={feedback.id}>
                <strong>{feedback.company}:</strong> {feedback.message}
              </li>
            ))}
          </ul>
        ) : (
          <p>No feedback yet.</p>
        )}
      </div>
    </div>
  );
};

export default HackerProfile;
