"use client";
import { useEffect, useState } from "react";
import styles from './bugs1.css';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function BugsPage() {
    const [bugs, setBugs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBugs = async () => {
            try {
                const response = await fetch('/api/addbugs'); // Fetch from the API route
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






        <div style={{ display: "flex" }}>
        {/* Dashboard section */}
        <div className="dashboard">
            <div className="icon-container">
                <div className="icon logo-icon" onClick={() => window.location.href = '/'} style={{ backgroundColor: "black" }}>
               

                    <Image src="/assets/logo.png" alt="logo" width={50} height={50} onClick={() => window.location.href = '/'} />

                </div>
                <div className="icon leaderboard-icon" onClick={() => window.location.href = '/leaderboard'}>
                <i class="fa-solid fa-trophy"></i>
                    <span className="tooltip">Leaderboard</span>
                </div>

                {/* <div className="icon logout-icon" style={{backgroundColor: "black "}} onClick={() => window.location.href = '/'}>
                <i class="fa-solid fa-right-from-bracket" style={{color: "#ffffff"}}></i>
                    <span className="tooltip">Log Out</span>
                </div>
 */}

            </div>
        </div>


         {/* Bugs list section */}
         <div className="bugs-container" style={{ marginLeft: '10%' }}> {/* Adjust for sidebar width */}




       



        
            <h1>Bugs List</h1>



                            {/*Log Out Button */}

                             <button 
                                    className="log-out" 
                                    onClick={() => window.location.href = "/"} // Call the function with the bug ID
                                    style={{ padding: '10px', backgroundColor: '#22c8ff', color: 'white', border: 'none', cursor: 'pointer', marginLeft: "59rem", marginBottom: "1rem" }}
                                >
                                    Log Out
                                </button>




            {bugs.length === 0 ? (
                <p>No bugs found.</p>
            ) : (
                <ul className="bugs-list" style={{paddingBottom: "1rem"}}>
                    {bugs.map((bug) => (
                        <li key={bug._id}  className={`bug-item ${bug.severity.toLowerCase()}`}>
                            <h2>{bug.title}</h2>
                            <p>{bug.email}</p>                    
                            <p>{bug.description}</p>
                            <p>{bug.severity}</p>

                        {/* <span className={`severity-tag ${bug.severity.toLowerCase()}`}>{bug.severity}</span> */}


<span>  </span>
                         {/* Send Feedback Button */}
                         <button 
                                    className="send-feedback" 
                                    onClick={() => window.location.href = "/feedback"} // Call the function with the bug ID
                                    style={{ padding: '10px', backgroundColor: '#22c8ff', color: 'white', border: 'none', cursor: 'pointer', marginLeft: "56rem" }}
                                >
                                    Send Feedback
                                </button>




                        </li>
                        // <button className="send-feedback" onClick={() => window.location.href = "/feedback"}><b>Send Feedback</b></button>
                    ))}
                </ul>
            )}
            </div>
        </div>
    );
}
