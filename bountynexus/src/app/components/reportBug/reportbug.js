'use client';
import React, { useState } from 'react';
import './reportbug.css';
import { useRouter } from 'next/navigation';
import styles from "./reportbug.css";

export default function SubmitBug() 
{
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [severity, setSeverity] = useState('');
    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Here, you can handle the form submission and send the data to your backend
       // console.log({ email, title, description, severity });
        const formData = {
            email,
            title,
            description,
            severity,
          };
            console.log(formData);

          const res = await fetch('/api/addbugs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          if (res.ok) {
            const form = e.target;
            router.push("/hacker-dashboard");
            console.log(" successful");
            }
            else {
              console.log("failed");
              //console.log(res.statusText);
          }    
          //const data = await res.json();

  // Handle the response data
  //console.log(data); 
           
            }

    return (
        <div className="dark-theme">
            <h1>Bounty Nexus - Report Bug</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required value={title} onChange={(e) => setTitle(e.target.value)} />

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                <label htmlFor="severity">Severity:</label>
                <select id="severity" name="severity" required value={severity} onChange={(e) => setSeverity(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Critical">Critical</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

//export default SubmitBug;