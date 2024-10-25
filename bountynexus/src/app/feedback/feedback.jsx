'use client';

import React, { useState } from 'react';
import './feedback.css';
const FeedbackForm = () => {
    const [email, setEmail] = useState('');
    const [bugTitle, setBugTitle] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can handle the form submission and send the data to your backend
        console.log({ email, bugTitle, feedback });
    };

    return (
        <div className="feedback-form">
            <h1>Feedback Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="bug-title">Bug Title:</label>
                <input type="text" id="bug-title" name="bug-title" required value={bugTitle} onChange={(e) => setBugTitle(e.target.value)} />

                <label htmlFor="feedback">Feedback:</label>
                <textarea id="feedback" name="feedback" required value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>

                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;