import React from 'react';

import './services.css';

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <br></br>
      <div className="service-card">
        <h3>Bug Bounty Programs</h3>
        <p>
          Leverage our community of skilled hackers to uncover vulnerabilities in your systems.
          Earn rewards for valid reports and help improve your security posture.
        </p>
        <ul>
          <li>Secure your applications and infrastructure.</li>
          <li>Discover vulnerabilities before they are exploited.</li>
          <li>Gain access to a global network of talented ethical hackers.</li>
        </ul>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="service-card">
        <h3>Vulnerability Assessment</h3>
        <p>
          Our expert team conducts thorough vulnerability assessments to identify potential weaknesses in your systems.
          We provide detailed reports and recommendations to help you address these vulnerabilities.
        </p>
        <ul>
          <li>Identify potential vulnerabilities before they are exploited.</li>
          <li>Receive actionable recommendations for remediation.</li>
          <li>Improve your overall security posture.</li>
        </ul>
        <button className="learn-more-btn">Learn More</button>
      </div>
      {/* Add more service cards as needed */}
    </section>
  );
};

export default Services;