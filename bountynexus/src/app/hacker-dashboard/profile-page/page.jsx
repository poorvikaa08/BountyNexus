// pages/Profile.js
'use client';


//import React from 'react';
import './profile-page.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from "./profile-page.css";
import Dashbar from '../../components/dashbar/dashbar.jsx';
import HackerProfile from '@/app/components/profile/page';
import Log from '../../models/loginmodels';
import { connectMongoDB } from "../../lib/mongodb";
import axios from 'axios';


const Profile = async () => {

  const router = useRouter();
  await connectMongoDB();

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

  const handleProfilePictureChange = (event) => {
    const selectedFile = event.target.files[0];

    // Basic file validation (optional)
    if (!selectedFile || !selectedFile.type.match('image/*')) {
      alert('Please select a valid image file.');
      return;
    }

    // Display a preview (optional)



    // Handle file upload (replace with your backend logic)
    // Assuming a backend API endpoint to handle uploads:
    const formData = new FormData();
    formData.append('profilePicture', selectedFile);
    fetch('/api/upload-profile-picture', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        // Update profilePicture state with the actual uploaded image URL
        setHacker({ ...hacker, profilePicture: data.imageUrl });
      })
      .catch(error => {
        console.error('Error uploading profile picture:', error);
        // Handle upload errors gracefully
      });
  };

  const hacker = {
    name: Log[0].name, // Replace with dynamic username
    email: Log[0].email, // Replace with dynamic email
    profilePicture: "https://wallpapercave.com/wp/wp3754424.jpg",
    feedbacks: [
      "Great job on the recent bug fix! - User 1",
      "Really appreciated your help! - User 2",
      "Excellent work on the vulnerabilities report! - User 3"
    ]
  };

  return (
    <div>


      <HackerProfile />
      <Dashbar />

    </div>

  );
};


export default Profile;