// // 'use client';

// // import Image from "next/image";
// // import { useSession } from "next-auth/react";
// // import React from 'react';
// // import styles from "./company_dashboard2.css";
// // import '@fortawesome/fontawesome-free/css/all.min.css';
// // import Cookies from "js-cookie";
// // import { useRouter } from "next/navigation";
// // import { signOut } from "next-auth/react";

// // const Dashboard = () => {
// //   const { data: session } = useSession();
// //   const router = useRouter();

// //   // Example static list of reported bugs (this is a placeholder)
// //   const reportedBugs = [
// //     { id: 1, title: 'SQL Injection Vulnerability', description: 'SQL Injection found in the login form.' },
// //     { id: 2, title: 'Cross-Site Scripting (XSS)', description: 'XSS vulnerability in the search bar.' },
// //     { id: 3, title: 'Insecure Direct Object Reference', description: 'Sensitive data exposed in API response.' },
// //     // Add more static bugs here for display
// //   ];

// //   return (
// //     <div className="dashboard">
// //       <div className="icon-container">
// //         <div className="icon logo-icon" onClick={() => window.location.href = '/logo'} style={{ backgroundColor: "black" }}>
// //           <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
// //         </div>
// //         <div className="icon leaderboard-icon" onClick={() => window.location.href = '/leaderboard'}>
// //           <i className="fa-solid fa-trophy"></i>
// //           <span className="tooltip">Leaderboard</span>
// //         </div>
// //       </div>

// //       {/* Main content area */}
// //       <div className="main-content">
// //         <h1>Hello, {session?.user?.name}!</h1>
// //         <h2>Welcome to the Company Dashboard</h2>

// //         {/* Bug list displayed on the right side */}
// //         <div className="bug-report-section">
// //           <h3>Reported Bugs</h3>
// //           {reportedBugs.length > 0 ? (
// //             <ul className="bug-list">
// //               {reportedBugs.map((bug) => (
// //                 <li key={bug.id} className="bug-item">
// //                   <h4>{bug.title}</h4>
// //                   <p>{bug.description}</p>
// //                   <button className="send-feedback-button" onClick={() => window.location.href = "/feedback"}>
// //                     Send Feedback
// //                   </button>
// //                 </li>
// //               ))}
// //             </ul>
// //           ) : (
// //             <p>No bugs reported yet.</p>
// //           )}
// //         </div>

// //         {/* Log Out Button */}
// //         <button type="submit" onClick={() => window.location.href = '/'}>Log Out</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;


// //NEW
// 'use client';

// import Image from "next/image";
// import { useSession } from "next-auth/react";
// import React from 'react';
// import styles from "./company_dashboard2.css";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { signOut } from "next-auth/react";

// const Dashboard = () => {
//   const { data: session } = useSession();
//   const router = useRouter();

//   // Example static list of reported bugs (placeholder)
//   const reportedBugs = [
//     { id: 1, title: 'SQL Injection Vulnerability', description: 'SQL Injection found in the login form.' },
//     { id: 2, title: 'Cross-Site Scripting (XSS)', description: 'XSS vulnerability in the search bar.' },
//     { id: 3, title: 'Insecure Direct Object Reference', description: 'Sensitive data exposed in API response.' },
//   ];

//   return (
//     <div className="dashboard">
//       <div className="icon-container">
//         <div className="icon logo-icon" onClick={() => window.location.href = '/logo'} style={{ backgroundColor: "black" }}>
//           <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
//         </div>
//         <div className="icon leaderboard-icon" onClick={() => window.location.href = '/leaderboard'}>
//           <i className="fa-solid fa-trophy"></i>
//           <span className="tooltip">Leaderboard</span>
//         </div>
//       </div>

//       {/* Main content area */}
//       <div className="main-content">
//         <h1>Hello, {session?.user?.name}!</h1>
//         <h2>Welcome to the Company Dashboard</h2>

//         {/* Bug list displayed in a full-width format */}
//         <div className="bug-report-section">
//           <h3>Reported Bugs</h3>
//           {reportedBugs.length > 0 ? (
//             <div className="bug-list">
//               {reportedBugs.map((bug) => (
//                 <div key={bug.id} className="bug-item">
//                   <h4>{bug.title}</h4>
//                   <p>{bug.description}</p>
//                   <button className="send-feedback-button">
//                     Send Feedback
//                   </button>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No bugs reported yet.</p>
//           )}
//         </div>

//         {/* Log Out Button */}
//         <button type="submit" className="logout-button" onClick={() => window.location.href = '/'}>
//           Log Out
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




'use client';

import Image from "next/image";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from 'react';
import styles from "./company_dashboard3.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import bug from "../models/bugsmodel"

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  // Dynamic data for bugs will be fetched from API or a real-time DB
  const [reportedBugs, setReportedBugs] = useState([]);

  useEffect(() => {
   
  }, []);

  return (
    <div className="dashboard">
      <div className="icon-container">
        <div className="icon logo-icon" onClick={() => window.location.href = '/logo'} style={{ backgroundColor: "black" }}>
          <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
        </div>
        <div className="icon leaderboard-icon" onClick={() => window.location.href = '/leaderboard'}>
          <i className="fa-solid fa-trophy"></i>
          <span className="tooltip">Leaderboard</span>
        </div>
      </div>

      {/* Main content area covering 80% of the page */}
      <div className="main-content">
        <h1>Hello, {session?.user?.name}!</h1>
        <h2>Welcome to the Company Dashboard</h2>

        {/* Bug list dynamically generated */}
        <div className="bug-report-section">
          <h3>Reported Bugs</h3>
          {reportedBugs.length > 0 ? (
            <div className="bug-list">
              {reportedBugs.map((bug) => (
                <div key={bug.id} className="bug-item">
                  <h4>{bug.title}</h4>
                  <p>{bug.description}</p>
                  <button className="send-feedback-button">
                    Send Feedback
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>No bugs reported yet.</p>
          )}
        </div>

        {/* Log Out Button */}
        <button type="submit" className="logout-button" onClick={() => window.location.href = '/'}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;