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

"use client";
import { useEffect, useState } from "react";
import { getUserEmail } from '../../api/login/route';

export default function BugsPage() {
    const [bugs, setBugs] = useState([]);
    const [loading, setLoading] = useState(true);
    const userEmail = getUserEmail(); // Get the user email

    useEffect(() => {
        const fetchBugs = async () => {
            try {
                const response = await fetch('/api/addbugs'); // Fetch from the API route
                const data = await response.json();

                // Filter the bugs associated with the user email
                const filteredBugs = data.bugs.filter(bug => bug.email === userEmail);
                setBugs(filteredBugs);
            } catch (error) {
                console.error("Error fetching bugs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBugs();
    }, [userEmail]); // Add userEmail as a dependency

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
                            <p>{bug.email}</p>                    
                            <p>{bug.description}</p>
                            <p>{bug.severity}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
