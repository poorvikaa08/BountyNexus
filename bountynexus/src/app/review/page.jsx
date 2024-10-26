'use client';

import React, { useState } from 'react';

import './review.css';

const Review = () => {
  const [email, setEmail] = useState('');
  const [like, setLike] = useState('');
  const [dislike, setDislike] = useState('');
  const [name, setName] = useState(''); // Add name state

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
  };

  return (
    <section className="review" style={{ backgroundColor: 'black', color: 'white' , textAlign: 'center', padding: '10px', justifyContent: 'center', width: '40%', overflow: 'hidden'}}>
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , border: '1px solid #ccc', padding: '50px', borderRadius: '1px', borderColor: 'solid 0.2px aqua'}}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="like">What did you like about us?</label>
        <textarea id="like" value={like} onChange={(e) => setLike(e.target.value)} required></textarea>
        <label htmlFor="dislike">What did you not like about us?</label>
        <textarea id="dislike" value={dislike} onChange={(e) => setDislike(e.target.value)}></textarea>
        <button type="submit" style={{color: "black", fontWeight: "bold"}}>Submit Review</button>
      </form>
    </section>
  );
};

export default Review;