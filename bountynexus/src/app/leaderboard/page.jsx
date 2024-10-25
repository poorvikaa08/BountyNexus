// import React from 'react';
// import './Leaderboard.css';

// const Leaderboard = () => {
//     return (
//         <div className="leaderboard-container">
//             <h2>Leaderboard</h2>
//             <table className="leaderboard-table">
//                 <thead>
//                     <tr>
//                         <th>Rank</th>
//                         <th>Name</th>
//                         <th>Points</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {/* Empty rows for future data */}
//                     {[...Array(10)].map((_, index) => (
//                         <tr key={index}>
//                             <td>{index + 1}</td>
//                             <td></td>
//                             <td></td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Leaderboard;


'use client';
import React, { useState, useEffect } from 'react';
import './leaderboard.css';

const Leaderboard = () => {
    const [leaders, setLeaders] = useState([]);

    // Function to fetch leaderboard data from the backend
    const fetchLeaderboardData = async () => {
        try {
            const response = await fetch('/api/leaderboard'); // Adjust the URL to match your backend endpoint
            const data = await response.json();
            setLeaders(data); // Assuming the data is an array of leaderboard entries
        } catch (error) {
            console.error('Error fetching leaderboard data:', error);
        }
    };

    // useEffect to fetch data when the component mounts
    useEffect(() => {
        fetchLeaderboardData(); // Call the fetch function when the component loads
    }, []);

    return (
        <div className="leaderboard-container">
            <h2>Leaderboard</h2>
            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {leaders.length > 0 ? (
                        leaders.map((leader, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{leader.name}</td>
                                <td>{leader.points}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;

