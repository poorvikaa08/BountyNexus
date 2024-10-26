// "use client";
// import { useEffect, useState } from "react";
// import { getUserEmail } from '../../api/login/route';

// export default function BugsPage() {
//     const [bugs, setBugs] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchBugs = async () => {
//             try {
//                 const response = await fetch('/api/addbugs'); // Fetch from the API route
//                 const data = await response.json();
//                 setBugs(data.bugs);
//             } catch (error) {
//                 console.error("Error fetching bugs:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBugs();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>; // Loading state
//     }

//     return (
//         <div>
//             <h1>Bugs List</h1>
//             {bugs.length === 0 ? (
//                 <p>No bugs found.</p>
//             ) : (
//                 <ul>
//                     {bugs.map((bug) => (
//                         <li key={bug._id}>
//                             <h2>{bug.title}</h2>
//                             <p>{bug.email}</p>                    
//                             <p>{bug.description}</p>
//                             <p>{bug.severity}</p>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }

// "use client";
// import { useEffect, useState } from "react";
// import { getUserEmail } from "../../utils/auth";

// export default function BugsPage() {
//     const [bugs, setBugs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [userEmail, setUserEmail] = useState(null);

//      userEmail = getUserEmail();
//      // Get the user email
//      console.log(userEmail);
//     //const userEmail = "hiralkjain21@gmail.com"; // Hard-coded email for the user
//     useEffect(() => {
//         // Retrieve email from localStorage on component mount
//         const email = getUserEmail();
//         if (email) {
//             setUserEmail(email);
//         }
//     }, []);
//     useEffect(() => {
//         const fetchBugs = async () => {
//             try {
//                 const response = await fetch('/api/addbugs'); // Fetch from the API route
//                 const data = await response.json();

//                 // Filter the bugs associated with the user email
//                 const filteredBugs = data.bugs.filter(bug => bug.email === userEmail);
//                 setBugs(filteredBugs);
//             } catch (error) {
//                 console.error("Error fetching bugs:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBugs();
//     }, [userEmail]); // Add userEmail as a dependency

//     if (loading) {
//         return <div>Loading...</div>; // Loading state
//     }

//     return (
//         <div>
//             <h1>Bugs List</h1>
//             {bugs.length === 0 ? (
//                 <p>No bugs found.</p>
//             ) : (
//                 <ul>
//                     {bugs.map((bug) => (
//                         <li key={bug._id}>
//                             <h2>{bug.title}</h2>
//                             <p>{bug.email}</p>                    
//                             <p>{bug.description}</p>
//                             <p>{bug.severity}</p>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }

'use client';
import { useEffect, useState } from "react";
import { getUserEmail } from "../../utils/auth"; // Adjust import path

export default function BugsPage() {
    const [bugs, setBugs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        // Retrieve email from localStorage on component mount
        const email = getUserEmail();
        if (email) {
            setUserEmail(email); // Set the state, not reassigning a const
        }
    }, []);

    useEffect(() => {
        if (userEmail) {
            const fetchBugs = async () => {
                try {
                    const response = await fetch(`/api/addbugs?userEmail=${userEmail}`);
                    const data = await response.json();
                    setBugs(data.bugs);
                } catch (error) {
                    console.error("Error fetching bugs:", error);
                } finally {
                    setLoading(false);
                }
            };
            fetchBugs();
        }
    }, [userEmail]);

    if (loading) return <div>Loading...</div>;

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
                            <p>{bug.severity}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
