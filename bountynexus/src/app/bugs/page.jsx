"use client";
import { useEffect, useState } from "react";

export default function BugsPage() {
    const [bugs, setBugs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBugs = async () => {
            try {
                const response = await fetch('/api/bugs'); // Fetch from the API route
                const data = await response.json();
                setBugs(data.bugs);
            } catch (error) {
                console.error("Error fetching bugs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBugs();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Loading state
    }

    return (
        <div>
            <h1>Bugs List</h1>
            {bugs.length === 0 ? (
                <p>No bugs found.</p>
            ) : (
                <ul>
                    {bugs.map((bug) => (
                        <li key={bug._id}>
                            <h2>{bug.title}</h2>
                            <p>{bug.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}