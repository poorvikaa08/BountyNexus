import { useState, useRef, useEffect } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialContainerRef = useRef(null);

  // Function to handle scroll when left button is clicked
  const handleScrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Function to handle scroll when right button is clicked
  const handleScrollRight = () => {
    if (currentIndex < 9) { // Assuming there are 10 testimonials
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Function to update scroll position
  const updateScrollPosition = () => {
    const container = testimonialContainerRef.current;
    if (container) {
      const cardWidth = container.children[0].offsetWidth; // Get the width of one card
      container.style.transform = `translateX(-${currentIndex * (cardWidth + 20)}px)`; // Adjust for card width and margin
    }
  };

  // Update the scroll position when the current index changes
  useEffect(() => {
    updateScrollPosition();
  }, [currentIndex]);

  return (
    <section className="testimonials">
      <h2 className="testimonial-heading"><b>What Our Contributors Say</b></h2>&nbsp;

      <div className="testimonial-carousel">
        <button className="scroll-left" onClick={handleScrollLeft}>&lt;</button>
        <div className="testimonial-container" ref={testimonialContainerRef}>
          {[
            { name: "Jane Doe", title: "Professional Bug Bounty Hunter", quote: "BountyNexus helped me hone my skills!" },
            { name: "John Smith", title: "Cybersecurity Analyst", quote: "A vibrant community of hackers!" },
            { name: "Sophia Lee", title: "Freelance Ethical Hacker", quote: "Contributing to global security!" },
            { name: "Mike Johnson", title: "Security Researcher", quote: "Great platform for learning!" },
            { name: "David Williams", title: "Senior Security Engineer", quote: "BountyNexus has become my go-to platform for testing real-world vulnerabilities and improving my security expertise!" },
            { name: "Amelia Brown", title: "Freelance Bug Bounty Hunter", quote: "I love how BountyNexus connects ethical hackers with amazing bounty opportunities. It's a great way to grow professionally." },
            { name: "Oliver Martin", title: "Cybersecurity Consultant", quote: "The perfect platform to put your skills to the test and earn rewards while securing top companies' digital assets." },
            { name: "Lily Thompson", title: "Ethical Hacker", quote: "Thanks to BountyNexus, I’ve made valuable connections in the cybersecurity community while helping to improve security." },
            { name: "Henry Robinson", title: "Penetration Tester", quote: "BountyNexus challenges me to stay sharp and continuously learn while making the internet safer. A fantastic resource!" },
            { name: "Sophia Rodriguez", title: "Cybersecurity Researcher", quote: "What I love most about BountyNexus is the opportunity to collaborate with a global community of security experts!" }
          ].map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="card-content">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.title}</p>
                <p>"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-right" onClick={handleScrollRight}>&gt;</button>
      </div>
    </section>
  );
}
