"use client"; // Add this line to make the component a Client Component

import React from 'react';
import styles from "./chooseRole.css";
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="container">
            {/* Top Bar */}
            <div className="top-bar">
                <span className="learn-more" onClick={() => window.location.href = "/#"}>Learn more about <span style={{ color: "#ffffff" }}>BountyNexus</span> </span>
                <button className="login-btn" onClick={() => window.location.href = "/login"}><b>Log in</b></button>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <h1>Welcome to BountyNexus!</h1>
                <p>Please tell us a bit about yourself.</p>
                <div className="options">
                    <div className="option-card hacker" onClick={() => window.location.href = "/register"}>
                        <h2>I'm a hacker</h2>
                        <p>I want to use my skills to help make the internet a safer place.</p>
                    </div>
                    <div className="option-card company" onClick={() => window.location.href = "/company_login"}>
                        <h2>I'm a company</h2>
                        <p>I want to ensure my company's security is safe by rewarding hackers who find vulnerabilities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
