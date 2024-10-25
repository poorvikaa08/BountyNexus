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
  const steps = [
    {
      title: "Sign Up & Create a Profile",
      description:
        "Join our community by creating a profile, where you can showcase your skills and track your progress. Set up your profile with a username, email, and profile picture, allowing others to recognize your contributions.",
    },
    {
      title: "Browse Vulnerability Programs",
      description:
        "Explore a range of bounty programs from top companies looking to secure their platforms. Each program lists the types of vulnerabilities they're focused on, reward details, and submission guidelines.",
    },
    {
      title: "Submit Your Findings",
      description:
        "Found a vulnerability? Report it directly through our secure platform. Provide the necessary details using our report form, attaching screenshots or code snippets to strengthen your submission.",
    },
    {
      title: "Get Rewarded & Gain Recognition",
      description:
        "Once verified, earn rewards for your findings, which will reflect on your profile and on the BountyNexus leaderboard. Earn recognition among the hacker community while contributing to a safer digital space.",
    },
    {
      title: "Track Your Progress",
      description:
        "Use your dashboard to monitor your submitted vulnerabilities, review the status of your reports, and stay updated on your rewards. Improve your standing in the community with every successful find!",
    },
  ];
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
          <Image src="/assets/logo.png" alt="logo" width={60} height={60} />
          <div style={{ textAlign: "center", fontFamily: "Poppins, sans-serif", color: "aqua" }} className="logo" >Bounty<spam style={{ color: "white" }}>Nexus</spam></div>
        </div>

        <nav className="nav-list" style={{ display: "flex", gap: "2rem" }}>
          <Link href="/" className="nav-item">Home</Link>
          <Link href="/about" className="nav-item">About</Link>
          <Link href="/our-services" className="nav-item">Services</Link>
          <Link href="review" className="nav-item">Review us</Link>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn" onClick={() => window.location.href = "/login"}>Login</button>
          <button className="get-started-btn" style={{ backgroundColor: "#22c8ff", color: "black" }} onClick={() => window.location.href = "/chooseRole"}><b>Get Started</b></button>
        </div>
      </header >

      {/*       
      < section className="main-content" >
        <div className="text-section">
          <h1>Join the Revolution of Ethical Hacking</h1>
          <p>Discover Vulnerabilities. Secure the Future.</p>
          <p>Your bounty hunting skills are your superpower.</p>
          <p>Make the internet safer, one bug at a time.</p>
          <p>Find Bugs. Earn Rewards.</p>
        </div>
      </section > */}


      <section className="section" style={{ backgroundColor: "black", alignItems: "center", justifyContent: "center", display: "flex", margin: "0", padding: "0", marginBottom: "0" }}>
        <div className="leftSection" style={{marginLeft: "3rem", marginRight: 0, paddingRight:0}}>
          <h1 className="heading" style={{ color: "#2afdf7", fontSize: "40px", textAlign: "center" , }}>JOIN THE REVOLUTION OF THE <span style={{ color: "white", paddingTop: "3rem" }}>ETHICAL HACKING</span></h1>
          <p className="subheading" style={{ color: "#22c8ff", textAlign: "center", fontSize: "22px", paddingTop: "1.2rem", fontWeight: "bold" }}>Discover Vulnerabilities, Secure the Future.</p>

        </div>
        <div className="rightSection">
          <div className="imageContainer" style={{ paddingRight: "4rem" }}>
            {/* Replace the src with actual image path */}
            <Image src="/assets/image1.jpg" className="image" width={500} height={400} />

          </div>
        </div>
      </section>



      {/* Main Content Section */}
      {/* <section className="section">
        <div className="leftSection">
          <ul className="bulletPoints">
            <li>Discover Vulnerabilities. Secure the Future.</li>
            <li>Your bounty hunting skills are your superpower.</li>
            <li>Make the internet safer, one bug at a time.</li>
            <li>Find Bugs. Earn Rewards.</li>
          </ul>

        </div> */}
      {/* <div className="rightSection">
          <div className="imageContainer">
            <Image src="/assets/imgg.jpg" className="image" width={450} height={300} style={{ borderRadius: "0px" }}/>

          </div>
        </div> */}
      {/* </section> */}







      <section className="section" style={{ backgroundColor : "black", display: "flex", justifyContent: "flex-start", alignItems: "flex-start", paddingLeft: "15rem", paddingRight: "0rem",paddingTop: "4rem", borderBottom: "none", marginTop: "0rem", marginBottom: "0" }}>
        <div className="Section">
          <h3 className="subHeading" style={{fontWeight: "bold"}}>HACK FOR GOOD</h3>
          <h1 className="heading" style={{ fontSize: "30px" , color: "#2afdf7"}}>Get to know the hacker community.</h1>
          <ul className="bulletPoints">
            <li>▪ Compete and collaborate with top ethical hackers</li>
            <li>▪ Challenge yourself and earn rewards, while making the internet a safer place</li>
            <li>▪ Learn how to hack with BountyNexus and build your skills at live events.</li>
          </ul>
          
        </div>
         <div className="rightSection" style={{color: "#22c8ff", display: "flex", justifyContent: "center", alignItems: "center"}}>
          {/* <div className="imageContainer">
            <Image src="/assets/img.jpg" className="image" width={300} height={300} />

          </div> */}
          <div className="buttonContainer" style={{ textAlign: "center", alignItems: "center" , marginTop: "3rem", display: "flex", flexDirection: "column"}}>
            <button className="startButton" style={{ backgroundColor: "#22c8ff" , fontWeight: "bold"}} onClick={() => window.location.href = "/register"}>Start Hacking</button>
            <p style={{ color: "aqua", fontWeight: "bold", textAlign: "center",  }}>Be part of the hacker community  </p>
          </div>
          
        </div> 
      </section>





      <section className="how-it-works" style={{ backgroundColor: "black" }}>
        <h2 style={{ color: "#22c8ff", backgroundColor: "black", textAlign: "left", color: "white", marginLeft: "6rem", marginTop: "2rem" , paddingBottom: "10px"}}><span style={{ color: "#ffffff " }}>How Does BountyNexus Work?</span> </h2>
        <div className="cards-container" style={{ backgroundColor: "black" , display: "flex", justifyContent: "center", alignItems: "space-between"}}>
          {steps.map((step, index) => (
            <div className="card" key={index}>
              <h3 style={{textAlign: "center", paddingBottom: "10px"}}>{step.title}</h3>
              <p style={{textAlign: "center",  }} >{step.description}</p>
            </div>
          ))}
        </div>
        {/* <div className="cta">
          <p>Join BountyNexus Today</p>
          <p>Be part of a growing community of security researchers and hackers working to make the web a safer place. Dive into vulnerability hunting, learn, and get rewarded!</p>
        </div> */}
      </section>




      {/* Testimonials section */}
      <div class="testimonials-section bg-dark p-8 text-white" style={{ border: "0.5px solid #333", borderBottom: "0" }}>
        <h2 class="text-center text-3xl font-semibold mb-6">What our contributors say</h2>

        <div class="testimonial-cards flex flex-col md:flex-row gap-6">

          <div class="testimonial-card bg-gray-800 p-4 rounded-lg shadow-lg flex items-center " style={{ backgroundColor: "#000000", border: "0.5px solid #22c8ff" }}>
            <div class="card-content">
              <p class="text-lg mb-1 font-semibold" style={{ color: "#aqua", justifyContent: "center", textAlign: "center", fontSize: "20px", fontWeight: "bold", padding: "1rem" }}>Alex</p>
              <p class="text-gray-300" style={{ justifyContent: "center", textAlign: "center", fontSize: "17px", paddingBottom: "1rem" }}>"BountyNexus is user-friendly and efficient! Highly recommended."</p>
            </div>
          </div>

          <div class="testimonial-card bg-gray-800 p-4 rounded-lg shadow-lg flex items-center" style={{ backgroundColor: "#000000", border: "0.5px solid #22c8ff" }}>
            <div class="card-content">
              <p class="text-lg mb-1 font-semibold" style={{ color: "#aqua", justifyContent: "center", textAlign: "center", fontSize: "20px", fontWeight: "bold", padding: "1rem" }}>Jamie</p>
              <p class="text-gray-300" style={{ justifyContent: "center", textAlign: "center", fontSize: "17px", paddingBottom: "1rem" }}>"The best platform for finding and reporting vulnerabilities."</p>
            </div>
          </div>

          <div class="testimonial-card bg-gray-800 p-4 rounded-lg shadow-lg flex items-center" style={{ backgroundColor: "#000000", border: "0.5px solid #22c8ff" }}>
            <div class="card-content">
              <p class="text-lg mb-1 font-semibold" style={{ color: "#aqua", justifyContent: "center", textAlign: "center", fontSize: "20px", fontWeight: "bold", padding: "1rem" }}>Taylor</p>
              <p class="text-gray-300" style={{ justifyContent: "center", textAlign: "center", fontSize: "17px", paddingBottom: "1rem" }}>"I appreciate the support and ease of use on BountyNexus."</p>
            </div>
          </div>

        </div>
      </div>




      {/* <section className="stats-section">
        <div className="stats-container">
          <div className="stat-box">
            <h3>$50M+</h3>
            <p>Total Bounties Paid</p>
          </div>
          <div className="stat-box">
            <h3>100K+</h3>
            <p>Hackers</p>
          </div>
          <div className="stat-box">
            <h3>150+</h3>
            <p>Companies Protected</p>
          </div>
        </div>
      </section> */}



      {/* Footer Section */}
      <footer className="bg-black text-white py-8 mt-10" style={{ margin: "0rem 0.6rem", border: "0" }}>
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



