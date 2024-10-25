'use client';

import Image from "next/image";

// import React from 'react';
// import TestimonialCarousel from './TestimonialCarousel';
import Link from "next/link";
import styles from "./page.css";
import Head from 'next/head';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Testimonials from "../components/Testimonials";



export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" />
        <link
          rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      </Head>

      <header className="header">
        <div style={{ display: " flex", border: "none", borderRadius: "50%" }}>
          <Image src="/assets/logo.png" alt="logo" width={70} height={70} />
          <div style={{ textAlign: "center", fontFamily: "Exodus", color: "aqua" }} className="logo" >Bounty<spam style={{ color: "white" }}>Nexus</spam></div>
        </div>

        <nav className="nav-list">
          <Link href="/" className="nav-item">Home</Link>
          <Link href="/about" className="nav-item">About</Link>
          <Link href="/our-services" className="nav-item">Services</Link>
          <Link href="review" className="nav-item">Leave a Review</Link>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn" onClick={() => window.location.href = "/login"}>Login</button>
          <button className="get-started-btn" onClick={() => window.location.href = "/chooseRole"}><b>Get Started</b></button>
        </div>
      </header >

      {/* Main Content Section */}
      < section className="main-content" >
        <div className="text-section">
          <h1>Join the Revolution of Ethical Hacking</h1>
          <p>Discover Vulnerabilities. Secure the Future.</p>
          <p>Your bounty hunting skills are your superpower.</p>
          <p>Make the internet safer, one bug at a time.</p>
          <p>Find Bugs. Earn Rewards.</p>
        </div>
      </section >







      <section className="section">
        <div className="leftSection">
          <h3 className="subHeading">HACK FOR GOOD</h3>
          <h1 className="heading">Get to know the hacker community.</h1>
          <ul className="bulletPoints">
            <li>▪ Compete and collaborate with top ethical hackers</li>
            <li>▪ Challenge yourself and earn rewards, while making the internet a safer place</li>
            <li>▪ Learn how to hack with BountyNexus and build your skills at live events.</li>
          </ul>
          <div className="buttonContainer">
            <button className="startButton" onClick={() => window.location.href = "/register"}>Start Hacking</button>

          </div>
        </div>
        <div className="rightSection">
          <div className="imageContainer">
            {/* Replace the src with actual image path */}
            <Image src="/assets/img.jpg" className="image" width={300} height={300} />

          </div>
        </div>
      </section>

{/* Testimonials section */}
      <Testimonials />



      {/* Footer Section */}
      <footer className="bg-black text-white py-8 mt-10">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 lg:mb-0">
            <a href="https://www.facebook.com" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" className="text-white hover:text-gray-400">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        {/* Bottom Links */}
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-wrap space-x-4 text-sm text-gray-400">
            <a href="./footer" className="hover:underline">Terms</a>
            <a href="./footer" className="hover:underline">Privacy</a>
            <a href="./footer" className="hover:underline">Security</a>
            <a href="./footer" className="hover:underline">Resources</a>

          </div>


          {/* Copyright */}
          <p className="text-sm text-gray-400 mt-4 lg:mt-0">
            &copy; 2024 Bounty Nexus | All Rights Reserved.
          </p>
        </div>

      </footer>
    </>
  );
}



