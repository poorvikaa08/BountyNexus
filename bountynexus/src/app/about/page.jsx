import React from 'react';

import './page.css';
const AboutUs = () => {
  return (
    <section className="about-us" style={{ backgroundColor: "black" }}>
      <div className="team" style={{ backgroundColor: "black", color: "white", textAlign: "center", padding: "10px", gap: "40px", justifyContent: "center", width: "100%" }}>
        <div className="team-member">

          <h3 style={{ textAlign: "center" }}>Our Mission</h3>
          <p style={{ fontSize: "16px", textAlign: "center" }}>Our mission is to create a more secure digital world by empowering ethical hackers and providing companies with the tools they need to protect their assets.</p>

        </div>
        <div className="team-member" backgroundColor="black">

          <h3 style={{ textAlign: "center" }}>Our Vision</h3>
          <p style={{ fontSize: "16px", textAlign: "center" }}>Our vision is to become the leading platform for ethical hacking and bug bounty programs.</p>
        </div>

      </div>

      <h3>About Bounty Nexus</h3>
      <p style={{ fontSize: "25px" }}>Bounty Nexus is a platform that connects hackers with companies to find and fix security vulnerabilities.</p>

      <h3>How it Works</h3>
      <ul>
        <li>Hackers submit bugs they discover on our platform.</li>
        <li>Companies review these submissions and validate the reported vulnerabilities.</li>
        <li>If a vulnerability is confirmed, the hacker is rewarded for their contribution.</li>
      </ul>
      <br></br>

      <br></br>

      <section style={{ display: "flex", alignItems: "space-around"  }}>
        <div>
          <h3>Benefits for Hackers</h3>
          <ul>
            <li>Earn rewards for your skills and knowledge.</li>
            <li>Gain recognition in the ethical hacking community.</li>
            <li>Help make the internet a safer place.</li>
          </ul>
        </div>

        <br></br>

        <div>
          <h3>Benefits for Companies</h3>
          <ul>
            <li>Identify and fix security vulnerabilities before they can be exploited.</li>
            <li>Improve your security posture and protect your assets.</li>
            <li>Collaborate with a community of talented ethical hackers.</li>
          </ul>
        </div>

        <br></br>

      </section>


      <h2>Meet Our Team</h2>
      <div className="team">
        <div className="team-member">

          <h4>Poorvika K B</h4>
          <p>Front End Developer</p>
        </div>
        <div className="team-member">

          <h4>Prakruthi Prasad</h4>
          <p>Front End Developer</p>
        </div>

        <div className="team-member">
          <h4>Hiral Jain</h4>
          <p>Back End Developer</p>
        </div>

        <div className="team-member">
          <h4>Aashrith M P</h4>
          <p>Security Analyst</p>
        </div>

      </div>
      <br></br>

      <br></br>
      <h3>Frequently Asked Questions</h3>
      <ul>
        <li><strong>How do I become a hacker on Bounty Nexus?</strong>
          <p>To become a hacker on Bounty Nexus, you need to create an account and submit a proof of concept for a vulnerability.</p>
        </li>
        <li><strong>How are rewards determined?</strong>
          <p>Rewards are determined based on the severity of the vulnerability and the impact it could have on the company.</p>
        </li>
        <li><strong>Is my personal information safe on Bounty Nexus?</strong>
          <p>Yes, your personal information is safe on Bounty Nexus. We take security very seriously and have implemented robust measures to protect your data.</p>
        </li>
      </ul>
    </section>
  );
};

export default AboutUs;