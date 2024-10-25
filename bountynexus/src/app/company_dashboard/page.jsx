
// 'use client'; 
// import React from 'react';

// import './Dashboard.css'; // Importing CSS for styles
// import styles from "./dashboard.css";


// const Dashboard = () => {
//   const handleNavigation = (path) => {
//     // Implement navigation logic here (e.g., using react-router)
//     console.log(`Navigating to ${path}`);
//   };

//   return (
//     <div className="dashboard">
//       <div className="sidebar">
//         <div
//           className="sidebar-item"
//           onClick={() => handleNavigation('/profile')}
//           title="Profile"
//         >
//           <i className="icon profile-icon"></i>
//           <span className="tooltip">Profile</span>
//         </div>
//         <div
//           className="sidebar-item"
//           onClick={() => handleNavigation('/vulnerabilities')}
//           title="Vulnerabilities"
//         >
//           <i className="icon vulnerabilities-icon"></i>
//           <span className="tooltip">Vulnerabilities</span>
//         </div>
//         <div
//           className="sidebar-item"
//           onClick={() => handleNavigation('/leaderboard')}
//           title="Leaderboard"
//         >
//           <i className="icon leaderboard-icon"></i>
//           <span className="tooltip">Leaderboard</span>
//         </div>
//       </div>
//       <div className="content">
//         {/* Content for the selected page goes here */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// Correct form - 2nd code.


'use client';

import Image from "next/image";
import { useSession } from "next-auth/react";
import React from 'react';
import styles from "./company_dashboard.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signOut } from "next-auth/react";

// import logo1.png from './logo1.png.jpg'; 

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   // If there's no session and the session status is not loading, redirect to login
  //   if (status === "unauthenticated") {
  //     router.push("/login");  // Redirect to login if not logged in
  //     console.log(status);
  //   }
  //   // const loggedIn = Cookies.get("loggedin");
  //   // if (!loggedIn) {
  //   //   router.push("/login");
  //   // }
  // }, [session, status, router]);

  // const logout = () => {
  //   Cookies.remove("loggedin");
  //   router.push("/");
  // };
  return (
    <div className="dashboard">
      <div className="icon-container">

      <div className="icon logo-icon" onClick={() => window.location.href = '/logo'} style={{backgroundColor:"black"}}>
      <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
         
        </div>

        <div className="icon profile-icon" onClick={() => window.location.href = '/profile'}>
        <i class="fa-solid fa-user"></i>
          <span className="tooltip">Profile</span>
        </div>
        <div className="icon vuln-icon" onClick={() => window.location.href = '/vulnerabilities'}>
        <i class="fa-solid fa-bug"></i>
          <span className="tooltip">Vulnerabilities</span>
        </div>
        <div className="icon leaderboard-icon" onClick={() => window.location.href = '/leaderboard'}>
        <i class="fa-solid fa-trophy"></i>
          <span className="tooltip">Leaderboard</span>
        </div>
      </div>

{/* Main content area */}
<div className="main-content">
        <h1>Hello</h1>
        <span>{session?.user?.name}</span>
        <h1>Welcome!</h1>
     {/* <p>Track down bugs, rack up rewards, and show the world what you’ve got!</p>
       <p>Customize your profile by clicking the icon. Your adventure awaits!</p>  */}
      <button type="submit" onClick={() => signOut()}>Log Out</button>
         {/* The text you want in the free space */}
      </div>

    </div>
   );
 };

export default Dashboard;





// 'use client';
// import React from 'react';
// // import './styles.css';  // Import the styles
// import styles from "./dashboard.css";

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       {/* Left Sidebar for Icons */}
//       <div className="icon-container">


 
//       <div className="icon logo-icon" onClick={() => window.location.href = '/logo'}>
//           <span className="tooltip">Logo</span>
//         </div>


//         <div className="icon profile-icon" onClick={() => window.location.href = '/profile'}>
//           <span className="tooltip">Profile</span>
//         </div>
//         <div className="icon vuln-icon" onClick={() => window.location.href = '/vulnerabilities'}>
//           <span className="tooltip">Vulnerabilities</span>
//         </div>
//         <div className="icon leaderboard-icon" onClick={() => window.location.href = '/leaderboard'}>
//           <span className="tooltip">Leaderboard</span>
//         </div>
//       </div>
      
//       {/* Main Content with Stickers and Confetti */}
//       <div className="content">
//         <div className="confetti"></div>
//         <div className="welcome-text">
//           <h1>Hello, Bug Busters</h1>
//           <p>Track down bugs, rack up rewards, and show the world what you’ve got!</p>
//           <p>Customize your profile by clicking the icon. Your adventure awaits!</p>
//         </div>
//         <div className="stickers">
//           <div className="sticker sticker-1"></div>
//           <div className="sticker sticker-2"></div>
//           <div className="sticker sticker-3"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;






